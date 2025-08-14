import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { trackUserSearchMetaData } from "../../utils/Analytics";

const documentArray = [
  {
    key: "image",
    label: "PNG",
    type: "png",
    icon: require("../../assets/icon-png.png"),
  },
  {
    key: "image",
    label: "JPG",
    type: "jpg",
    icon: require("../../assets/icon-jpg.png"),
  },
  {
    key: "image",
    label: "SVG",
    type: "svg",
    icon: require("../../assets/icon-svg.png"),
  },
  {
    key: "image",
    label: "GIF",
    type: "gif",
    icon: require("../../assets/icon-gif.png"),
  },
  {
    key: "image",
    label: "BMP",
    type: "bmp",
    icon: require("../../assets/icon-bmp.png"),
  },
  {
    key: "image",
    label: "WEBP",
    type: "webp",
    icon: require("../../assets/icon-webp.png"),
  },
  {
    key: "video",
    label: "MP4",
    type: "mp4",
    icon: require("../../assets/icon-mp4.png"),
  },
  {
    key: "video",
    label: "MKV",
    type: "mkv",
    icon: require("../../assets/icon-mkv.png"),
  },
  {
    key: "video",
    label: "AVI",
    type: "avi",
    icon: require("../../assets/icon-avi.png"),
  },
  {
    key: "video",
    label: "FLV",
    type: "flv",
    icon: require("../../assets/icon-flv.png"),
  },
  {
    key: "video",
    label: "MOV",
    type: "mov",
    icon: require("../../assets/icon-mov.png"),
  },
  {
    key: "video",
    label: "WEBM",
    type: "webm",
    icon: require("../../assets/icon-webm.png"),
  },
  {
    key: "audio",
    label: "MP3",
    type: "mp3",
    icon: require("../../assets/icon-mp3.png"),
  },
  {
    key: "audio",
    label: "AAC",
    type: "aac",
    icon: require("../../assets/icon-aac.png"),
  },
  {
    key: "audio",
    label: "WAV",
    type: "wav",
    icon: require("../../assets/icon-wav.png"),
  },
  {
    key: "audio",
    label: "OGG",
    type: "ogg",
    icon: require("../../assets/icon-ogg.png"),
  },
  {
    key: "document",
    label: "PPT",
    type: "pptx",
    icon: require("../../assets/icon-ppt.png"),
  },
  {
    key: "document",
    label: "DOCX",
    type: "docx",
    icon: require("../../assets/icon-docx.png"),
  },
  {
    key: "document",
    label: "TEXT",
    type: "txt",
    icon: require("../../assets/icon-text.png"),
  },
  {
    key: "document",
    label: "PDF",
    type: "pdf",
    icon: require("../../assets/icon-pdf.png"),
  },
  {
    key: "document",
    label: "ODT",
    type: "odt",
    icon: require("../../assets/icon-odt.png"),
  },
  {
    key: "document",
    label: "RTF",
    type: "rtf",
    icon: require("../../assets/icon-rtf.png"),
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
    navigate(`sample-${item.key}`,{state:{fileType:item.type}});
  };

  const handleSearch = (e) => {
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
