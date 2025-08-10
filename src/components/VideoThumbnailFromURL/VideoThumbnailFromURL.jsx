import React, { useEffect, useRef, useState } from "react";

function VideoThumbnailFromURL({ videoUrl }) {
  const videoRef = useRef(null); // hidden video for metadata
  const previewRef = useRef(null); // visible video for hover preview
  const canvasRef = useRef(null);

  const [thumbnail, setThumbnail] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  // Format seconds into MM:SS or HH:MM:SS
  const formatDuration = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (videoUrl) {
      const video = videoRef.current;

      const handleLoadedMetadata = () => {
        setDuration(formatDuration(video.duration));
        video.currentTime = 1; // Seek to 1s for thumbnail
      };

      const handleSeeked = () => {
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const dataURL = canvas.toDataURL("image/png");
        setThumbnail(dataURL);
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("seeked", handleSeeked);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("seeked", handleSeeked);
      };
    }
  }, [videoUrl]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (previewRef.current) {
      previewRef.current.currentTime = 0;
      previewRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (previewRef.current) {
      previewRef.current.pause();
    }
  };

  return (
    <div style={{ height: "100%" }}>
      {/* Hidden video for thumbnail & metadata */}
      <video
        ref={videoRef}
        src={videoUrl}
        crossOrigin="anonymous"
        style={{ display: "none" }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {thumbnail && (
        <div
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
            overflow: "hidden",
            borderRadius: "8px",
            width: "100%",
            height: "100%",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Thumbnail or Hover Preview */}
          {!isHovering ? (
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <video
              ref={previewRef}
              src={videoUrl}
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          )}

          {/* Play Icon (only when not hovering) */}
          {!isHovering && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                padding: "15px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}

          {/* Duration Tag */}
          {duration && !isHovering && (
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {duration}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoThumbnailFromURL;