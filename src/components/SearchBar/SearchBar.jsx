import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Trigger on every keystroke
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Optional: also trigger on form submit
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="container mt-5">
        <div
          className="position-relative"
          style={{ maxWidth: "40vw", margin: "0 auto" }}
        >
          <img
            src={require("../../assets/icon-search.png")}
            alt="Search"
            className="position-absolute"
            style={{
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              opacity: "0.6",
            }}
          />
          <input
            type="search"
            className="form-control py-2 ps-5"
            placeholder="Search for images or videos..."
            aria-label="Search"
            value={query}
            onChange={handleChange} // 💡 Use onChange, not onChangeCapture
            style={{
              borderRadius: "40px",
              paddingLeft: "50px",
              paddingTop: "12px",
              paddingBottom: "12px",
              border: "1px solid #dee2e6",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              fontSize: "1.3rem",
              height: "70px",
              marginBottom: "50px",
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
    </form>
  );
};

export default SearchBar;
