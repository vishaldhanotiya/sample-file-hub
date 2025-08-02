import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="border-bottom px-3 py-3">
      <div className="d-flex justify-content-between align-items-center">
        {/* Left side: Logo and Title */}
        <div className="d-flex align-items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="currentColor">
            {/* SVG path content */}
          </svg>
          <h2 className="mb-0 fw-bold">Sample File Hub</h2>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="d-md-none btn btn-link text-dark"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
        </button>

        {/* Right side: Icons */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <nav className="d-flex gap-4 me-3">
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Home
            </a>
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Images
            </a>
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Videos
            </a>
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Templates
            </a>
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Tools
            </a>
          </nav>

          <button className="btn btn-light rounded-circle">
            <i className="bi bi-bell"></i>
          </button>
          <div
            className="rounded-circle bg-cover bg-center"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBE6NB7cNtyGuyFYxYOtw2XBSDHfINQKNBRHpwhadktjccUI-4zSGHDx9_yQWMFrCe_ZPQsZsdN8ouweKwuSUNL9R3XnQtG4wmg2-S2f4TmHbiSNpmR1jDPIFtqIpy4z5EFO-BgQ0Gl2s8irHo7KwXEekZNay0Z55Q0DnZXMxL8F9CrOl9xfS6lYIJUX_BH41rqYMIdwS6FFtk25Wk0jI8q-Z2BEaJtGJBgVeBjRzKT2Syt6uhCjcdBJd6k2yKhB4PmEKADH3qa-A)",
            }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="d-md-none mt-3">
          <nav className="d-flex flex-column gap-3">
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Home
            </a>
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Images
            </a>
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Videos
            </a>
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Templates
            </a>
            <a className="text-dark text-decoration-none fw-medium" href="#">
              Tools
            </a>
          </nav>
          <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
            <button className="btn btn-light rounded-circle">
              <i className="bi bi-bell"></i>
            </button>
            <div
              className="rounded-circle bg-cover bg-center"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "black",
                backgroundImage:
                  "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBE6NB7cNtyGuyFYxYOtw2XBSDHfINQKNBRHpwhadktjccUI-4zSGHDx9_yQWMFrCe_ZPQsZsdN8ouweKwuSUNL9R3XnQtG4wmg2-S2f4TmHbiSNpmR1jDPIFtqIpy4z5EFO-BgQ0Gl2s8irHo7KwXEekZNay0Z55Q0DnZXMxL8F9CrOl9xfS6lYIJUX_BH41rqYMIdwS6FFtk25Wk0jI8q-Z2BEaJtGJBgVeBjRzKT2Syt6uhCjcdBJd6k2yKhB4PmEKADH3qa-A)",
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
