export const generateThumbnailFromVideoUrl = (videoUrl, seekTo = 3) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous'; // Only works if server has CORS headers
      video.src = videoUrl;
      video.muted = true; // Needed for autoplay in some browsers
      video.playsInline = true;
  
      const canvas = document.createElement('canvas');
  
      video.addEventListener('loadeddata', () => {
        video.currentTime = seekTo;
      });
  
      video.addEventListener('seeked', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailDataUrl = canvas.toDataURL('image/png');
        resolve(thumbnailDataUrl);
      });
  
      video.addEventListener('error', (e) => {
        reject('Failed to load video or generate thumbnail');
      });
    });
  };
  