import Nav from "react-bootstrap/Nav";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import { db } from "../../App";
import Card from "../Card/Card";
import "../TabBar/TabBar.css";
import { formatBytes, getBasePath } from "../../utils/Utils";
import { useEffect, useMemo, useState, useCallback } from "react";
import SampleFileDetails from "../SampleFileDetails/SampleFileDetails";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMetaData,
  documentTabData as tabData,
  updatedDatabaseKey,
} from "../../utils/Constant";

const filesPerPage = 25;

const SampleDocument = () => {
  const { filePath } = useParams();
  const fileType = filePath?.split("-").pop() || tabData[0]?.key;
  const [activeTab, setActiveTab] = useState(fileType || tabData[0]?.key);
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFileDetail, setModalFileDetail] = useState({});
  const navigate = useNavigate();

  // Fetch files function with caching and optional type
  const fetchFiles = useCallback(async (type) => {
    const qBase = collection(db, updatedDatabaseKey);
    const q =
      type && type !== "All"
        ? query(qBase, where("format", "==", type))
        : query(qBase, orderBy("createdAt", "desc"));

    const cacheKey = `filesCache_${type || "All"}`;

    // 1. Load from localStorage first
    const cachedLocal = localStorage.getItem(cacheKey);
    if (cachedLocal) setFiles(JSON.parse(cachedLocal));

    try {
      // 2. Load from Firestore (cache first)
      const cacheSnap = await getDocs(q, { source: "cache" });
      if (!cacheSnap.empty) {
        const cachedDocs = cacheSnap.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => a.bytes - b.bytes);
        setFiles(cachedDocs);
        localStorage.setItem(cacheKey, JSON.stringify(cachedDocs));
      }

      // 3. Load from server (fresh data)
      const serverSnap = await getDocs(q, { source: "server" });
      if (!serverSnap.empty) {
        const serverDocs = serverSnap.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => a.bytes - b.bytes);
        setFiles(serverDocs);
        localStorage.setItem(cacheKey, JSON.stringify(serverDocs));
      }
    } catch (err) {
      console.error("Error fetching files:", err);
    }

    setCurrentPage(1);
  }, []);

  const metaData = useMemo(() => getMetaData(activeTab), [activeTab]);

  // Update activeTab if fileType param changes
  useEffect(() => {
    if (!fileType) return;
    setActiveTab(fileType);
  }, [fileType]);

  // Fetch files when activeTab changes
  useEffect(() => {
    if (activeTab) fetchFiles(activeTab);

    const basePath = getBasePath(activeTab);
    if (basePath) {
      navigate(basePath, { replace: true });
    } else {
      navigate("/sample-documents/sample-pdf");
    }

    document.title = metaData.title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = metaData.description;
  }, [activeTab, fetchFiles]);

  // Pagination logic
  const { currentFiles, totalPages } = useMemo(() => {
    const indexOfLastFile = currentPage * filesPerPage;
    const indexOfFirstFile = indexOfLastFile - filesPerPage;
    return {
      currentFiles: files.slice(indexOfFirstFile, indexOfLastFile),
      totalPages: Math.ceil(files.length / filesPerPage),
    };
  }, [files, currentPage]);
console.log(fileType)
  return (
    <div className="container mt-4" style={{ maxWidth: "1200px" }}>
      <div
        className="pt-2 pb-2 text-black"
        dangerouslySetInnerHTML={{ __html: metaData.bodyText }}
      />

      {fileType === "csv" && (
        <div style={{ marginBottom: 50 }}>
          CSV from{" "}
          <a href="https://www.mockaroo.com">mockaroo</a>
        </div>
      )}
      {/* Tab Bar */}
      <Nav
        activeKey={activeTab}
        onSelect={setActiveTab}
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

      {/* Files Grid */}
      <div className="row g-3">
        {currentFiles.map((file, index) => (
          <div
            key={file.id || index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
          >
            <Card
              file={file}
              imageSrc={file.url}
              title={file.name || `File ${index + 1}`}
              size={file.bytes ? formatBytes(file.bytes) : "N/A"}
              dimensions={file.width ? `${file.width}x${file.height}` : null}
              downloadLink="#"
              onClick={() => {
                setModalFileDetail(file);
                setModalOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {files.length > filesPerPage && (
        <div className="d-flex justify-content-center p-4">
          <nav>
            <ul className="pagination mb-0">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
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

      {/* File Details Modal */}
      <SampleFileDetails
        isShow={modalOpen}
        fileName={modalFileDetail.display_name || modalFileDetail.displayName}
        fileType={modalFileDetail.format}
        fileSize={formatBytes(modalFileDetail.bytes)}
        dimensions={
          modalFileDetail.width
            ? `${modalFileDetail.width}x${modalFileDetail.height}`
            : null
        }
        onClose={() => setModalOpen(false)}
        imageUrl={modalFileDetail.url}
        onDownload={() => alert("Download clicked")}
        onCopyUrl={() => alert("Copy URL clicked")}
        shareLinks={{
          facebook: "https://facebook.com/sharer/sharer.php?u=YOUR_URL",
          twitter: "https://twitter.com/share?url=YOUR_URL",
          linkedin: "https://linkedin.com/shareArticle?url=YOUR_URL",
        }}
      />
    </div>
  );
};

export default SampleDocument;
