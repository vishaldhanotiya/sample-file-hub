import React from "react";

const Header = () => {
  return (
    <header className="border-bottom d-flex justify-content-between align-items-center px-4 py-3">
    <div className="d-flex align-items-center gap-4">
      <div className="d-flex align-items-center gap-2 text-dark">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="currentColor">
          {/* SVG path content */}
        </svg>
        <h2 className="mb-0 fw-bold">Sample File Hub</h2>
      </div>
      <nav className="d-flex gap-4">
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
    </div>
    <div className="d-flex align-items-center gap-3">
   
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
  </header>
  );
};

export default Header;
