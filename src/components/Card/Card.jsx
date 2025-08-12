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
import { Modal } from "react-bootstrap";
import SampleFileDetails from "../SampleFileDetails/SampleFileDetails";
import { formatBytes } from "../../utils/Utils";

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

const Card = ({ file, imageSrc, title, size, dimensions, downloadLink, onClick }) => {
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
    //onClick(file);
    window.open(file.url, "_blank");
  };

  return (
    <div>
      <div
        className="image-wrapper bg-secondary-subtle"
        onClick={handlePreviewClick} // fix: actually call the function, not just a reference
        style={{ position: "relative", cursor: "pointer" }}
      >
        {file.resource_type === "video" && !placeholderMap[file.format] ? (
          <VideoThumbnailFromURL videoUrl={file.url} />
        ) : (
          <img
            src={placeholderMap[file.format] || imageSrc}
            alt={title}
            className="card-image"
            style={{ display: "block", width: "100%" }}
          />
        )}

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: "20px 12px", // increased vertical padding
            width: "100%",
            color: "white",
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)",
            boxSizing: "border-box",
            fontSize: "0.7rem",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <strong
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </strong>
          <span>
            {size} {dimensions && `- ${dimensions}`}
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* <h3 className="card-title">{title}</h3>
        <p className="card-metadata">{size}</p> */}
      </div>

      <div className="card-actions">
        {downloadLink && (
          <button
            className="btn btn-sm d-flex align-items-center justify-content-center gap-1 text-white rounded-pill px-1 py-1"
            style={{
              background: "linear-gradient(90deg, #00b4db 0%, #0083b0 100%)",
              fontSize: "0.7rem",
              minWidth: 0,
              flex: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            onClick={() => handleDownload(imageSrc, title)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              fill="currentColor"
              viewBox="0 0 256 256"
              style={{ display: "block" }}
            >
              <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"></path>
            </svg>
            <span>Download</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
