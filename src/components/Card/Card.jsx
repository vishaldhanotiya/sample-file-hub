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

const Card = ({
  file,
  imageSrc,
  title,
  size,
  dimensions,
  downloadLink,
  detailsLink,
}) => {
  return (
    <div className="card-container">
      <div className="image-wrapper bg-primary">
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
          <a href={downloadLink} className="card-link">
            Download
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
