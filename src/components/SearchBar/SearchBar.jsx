import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="container mt-4">
        <div className="d-flex justify-content-center">
          <div className="position-relative w-100 px-2 px-sm-3 px-md-4" style={{ maxWidth: "600px" }}>
            <img
              src={require("../../assets/icon-search.png")}
              alt="Search"
              className="position-absolute"
              style={{
                left: "30px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "24px",
                height: "24px",
                opacity: 0.6,
              }}
            />
            <input
              type="search"
              className="form-control ps-5 py-3"
              placeholder="Search for images or videos..."
              value={query}
              onChange={handleChange}
              style={{
                borderRadius: "40px",
                border: "1px solid #dee2e6",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                fontSize: "1rem",
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                e.target.style.borderColor = "#dee2e6";
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
