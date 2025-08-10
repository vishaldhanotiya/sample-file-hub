import React from "react";
import "./Card.css";
import VideoThumbnailFromURL from "../VideoThumbnailFromURL/VideoThumbnailFromURL";

import PdfIcon from "../../assets/pdf.png";
import PptIcon from "../../assets/ppt.png";
import OdtIcon from "../../assets/odt.png";
import RtfIcon from "../../assets/rtf.png";
import Mp3Icon from "../../assets/mp3.png";
import DocxIcon from "../../assets/docx.png";
import TextIcon from "../../assets/text.png";
import AacIcon from "../../assets/aac.png";
import WavIcon from "../../assets/wav.png";
import OggIcon from "../../assets/ogg.png";
import AviIcon from "../../assets/avi.png";
import FlvIcon from "../../assets/flv.png";
import {
  trackDownload,
  trackDownloadError,
  trackMediaView,
} from "../../utils/Analytics";

const placeholderMap = {
  pdf: PdfIcon,
  pptx: PptIcon,
  odt: OdtIcon,
  rtf: RtfIcon,
  mp3: Mp3Icon,
  docx: DocxIcon,
  txt: TextIcon,
  aac: AacIcon,
  wav: WavIcon,
  ogg: OggIcon,
  avi: AviIcon,
  flv: FlvIcon,
};

const Card = ({ file, imageSrc, title, size, dimensions, downloadLink }) => {
  // Function to trigger download
  const handleDownload = async (url, filename) => {
    trackDownload(file.type, file.name, file.format, file.size);

    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename || "download";
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
      trackDownloadError(file.type, error);
    }
  };

  const handlePreviewClick = () => {
    trackMediaView(file.type, file.name);
    window.open(file.url, "_blank");
  };

  return (
    <div>
      <div
        className="image-wrapper bg-secondary-subtle"
        onClick={() => handlePreviewClick}
      >
        {file.resource_type === "video" && !placeholderMap[file.format] ? (
          <VideoThumbnailFromURL videoUrl={file.url} />
        ) : (
          <img
            src={placeholderMap[file.format] || imageSrc}
            alt={title}
            className="card-image"
          />
        )}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-metadata">
        {size}
        {dimensions && `, ${dimensions}`}
      </p>
      <div className="card-actions">
        {downloadLink && (
          <button
            className="card-link btn btn-link p-0"
            onClick={() => handleDownload(imageSrc, title)}
          >
            Download
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
