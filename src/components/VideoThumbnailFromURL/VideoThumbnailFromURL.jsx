import  { useEffect, useRef, useState } from "react";

function VideoThumbnailFromURL({ videoUrl }) {
  const videoRef = useRef(null);
  const previewRef = useRef(null);
  const canvasRef = useRef(null);

  const [thumbnail, setThumbnail] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isPreviewReady, setIsPreviewReady] = useState(false);
  const [error, setError] = useState(null);

  const formatDuration = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    return `${mins}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!videoUrl) return;

    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      try {
        setDuration(formatDuration(video.duration));
        video.currentTime = Math.min(1, video.duration * 0.1); // Seek to 1s or 10% of duration
      } catch (err) {
        console.error("Error handling metadata:", err);
        setError("Failed to load video metadata");
      }
    };

    const handleSeeked = () => {
      try {
        const canvas = canvasRef.current;
        if (!canvas || !video.videoWidth || !video.videoHeight) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const dataURL = canvas.toDataURL("image/png");
        setThumbnail(dataURL);
      } catch (err) {
        console.error("Error generating thumbnail:", err);
        setError("Failed to generate thumbnail");
      }
    };

    const handleError = () => {
      setError("Failed to load video");
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("error", handleError);
    };
  }, [videoUrl]);

 const handleMouseEnter = () => {
  setIsHovering(true);
  const preview = previewRef.current;
  if (preview) {
    // ensure we start from the beginning and only fade in when we can play
    try { preview.currentTime = 0; } catch (_) {}
    const tryPlay = () => {
      preview.play().catch(() => {/* ignore autoplay/abort errors */});
    };
    if (isPreviewReady) {
      tryPlay();
    } else {
      const onCanPlay = () => {
        setIsPreviewReady(true);
        tryPlay();
      };
      preview.addEventListener('canplay', onCanPlay, { once: true });
    }
  }
};

const handleMouseLeave = () => {
  setIsHovering(false);
  const preview = previewRef.current;
  if (preview && !preview.paused) {
    preview.pause();
  }
};


  if (error) {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        borderRadius: "8px",
        color: "#666",
        padding: "16px"
      }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{ height: "100%" }}>
      {/* Hidden elements for processing */}
      <video
        ref={videoRef}
        src={videoUrl}
        crossOrigin="anonymous"
        style={{ display: "none" }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* Thumbnail container */}
      <div
        style={{
          position: "relative",
          display: "inline-block",
          cursor: "pointer",
          overflow: "hidden",
          borderRadius: "8px",
          width: "100%",
          height: "100%",
          backgroundColor: "#000" // Fallback background to avoid white flash
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {thumbnail ? (
          <>
            {/* Always render the image as the base layer */}
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                backgroundColor: "#000"
              }}
            />
            {/* Video overlay fades in only when it can play to avoid white flicker */}
            <video
              ref={previewRef}
              src={videoUrl}
              muted
              playsInline
              preload="metadata"
              poster={thumbnail}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                backgroundColor: "#000",
                opacity: isHovering && isPreviewReady ? 1 : 0,
                transition: "opacity 120ms ease-in"
              }}
              onCanPlay={() => setIsPreviewReady(true)}
            />

            {/* Play Icon */}
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
                  top: "8px",
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
          </>
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
            backgroundColor: "#000"
          }}>
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoThumbnailFromURL;