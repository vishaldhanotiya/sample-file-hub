import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%)",
        color: "#333",
      }}
    >
      <div
        className="p-4 p-md-5 bg-white rounded-4 shadow-lg w-100"
        style={{ maxWidth: "480px" }}
      >
        <h1 className="fw-bold text-primary mb-3" style={{ fontSize: "4rem" }}>
          404
        </h1>
        <h3 className="fw-semibold text-dark mb-2">Page Not Found</h3>
        <p className="text-body-secondary fw-medium mb-4">
          Oops! The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <button
          onClick={handleGoHome}
          className="btn btn-primary px-4 py-2 fw-semibold"
          style={{
            borderRadius: "10px",
            letterSpacing: "0.5px",
          }}
        >
          Go to Home
        </button>
      </div>

      <footer className="mt-4 text-muted small">
        © {new Date().getFullYear()} SampleFiles.dev. All rights reserved.
      </footer>
    </div>
  );
};

export default NotFound;
