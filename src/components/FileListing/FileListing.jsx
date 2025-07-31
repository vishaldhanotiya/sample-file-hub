import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
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

const FileListing = () => {
  // Sample data for the table

  const [files, setFiles] = useState([]);
  const location = useLocation();
  const fileType = location.state.fileType;
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 25;

  useEffect(() => {
    fetchFiles(fileType);
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
    if (bytes === 0) {
      return "0 Bytes";
    }
    const i = parseInt(Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024)));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  }

  return (
    <div style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <Header />

      {/* Main Content */}
      <Container className="py-4">
        {/* Title and Filters */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold">PNG Images</h2>
          </Col>
          <Col className="d-flex justify-content-end gap-2">
            <Button variant="light" className="d-flex align-items-center">
              Size <i className="bi bi-caret-down ms-2"></i>
            </Button>
            <Button variant="light" className="d-flex align-items-center">
              Color <i className="bi bi-caret-down ms-2"></i>
            </Button>
            <Button variant="light" className="d-flex align-items-center">
              Sort <i className="bi bi-caret-down ms-2"></i>
            </Button>
          </Col>
        </Row>

        {/* Table */}
        <div className="table-responsive rounded shadow-sm border">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="text-center py-4">Thumbnail</th>
                <th className="py-4">File Name</th>
                <th className="py-4">Type</th>
                <th className="py-4">Size</th>
                <th className="text-center py-4">Actions</th>
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
                    <img
                      src={file.url}
                      alt="thumb"
                      className="rounded-circle shadow-sm"
                      width="60"
                      height="60"
                      style={{ objectFit: "cover" }}
                    />
                  </td>
                  <td className="fw-normal">{file.display_name}</td>
                  <td className="text-muted text-capitalize">{file.format}</td>
                  <td>{formatBytes(file.bytes)}</td>
                  <td className="text-center">
                    <button
                      onClick={() => window.open(file.url, "_blank")}
                      className="btn btn-outline-primary btn-sm me-2"
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => navigator.clipboard.writeText(file.url)}
                    >
                      Copy URL
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="d-flex align-items-center justify-content-center p-4">
          <nav>
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 && "disabled"}`}>
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
                  currentPage === totalPages && "disabled"
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