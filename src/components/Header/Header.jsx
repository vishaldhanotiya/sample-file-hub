import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine header position based on page and scroll state
  const getHeaderPosition = () => {
    if (!isHomePage) return "fixed"; // Fixed on all non-home pages
    return isScrolled ? "fixed" : "absolute"; // Absolute only on homepage when not scrolled
  };

  return (
    <header 
      className={`px-3 py-3 ${isScrolled ? "scrolled" : ""}    ${isHomePage ? "" : "border-bottom"}`}
      style={{
        position: getHeaderPosition(),
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        backgroundColor:  !isScrolled 
          ? "transparent" 
          : isHomePage?"none": "white",
        backdropFilter: isHomePage && !isScrolled 
          ? "none" 
          : "blur(12px)",
        borderBottom: isHomePage && !isScrolled 
          ? "none" 
          : "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left side: Logo and Title */}
          <div className="d-flex align-items-center gap-2">
     
            <h2
              onClick={() => navigate("/")}
              className="mb-0 fw-bold fs-4"
              style={{ 
                color:isHomePage?'white':'black',
                cursor: "pointer",
                textShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}
            >
              Sample Files
            </h2>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`d-md-none btn btn-link ${isHomePage ? "text-white" : "text-black"} p-0`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            style={{
              transition: "transform 0.2s ease",
              transform: showMenu ? "rotate(90deg)" : "none"
            }}
          >
            <i className="bi bi-list" style={{ fontSize: "1.8rem" }}></i>
          </button>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <nav className="d-flex gap-4 me-3">
              {[
                { path: "/", name: "Home" },
                { path: "sample-image", name: "Images" },
                { path: "sample-video", name: "Videos" },
                { path: "sample-audio", name: "Audio" },
                { path: "sample-document", name: "Document" }
              ].map((item) => (
                <a
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`${isHomePage ? "text-white" : "text-black"} text-decoration-none fw-medium position-relative`}
                  style={{ 
                    cursor: "pointer",
                    padding: "0.5rem 0",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  {item.name}
                  <span 
                    className="position-absolute bottom-0 start-0 bg-white"
                    style={{
                      height: "2px",
                      width: "0%",
                      transition: "width 0.3s ease",
                    }}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div 
            className="d-md-none mt-3 pb-3"
            style={{
              animation: "fadeIn 0.3s ease-out"
            }}
          >
            <nav className="d-flex flex-column gap-3">
              {[
                { path: "/", name: "Home" },
                { path: "sample-image", name: "Images" },
                { path: "sample-video", name: "Videos" },
                { path: "sample-audio", name: "Audio" },
                { path: "sample-document", name: "Document" }
              ].map((item) => (
                <a
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setShowMenu(false);
                  }}
                  className="text-white text-decoration-none fw-medium py-2 px-3 rounded"
                  style={{ 
                    cursor: "pointer",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;