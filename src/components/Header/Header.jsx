import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { trackHeaderNavigation } from "../../utils/Analytics";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Home/NewHome.css";

export default function Header() {
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
    { path: "sample-code", label: "Code" },
    { path: "blog-list", label: "Blogs" },
    // { path: "about-us", label: "About Us" },
    // { path: "contact-us", label: "Contact Us" },
    // { path: "convert-jpg-to-png", label: "💡Convert PNG → JPG" },
  ];

  const handleTrack = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    trackHeaderNavigation(path);
    setIsMenuOpen(false);
  };

  const getNavLinkStyle = (isActive, isMobile) => ({
    fontSize: isMobile ? "1.05rem" : "1rem",
    whiteSpace: "nowrap",
    color: isActive ? "#5169ED" : "#000",
    borderBottom: isActive ? "3px solid #5169ED" : "3px solid transparent",
    paddingBottom: 0,
    display: "inline-block",
  });

  const renderNavLink = (item, isMobile = false) => {
    const fullPath = `/${item.path}`;
    return (
      <NavLink
        key={item.label}
        to={fullPath}
        end={item.path === ""}
        onClick={() => handleTrack(fullPath)}
        className={`text-decoration-none fw-medium ${isMobile ? "px-3 py-2" : "px-2 py-1"}`}
        style={({ isActive }) => getNavLinkStyle(isActive, isMobile)}
        aria-label={`Navigate to ${item.label}`}
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <header
      className={`bg-card-custom border-top border-custom sticky-top ${
        isHomePage ? "" : "border-bottom"
      }`}
      aria-label="Main site header"
    >
      <section
        className="bg-card-custom border-top border-custom py-2"
        aria-label="Top navigation bar"
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            {/* Logo */}
            <div
              className="logo-container d-flex align-items-center"
              style={{ cursor: "pointer", flexShrink: 0 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/");
              }}
              aria-label="Go to homepage"
            >
              <h2
                className="mb-0 fw-bold site-logo"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  whiteSpace: "nowrap",
                }}
              >
                Sample Files
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex align-items-center gap-4 flex-wrap ms-auto">
              <nav
                className="d-flex flex-wrap gap-4 align-items-center"
                aria-label="Primary navigation menu"
              >
                {navItems.map((item) => renderNavLink(item, false))}
              </nav>
            </div>

            {/* Hamburger (Mobile Only) */}
            <div className="d-lg-none ms-auto">
              <button
                className="btn p-0"
                style={{ fontSize: "1.8rem", lineHeight: "1" }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
          aria-label="Mobile navigation menu"
        >
          <button
            className="btn mb-4"
            style={{ fontSize: "1.5rem" }}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>
          <nav
            className="d-flex flex-column gap-4 align-items-center text-center"
            style={{ marginTop: "1.25rem" }}
            aria-label="Mobile navigation links"
          >
            {navItems.map((item) => renderNavLink(item, true))}
          </nav>
        </div>
      )}
    </header>
  );
}
