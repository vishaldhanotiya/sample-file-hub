import "./Card.css";
import { useState } from "react";
import VideoThumbnailFromURL from "../VideoThumbnailFromURL/VideoThumbnailFromURL";

import PdfIcon from "../../assets/pdf.png";
import PptIcon from "../../assets/ppt.png";
import PptxIcon from "../../assets/pptx.png";
import OdtIcon from "../../assets/odt.png";
import RtfIcon from "../../assets/rtf.png";
import Mp3Icon from "../../assets/mp3.png";
import DocIcon from "../../assets/doc.png";
import DocxIcon from "../../assets/docx.png";
import XlsIcon from "../../assets/xls.png";
import XlsxIcon from "../../assets/xlsx.png";
import TextIcon from "../../assets/txt.png";
import AacIcon from "../../assets/aac.png";
import WavIcon from "../../assets/wav.png";
import OggIcon from "../../assets/ogg.png";
import AviIcon from "../../assets/avi.png";
import FlvIcon from "../../assets/flv.png";
import ZipIcon from "../../assets/zip.png";
import RarIcon from "../../assets/rar.png";
import TarIcon from "../../assets/tar.png";
import JsonIcon from "../../assets/json.png";
import XmlIcon from "../../assets/xml.png";
import ZIcon from "../../assets/7z.png";
import CsvIcon from "../../assets/csv.png";
import {
  trackDownload,
  trackDownloadError,
  trackMediaView,
} from "../../utils/Analytics";

const placeholderMap = {
  pdf: PdfIcon,
  ppt: PptIcon,
  pptx: PptxIcon,
  odt: OdtIcon,
  rtf: RtfIcon,
  mp3: Mp3Icon,
  doc: DocIcon,
  docx: DocxIcon,
  xls: XlsIcon,
  xlsx: XlsxIcon,
  txt: TextIcon,
  aac: AacIcon,
  wav: WavIcon,
  ogg: OggIcon,
  avi: AviIcon,
  flv: FlvIcon,
  zip: ZipIcon,
  rar: RarIcon,
  "7z": ZIcon,
  xml: XmlIcon,
  tar: TarIcon,
  json: JsonIcon,
  csv: CsvIcon,
};

const Card = ({
  file,
  imageSrc,
  title,
  size,
  dimensions,
  downloadLink,
  onClick,
}) => {
  // Function to trigger download
  const [progress, setProgress] = useState(null); // store progress (0-100)

  
  const handleDownload = async (url, filename) => {
    try {
      setProgress(0); // Start progress
      // Clone headers
      const newHeaders = new Headers();
      newHeaders.set("Access-Control-Allow-Origin", "*");
      newHeaders.set(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST, DELETE, HEAD"
      );
      newHeaders.set("Access-Control-Allow-Headers", "*");
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error("Network response was not ok");

      const contentLength = response.headers.get("content-length");
      if (!contentLength)
        console.warn("No content-length header, progress won't work well.");

      const total = parseInt(contentLength, 10);
      let loaded = 0;

      const reader = response.body.getReader();
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        loaded += value.length;
        if (total) setProgress(Math.floor((loaded / total) * 100));
      }

      const blob = new Blob(chunks);
      const blobUrl = URL.createObjectURL(blob);
      const extension = file.format || file.type?.split("/")[1] || "dat";
      const finalName =
        `sample-${filename}` || `sample-${file.name}.${extension}`;
        console.log("Downloading 1:", finalName);
                        console.log("Downloading 2:", `sample-${file.name}.${extension}`);

                console.log("Downloading 3:",filename);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = finalName;
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(blobUrl);
      setProgress(null);
    } catch (error) {
      console.error("Download failed", error);
      setProgress(null);
    }
  };

  // const handleDownload = async (url, filename) => {
  //   trackDownload(file.type, file.name, file.format, file.size);
  // const extension = file.format || file.type?.split("/")[1] || "dat";
  //   const finalName = `sample-${filename}` || `sample-${file.name}.${extension}`;

  //   console.log("Downloading:", finalName);
  //   try {
  //        // Clone headers
  //   const newHeaders = new Headers();
  //   newHeaders.set("Access-Control-Allow-Origin", "*");
  //   newHeaders.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD");
  //   newHeaders.set("Access-Control-Allow-Headers", "*");
  //     const response = await fetch(url, { mode: "cors", headers: newHeaders });
  //     if (!response.ok) throw new Error("Network response was not ok");

  //     const blob = await response.blob();
  //     const blobUrl = window.URL.createObjectURL(blob);

  //     const a = document.createElement("a");
  //     a.href = blobUrl;
  //     a.download = finalName || "download";
  //     document.body.appendChild(a);
  //     a.click();

  //     a.remove();
  //     window.URL.revokeObjectURL(blobUrl);
  //   } catch (error) {
  //     console.error("Download failed", error);
  //     trackDownloadError(file.type, error);
  //   }
  // };

  const handlePreviewClick = () => {
    trackMediaView(file.type, file.name);
    //onClick(file);
    window.open(file.url, "_blank");
  };

  return (
    <div>
      <div
        className="image-wrapper"
        onClick={handlePreviewClick} // fix: actually call the function, not just a reference
        style={{
          position: "relative",
          backgroundColor: "#ebf4ff",
          cursor: "pointer",
        }}
      >
        {file.resource_type ||
        (file.resourceType === "video" && !placeholderMap[file.format]) ? (
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
              position: "relative",
              background: "linear-gradient(90deg, #8d85ff 0%, #5c7fff 100%)",
              fontSize: "0.7rem",
              minWidth: 0,
              flex: 1,
              overflow: "hidden",
            }}
            onClick={() =>
              handleDownload(imageSrc, file.displayName.replace(/\s+/g, "-").toLowerCase())
            }
            disabled={progress !== null}
          >
            {progress !== null ? (
              <>
                {/* Progress Bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "rgba(255,255,255,0.4)",
                    transition: "width 0.2s ease",
                    zIndex: 1,
                  }}
                ></div>
                <span style={{ zIndex: 2 }}>{progress}%</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  style={{ display: "block" }}
                >
                  <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"></path>
                </svg>
                <span className="fw-medium">Download</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
