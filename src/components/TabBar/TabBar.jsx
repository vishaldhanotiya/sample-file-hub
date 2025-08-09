import Nav from "react-bootstrap/Nav";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import { db } from "../../App";
import Card from "../Card/Card";
import "./TabBar.css";
import { formatBytes } from "../../utils/Utils";

const TabBar = ({ tabData, selectedMenu }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.key || "");
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 25;

  useEffect(() => {
    if (tabData.length > 0 && tabData[0].key) {
      setActiveTab(tabData[0].key);
      fetchFiles(tabData[0].key);
    }
  }, [tabData]);

  useEffect(() => {
    if (activeTab) {
      fetchFiles(activeTab);
    }
  }, [activeTab]);

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
    setCurrentPage(1); // Reset page on new fetch
  };

  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);
  const totalPages = Math.ceil(files.length / filesPerPage);

  return (
    <div className="container mt-4">
      {/* Tabs */}
      <Nav
        activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
        className="mb-4 fs-5 fw-bold custom-nav"
      >
        {tabData.map((tab) => (
          <Nav.Item key={tab.key}>
            <Nav.Link
              className={`custom-nav-link ${
                activeTab === tab.key ? "active" : ""
              }`}
              eventKey={tab.key}
            >
              {tab.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Layout with Ad space */}
      <div className="row">
        {/* Left - Files */}
        <div className="col-lg-10 col-md-8">
          <div className="row custom-grid g-3">
            {currentFiles.map((item, index) => (
              <div key={index} className="col-5-per-row">
                <Card
                  file={item}
                  imageSrc={item.url}
                  title={item.name || `File ${index + 1}`}
                  size={item.bytes ? formatBytes(item.bytes) : "N/A"}
                  dimensions={item.width ? `${item.width}x${item.height}` : null}
                  downloadLink="#"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {files.length > filesPerPage && (
            <div className="d-flex align-items-center justify-content-center p-4">
              <nav>
                <ul className="pagination justify-content-center mb-0">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
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
          )}
        </div>

        {/* Right - Ad space */}
        <div className="col-lg-2 col-md-4">
          <div className="ad-box">
            <h5 className="text-center">Advertisement</h5>
            <div className="ad-placeholder">
              {/* Replace this div with your ad code */}
              Ad Content Here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
