import React, { useState } from "react";
import "../Home/NewHome.css";
import { useNavigate, useLocation } from "react-router-dom";
import { trackHeaderNavigation } from "../../utils/Analytics";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NewHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const navItems = [
    { path: "", label: "Home" },
    { path: "sample-images", label: "Images" },
    { path: "sample-videos", label: "Videos" },
    { path: "sample-audios", label: "Audio" },
    { path: "sample-documents", label: "Documents" },
    { path: "sample-archives", label: "Archives" },
    { path: "sample-others", label: "Others" },
    { path: "convert-png-to-jpg", label: "💡Convert PNG → JPG" },
  ];

  const handleNavigation = (e, path) => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    trackHeaderNavigation(path);
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-card-custom border-top border-custom sticky-top ${
        isHomePage ? "" : "border-bottom"
      }`}
    >
      <section className="bg-card-custom border-top border-custom py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            
            {/* Logo */}
            <div
              className="logo-container d-flex align-items-center"
              style={{ cursor: "pointer", flexShrink: 0 }}
              onClick={() => navigate("/")}
            >
              <h2
                className="mb-0 fw-bold site-logo"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)", // responsive text
                  whiteSpace: "nowrap",
                }}
              >
                Sample Files
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex align-items-center gap-3 flex-wrap ms-auto">
              <nav className="d-flex flex-wrap gap-4 align-items-center p-2">
                {navItems.map((item) => {
                  const isConverter = item.path === "convert-png-to-jpg";
                  const fullPath = `/${item.path}`;
                  return isConverter ? (
                    <a
                      key={item.label}
                      href={fullPath}
                      className="btn btn-warning fw-bold px-3 py-1"
                      style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      key={item.label}
                      href={fullPath}
                      onClick={(e) => handleNavigation(e, fullPath)}
                      className="text-black text-decoration-none fw-medium"
                      style={{
                        fontSize: "0.9rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Hamburger (Mobile Only) */}
            <div className="d-lg-none ms-auto">
              <button
                className="btn p-0"
                style={{ fontSize: "1.8rem", lineHeight: "1" }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-white"
          style={{
            zIndex: 1050,
            padding: "2rem",
            overflowY: "auto",
          }}
        >
          <button
            className="btn mb-4"
            style={{ fontSize: "1.5rem" }}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <nav
            className="d-flex flex-column gap-4 align-items-center text-center"
            style={{ marginTop: "2rem" }}
          >
            {navItems.map((item) => {
              const isConverter = item.path === "convert-png-to-jpg";
              const fullPath = `/${item.path}`;
              return isConverter ? (
                <a
                  key={item.label}
                  href={fullPath}
                  className="btn bg-warning fw-bold px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontSize: "1.1rem" }}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={fullPath}
                  onClick={(e) => handleNavigation(e, fullPath)}
                  className="text-black text-decoration-none fw-medium"
                  style={{ fontSize: "1.2rem" }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
