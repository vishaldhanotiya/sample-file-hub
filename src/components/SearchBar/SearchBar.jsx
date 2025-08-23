import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { trackUserSearchMetaData } from "../../utils/Analytics";

const documentArray = [
  {
    key: "images",
    label: "PNG",
    type: "png",
   icon: require("../../assets/png.png"),
  },
  {
    key: "images",
    label: "JPG",
    type: "jpg",
    icon: require("../../assets/jpg.png"),
  },
  {
    key: "images",
    label: "SVG",
    type: "svg",
    icon: require("../../assets/svg.png"),
  },
  {
    key: "images",
    label: "GIF",
    type: "gif",
    icon: require("../../assets/gif.png"),
  },
  {
    key: "images",
    label: "BMP",
    type: "bmp",
    icon: require("../../assets/bmp.png"),
  },
  {
    key: "images",
    label: "WEBP",
    type: "webp",
    icon: require("../../assets/webp.png"),
  },
  {
    key: "videos",
    label: "MP4",
    type: "mp4",
    icon: require("../../assets/mp4.png"),
  },
  {
    key: "videos",
    label: "MKV",
    type: "mkv",
    icon: require("../../assets/mkv.png"),
  },
  {
    key: "videos",
    label: "AVI",
    type: "avi",
    icon: require("../../assets/avi.png"),
  },
  {
    key: "videos",
    label: "FLV",
    type: "flv",
    icon: require("../../assets/flv.png"),
  },
  {
    key: "videos",
    label: "MOV",
    type: "mov",
    icon: require("../../assets/mov.png"),
  },
  {
    key: "videos",
    label: "WEBM",
    type: "webm",
    icon: require("../../assets/webm.png"),
  },
  {
    key: "audios",
    label: "MP3",
    type: "mp3",
    icon: require("../../assets/mp3.png"),
  },
  {
    key: "audios",
    label: "AAC",
    type: "aac",
    icon: require("../../assets/aac.png"),
  },
  {
    key: "audios",
    label: "WAV",
    type: "wav",
    icon: require("../../assets/wav.png"),
  },
  {
    key: "audios",
    label: "OGG",
    type: "ogg",
    icon: require("../../assets/ogg.png"),
  },
  {
    key: "documents",
    label: "PPT",
    type: "ppt",
    icon: require("../../assets/ppt.png"),
  },
  {
    key: "documents",
    label: "PPTX",
    type: "pptx",
    icon: require("../../assets/pptx.png"),
  },
  {
    key: "documents",
    label: "DOC",
    type: "doc",
   icon: require("../../assets/doc.png"),
  },
  {
    key: "documents",
    label: "DOCX",
    type: "docx",
   icon: require("../../assets/docx.png"),
  },
  {
    key: "documents",
    label: "TEXT",
    type: "txt",
   icon: require("../../assets/txt.png"),
  },
  {
    key: "documents",
    label: "PDF",
    type: "pdf",
    icon: require("../../assets/pdf.png"),
  },
  {
    key: "documents",
    label: "ODT",
    type: "odt",
    icon: require("../../assets/odt.png"),
  },
  {
    key: "documents",
    label: "RTF",
    type: "rtf",
   icon: require("../../assets/rtf.png"),
  },
];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
    } else {
      const filtered = documentArray.filter((doc) =>
        doc.label.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    }

    onSearch(value);
  };

  const handleSelect = (item) => {
    setQuery(item.label);
    onSearch(item.label);
    setShowSuggestions(false);
    trackUserSearchMetaData(item.type)
    navigate(`sample-${item.key}/${item.type}`);
  };

  const handleSearch = (e) => {
    if (e.ctrlKey || e.metaKey) return; // allow new tab
    e.preventDefault();
        onSearch(query);
    setShowSuggestions(false);
  };

  return (
    <form onSubmit={handleSearch} style={{ position: "relative" }}>
      <div className="container mt-4">
        <div className="d-flex justify-content-center">
          <div
            className="position-relative w-100"
            style={{ maxWidth: "600px" }}
          >
            {/* Search Input */}
            <input
              type="search"
              className="form-control ps-5 py-3"
              placeholder="Search PDF, PNG, MP3…"
              value={query}
              onChange={handleChange}
              onFocus={() =>
                query && suggestions.length > 0 && setShowSuggestions(true)
              }
              style={{
                borderRadius: showSuggestions ? "15px 15px 0 0" : "30px",
                border: "1px solid #ddd",
                boxShadow: "0 1px 6px rgba(32,33,36,0.28)",
                fontSize: "1rem",
                paddingLeft: "45px",
                borderBottom: showSuggestions
                  ? "1px solid #ddd"
                  : "1px solid #ddd",
              }}
            />
            <img
              src={require("../../assets/search.png")}
              alt="Search"
              style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "20px",
                height: "20px",
                opacity: 0.5,
              }}
            />

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderRadius: "0 0 15px 15px",
                  border: "1px solid #ddd",
                  borderTop: "none",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  zIndex: 1000,
                  maxHeight: "250px",
                  overflowY: "auto",
                }}
              >
                {suggestions.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(item)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#f1f3f4")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "white")
                    }
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      style={{
                        width: "22px",
                        height: "22px",
                        marginRight: "10px",
                      }}
                    />
                    <span style={{ fontSize: "0.95rem" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
