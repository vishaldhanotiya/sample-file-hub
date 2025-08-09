import React, { useEffect, useRef, useState } from "react";

function VideoThumbnailFromURL({ videoUrl }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (videoUrl) {
      // Load video and wait for metadata to be ready
      const video = videoRef.current;

      const handleLoadedMetadata = () => {
        video.currentTime = 1; // Seek to 1s (adjust as needed)
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

      // Clean up
      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("seeked", handleSeeked);
      };
    }
  }, [videoUrl]);

  return (
    <div className="bg-secondary-subtle">
      <video
        ref={videoRef}
        src={videoUrl}
        crossOrigin="anonymous"
        style={{ display: "none" }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {thumbnail && (
        <div >
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className="image-wrapper"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
}

export default VideoThumbnailFromURL;
