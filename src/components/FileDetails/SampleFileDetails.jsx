import { Modal } from "react-bootstrap";
import './SampleFileDetails.css';

const SampleFileDetails = ({
  isShow,
  fileName,
  fileType,
  fileSize,
  dimensions,
  imageUrl,
  onDownload,
  onCopyUrl,
  onClose,
  shareLinks = {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
}) => {
  return (
    <Modal 
      show={isShow} 
      centered
      dialogClassName="modal-80w"
      contentClassName="modal-80h"
      onHide={onClose}
    >
      <Modal.Body className="p-0 position-relative">
        <button 
          className="close-button" 
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="split-layout-container">
          {/* Left side - Image */}
          <div className="image-container">
            {imageUrl && (
              <img src={imageUrl} alt={fileName} className="file-image" />
            )}
          </div>

          {/* Right side - Details and actions */}
          <div className="details-container">
            <div className="file-header">
              <h2>Sample File Details</h2>
              <div className="file-id">Platba66amp2e</div>
            </div>

            <div className="file-details">
              <div className="detail-row">
                <span className="detail-label">File Name</span>
                <span className="detail-value">{fileName}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">File Type</span>
                <span className="detail-value">{fileType}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">File Size</span>
                <span className="detail-value">{fileSize}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Dimensions</span>
                <span className="detail-value">{dimensions}</span>
              </div>
            </div>

            <div className="action-buttons">
              <button  className="download-btn" onClick={onDownload}>Download</button>
              <button className="copy-btn" onClick={onCopyUrl}>Copy URL</button>
            </div>

            {/* <div className="social-sharing">
              <span>Share on</span>
              <div className="social-icons">
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-btn facebook">Facebook</a>
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-btn twitter">Twitter</a>
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">LinkedIn</a>
              </div>
            </div> */}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SampleFileDetails;