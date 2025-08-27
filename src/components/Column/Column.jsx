import React from "react";
import { useNavigate } from "react-router-dom";

const Column = ({ title, items }) => {
  const navigate = useNavigate();

  const handleClick = (e, item) => {
    if (e.ctrlKey || e.metaKey) return; // allow new tab
    e.preventDefault();
    navigate(item.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="col-6 col-md-2 ps-4 pe-4">
      <div className="h6 fw-semibold text-white mb-3">{title}</div>
      <ul className="list-unstyled small">
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="pb-1">
            <a
              href={item.path}
              onClick={(e) => handleClick(e, item)}
              className={
                "text-white-50 text-decoration-none small"
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {item.title}
              <span
                className="position-absolute bottom-0 start-0 bg-white"
                style={{
                  height: "2px",
                  width: "0%",
                  transition: "width 0.3s ease",
                }}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;