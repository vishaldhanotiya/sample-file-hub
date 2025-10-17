import { fileTypeToBasePath } from "../utils/Constant";
import { doc, setDoc, increment } from "@firebase/firestore";
import { db } from "../App";
import { trackDownload, trackDownloadError } from "./Analytics";
import {
  allFileType,
} from "../utils/Constant";

export const generateThumbnailFromVideoUrl = (videoUrl, seekTo = 0.1) => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;
    video.src = videoUrl;

    const canvas = document.createElement('canvas');
    let timeoutId;

    const cleanup = () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('error', onError);
      if (timeoutId) clearTimeout(timeoutId);
    };

    const finalize = () => {
      try {
        canvas.width = video.videoWidth || 320;
        canvas.height = video.videoHeight || 180;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailDataUrl = canvas.toDataURL('image/png');
        cleanup();
        resolve(thumbnailDataUrl);
      } catch (_) {
        cleanup();
        resolve('');
      }
    };

    const onLoadedMetadata = () => {
      if (!Number.isFinite(seekTo) || seekTo <= 0) {
        // Grab first frame immediately for speed
        finalize();
      } else {
        try {
          video.currentTime = seekTo;
        } catch (_) {
          // Some browsers throw AbortError if not seekable yet; fallback to first frame
          finalize();
        }
      }
    };

    const onLoadedData = () => {
      // In case metadata already loaded and no seek needed
      if (!Number.isFinite(seekTo) || seekTo <= 0) finalize();
    };

    const onSeeked = () => finalize();

    const onError = () => {
      cleanup();
      resolve('');
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('seeked', onSeeked);
    video.addEventListener('error', onError);

    // Safety timeout to avoid hanging
    timeoutId = setTimeout(() => {
      onError();
    }, 4000);
  });
};


export const formatBytes=(bytes, decimalMode = true)=> {
  const unit = decimalMode ? 1000 : 1024;
  if (bytes < unit) return `${bytes} B`;
  const exp = Math.floor(Math.log(bytes) / Math.log(unit));
  const size = (bytes / Math.pow(unit, exp)).toFixed(1);
  const prefix = (decimalMode ? "kMGTPE" : "KMGTPE")[exp - 1];
  const unitSuffix = decimalMode ? "B" : "iB";
  return `${size} ${prefix}${unitSuffix}`;
}

export const getBasePath = (type) => fileTypeToBasePath[type] || null;


   export const handleDownload = async (url, filename, file) => {
      try {
        trackDownload(
          file.resourceType,
          file.displayName,
          file.format,
          file.bytes
        );
        updateDownloadCount(file);
  
        // Clone headers
        const newHeaders = new Headers();
        newHeaders.set("Access-Control-Allow-Origin", "*");
        newHeaders.set(
          "Access-Control-Allow-Methods",
          "GET, PUT, POST, DELETE, HEAD"
        );
        newHeaders.set("Access-Control-Allow-Headers", "*");
        const response = await fetch(
          `https://media-proxy.samplefiles.dev?url=${url}`,
          { mode: "cors" }
        );
        if (!response.ok) throw new Error("Network response was not ok");
  
        const contentLength = response.headers.get("content-length");
        if (!contentLength)
          console.warn("No content-length header, progress won't work well.");
  
  
        const reader = response.body.getReader();
        const chunks = [];
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
        }
  
        const blob = new Blob(chunks);
        const blobUrl = URL.createObjectURL(blob);
        const extension = file.format || file.contentType?.split("/")[1] || "dat";
        const finalName =
          `sample-${filename}` || `sample-${file.name}.${extension}`;
        console.log("Downloading 1:", finalName);
  
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = finalName;
        document.body.appendChild(a);
        a.click();
        a.remove();
  
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        trackDownloadError(file.format, error);
        console.error("Download failed", error);
      }
    };
  
    const updateDownloadCount = async (file) => {
      const { format } = file;
      const { resourceType } = allFileType.find((item) => item.key === format);
  
      if (!format || !resourceType) return;
      const docRef = doc(db, "downloadCount", "allCategories");
  
      try {
        await setDoc(
          docRef,
          {
            totals: { [resourceType]: increment(1) },
            types: { [format]: increment(1) },
          },
          { merge: true }
        );
  
        console.log(`${format} download count updated for ${resourceType}`);
      } catch (err) {
        console.error("Error updating download count:", err);
      }
    };