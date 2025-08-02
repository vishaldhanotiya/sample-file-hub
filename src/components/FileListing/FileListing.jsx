import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import { db } from "../../App";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import VideoThumbnailFromURL from "../VideoThumbnailFromURL/VideoThumbnailFromURL";

// Placeholder icons
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

const FileListing = () => {
  const [files, setFiles] = useState([]);
  const location = useLocation();
  const fileType = location?.state?.fileType;
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 25;

  useEffect(() => {
    if (fileType) {
      fetchFiles(fileType);
    }
  }, []);

  const fetchFiles = async (type) => {
    let q = collection(db, "files");

    if (type && type !== "All") {
      q = query(q, where("format", "==", type));
    } else {
      q = query(q, orderBy("createdAt", "desc"));
    }

    const snapshot = await getDocs(q);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const sortedDocs = docs.sort((a, b) => a.bytes - b.bytes);

    setFiles(sortedDocs);
  };

  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);
  const totalPages = Math.ceil(files.length / filesPerPage);

  function formatBytes(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Bytes";
    const i = parseInt(Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024)));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  }

  const upperCaseType = fileType?.toUpperCase() || "All";

  return (
    <div style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <Header />

      <Container fluid className="py-4 px-3 px-md-5">
        {/* Title and Filters */}
        <Row className="align-items-center mb-4">
          <Col xs={12} md={6}>
            <h4 className="fw-bold mb-3 mb-md-0 text-center text-md-start">
              {upperCaseType} Files
            </h4>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column flex-md-row justify-content-md-end gap-2"
          >
            <Button variant="light" className="w-100 w-md-auto">
              Size <i className="bi bi-caret-down ms-1"></i>
            </Button>
            <Button variant="light" className="w-100 w-md-auto">
              Color <i className="bi bi-caret-down ms-1"></i>
            </Button>
            <Button variant="light" className="w-100 w-md-auto">
              Sort <i className="bi bi-caret-down ms-1"></i>
            </Button>
          </Col>
        </Row>

        {/* Table */}
        <div className="table-responsive rounded shadow-sm border">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="text-center py-3">Image</th>
                <th className="py-3"> Name</th>
                {/* <th className="py-3">Type</th> */}
                <th className="py-3">Size</th>
                <th className="text-center py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentFiles.map((file, idx) => (
                <tr
                  key={file.id}
                  className={idx % 2 === 0 ? "bg-light" : ""}
                  style={{ verticalAlign: "middle" }}
                >
                  <td className="text-center">
                    {file.resource_type === "video" &&
                    !placeholderMap[file.format] ? (
                      <VideoThumbnailFromURL videoUrl={file.url} />
                    ) : (
                      <img
                        src={placeholderMap[file.format] || file.url}
                        alt="thumb"
                        className="rounded-circle shadow-sm"
                        width="60"
                        height="60"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </td>
                  <td className="fw-normal">{file.display_name}</td>
                  {/* <td className="text-muted text-capitalize">{file.format}</td> */}
                  <td>{formatBytes(file.bytes)}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                      <button
                        onClick={() => window.open(file.url, "_blank")}
                        className="btn btn-outline-primary btn-sm"
                      >
                        View
                      </button>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() =>
                          navigator.clipboard.writeText(file.url)
                        }
                      >
                        Copy
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="d-flex align-items-center justify-content-center p-4">
          <nav>
            <ul className="pagination justify-content-center mb-0">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                >
                  Previous
                </button>
              </li>
              <li className="page-item disabled">
                <span className="page-link">
                  Page {currentPage} of {totalPages}
                </span>
              </li>
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default FileListing;
