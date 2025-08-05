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
  const [activeTab, setActiveTab] = useState(tabData[0].key); // default to first tab

  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 25;


  useEffect(() => {
    if (tabData[0].key) {
      setActiveTab(tabData[0].key);
      fetchFiles(tabData[0].key);
    }
  }, [tabData[0].key]);

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
  };

  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);
  const totalPages = Math.ceil(files.length / filesPerPage);

  return (
    <div className="container mt-4 ms-5">
      <Nav
        // fill
        activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
        className="mb-4 ms-4 fs-5 fw-bold custom-nav"
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
      <div className="row">
        {currentFiles.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            onClick={() => {
              // Add your logic here
            }}
          >
            <Card
              file={item}
              imageSrc={item.url}
              title={`File ${index + 1}`}
              size={item.bytes ? formatBytes(item.bytes): "N/A"}
              dimensions={item.width ? `${item.width}x${item.height}` : null}
              downloadLink="#"
            />
          </div>
        ))}
      </div>
              {/* Pagination */}
              <div className="d-flex align-items-center justify-content-center p-4">
          <nav>
            <ul className="pagination justify-content-center mb-0">
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
    </div>
  );
};

export default TabBar;

// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
// } from "@firebase/firestore";
// import { db } from "../../App";
// import { useLocation } from "react-router-dom";
// import Card from "../Card/Card";
// import "./TabBar.css";

// const TabBar = ({ tabData }) => {
//   console.log("Tab Data:", tabData);

//   const [key, setKey] = useState(tabData[0].key); // default to first tab

//   const [files, setFiles] = useState([]);
//   const location = useLocation();
//   const fileType = location?.state?.fileType;
//   const [currentPage, setCurrentPage] = useState(1);
//   const filesPerPage = 25;

//   useEffect(() => {
//     if (key) {
//       fetchFiles(key);
//     }
//   }, [key]);

//   const fetchFiles = async (type) => {
//     let q = collection(db, "files");

//     if (type && type !== "All") {
//       q = query(q, where("format", "==", type));
//     } else {
//       q = query(q, orderBy("createdAt", "desc"));
//     }

//     const snapshot = await getDocs(q);
//     const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     const sortedDocs = docs.sort((a, b) => a.bytes - b.bytes);

//     setFiles(sortedDocs);
//   };

//   return (
//     <Tabs
//       id="dynamic-tab-example"
//       activeKey={key}
//       fill

//       onSelect={(k) => setKey(k)}
//       className="mb-5 fs-5"
//     >
//       {tabData.map((tab) => (
//         <Tab
//           key={tab.key}
//           eventKey={tab.key}
//           title={<span className="fw-bold">{tab.title}</span>}
//           disabled={tab.disabled}
//         >
//      <div className="mb-5" key={"index"}>
//   <div className="row g-3">
//     {files.map((item, index) => (
//       <div
//         key={index}
//         className="col-12 col-sm-6 col-md-4 col-lg-3"
//         onClick={() => {
//           // Add your logic here
//         }}
//       >
//         <Card
//           imageSrc={item.url}
//           title={`File ${index + 1}`}
//           size="1MB"
//           dimensions={item.width ? `${item.width}x${item.height}` : null}
//           downloadLink="#"
//         />
//       </div>
//     ))}
//   </div>
// </div>

//         </Tab>
//       ))}
//     </Tabs>
//   );
// };

// export default TabBar;
