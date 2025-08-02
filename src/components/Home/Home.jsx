import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";

const documentArray = [
  {
    header: "Image Files",
    documentType: [
      { label: "PNG", type: "png", icon: require("../../assets/icon-png.png") },
      { label: "JPG", type: "jpg", icon: require("../../assets/icon-jpg.png") },
      { label: "SVG", type: "svg", icon: require("../../assets/icon-svg.png") },
      { label: "GIF", type: "gif", icon: require("../../assets/icon-gif.png") },
      {
        label: "WEBP",
        type: "webp",
        icon: require("../../assets/icon-webp.png"),
      },
      { label: "BMP", type: "bmp", icon: require("../../assets/icon-bmp.png") },
    ],
  },
  {
    header: "Video Files",
    documentType: [
      { label: "MP4", type: "mp4", icon: require("../../assets/icon-mp4.png") },
      { label: "MKV", type: "mkv", icon: require("../../assets/icon-mkv.png") },
      { label: "AVI", type: "avi", icon: require("../../assets/icon-avi.png") },
      { label: "FLV", type: "flv", icon: require("../../assets/icon-flv.png") },
      { label: "MOV", type: "mov", icon: require("../../assets/icon-mov.png") },
      {
        label: "WEBM",
        type: "webm",
        icon: require("../../assets/icon-webm.png"),
      },
    ],
  },
  {
    header: "Document Files",
    documentType: [
      { label: "PDF", type: "pdf", icon: require("../../assets/icon-pdf.png") },
      { label: "ODT", type: "odt", icon: require("../../assets/icon-odt.png") },
      { label: "RTF", type: "rtf", icon: require("../../assets/icon-rtf.png") },
      {
        label: "PPT",
        type: "pptx",
        icon: require("../../assets/icon-ppt.png"),
      },
      {
        label: "DOCX",
        type: "docx",
        icon: require("../../assets/icon-docx.png"),
      },
      {
        label: "TEXT",
        type: "txt",
        icon: require("../../assets/icon-text.png"),
      },
    ],
  },

  {
    header: "Audio Files",
    documentType: [
      { label: "MP3", type: "mp3", icon: require("../../assets/icon-mp3.png") },
      { label: "AAC", type: "aac", icon: require("../../assets/icon-aac.png") },
      { label: "WAV", type: "wav", icon: require("../../assets/icon-wav.png") },
      { label: "OGG", type: "ogg", icon: require("../../assets/icon-ogg.png") },
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState(documentArray);
  const goToFileListing = (type) => {
    navigate("/fileListing", { state: { fileType: type } });
  };

  const searchDocumentTypes = (originalArray, searchQuery) => {
    if (!searchQuery) {
      console.log(
        "Search cleared, resetting to original data",
        documentArray.length
      );
      // Reset to original data when search is cleared
      setQuery(documentArray);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();

    const result = originalArray
      .map((category) => {
        const filteredTypes = category.documentType.filter(
          (doc) =>
            doc.label.toLowerCase().includes(lowerQuery) ||
            doc.type.toLowerCase().includes(lowerQuery)
        );

        // Return category only if it has matching document types
        if (filteredTypes.length > 0) {
          return {
            ...category,
            documentType: filteredTypes,
          };
        }
        return null;
      })
      .filter(Boolean);
    setQuery(result);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Header />

      <main className="container py-4 flex-grow-1">
        <SearchBar
          onSearch={(value) => {
            searchDocumentTypes(query, value);
          }}
        />
        <section className="mb-4">
          {query.map((item, index) => (
            <>
              <h4 className="fw-bold mb-3">{item.header}</h4>
              <div className="row g-3">
                {item.documentType.map((item, index) => (
                  <div
                    className="col-6 col-md-3"
                    key={index}
                    onClick={() => goToFileListing(item.type)}
                  >
                    <img
                      alt="file-icon"
                      className="ratio ratio-1x1 rounded bg-light"
                      src={item.icon}
                    />
                    <p className="mt-2 fw-medium text-dark">{item.label}</p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </section>

        <section>
          <h4 className="fw-bold mb-3">Featured Resources</h4>
          <div className="row g-3">
            {[
              "Landscape",
              "Abstract Art",
              "Presentation Template",
              "Marketing Video",
            ].map((title, idx) => (
              <div className="col-12 col-md-6" key={title}>
                <div
                  className="ratio ratio-16x9 rounded bg-light"
                  style={{
                    backgroundImage: `url('featured${idx}.jpg')`,
                    backgroundSize: "cover",
                  }}
                />
                <div>
                  <p className="fw-medium text-dark mt-2">{title}</p>
                  <p className="text-muted">
                    {idx % 2 === 0 ? "Download" : "Copy"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
