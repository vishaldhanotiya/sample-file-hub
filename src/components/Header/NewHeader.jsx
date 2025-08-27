import "../Home/NewHome.css";
import { useNavigate, useLocation } from "react-router-dom";
import { trackHeaderNavigation } from "../../utils/Analytics";

export default function NewHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`bg-card-custom border-top border-custom sticky-top ${
        isHomePage ? "" : "border-bottom"
      }`}
    >
      <section className="bg-card-custom border-top border-custom py-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <h2
                onClick={() => navigate("/")}
                className="mb-0 fw-bold fs-4"
                style={{
                  color: "black",
                  cursor: "pointer",
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                Sample Files
              </h2>
            </div>
            <div className="d-flex flex-wrap gap-4">
              <div className="d-none d-md-flex align-items-center gap-3">
                <nav className="d-flex gap-4 me-3">
                  {[
                    { path: "", label: "Home" },
                    { path: "sample-images", label: "Sample Images" },
                    { path: "sample-videos", label: "Sample Videos" },
                    { path: "sample-audios", label: "Sample Audio" },
                    { path: "sample-documents", label: "Sample Documents" },
                    {
                      path: "convert-png-to-jpg",
                      label: "💡 Convert PNG → JPG 🚀",
                    },
                  ].map((item) => {
                    const isConverter = item.path === "convert-png-to-jpg"; // check for converter button
                    const fullPath = `/${item.path}`;

                    return isConverter ? (
                      <a
                        key={item.label}
                        href={fullPath}
                        className="btn btn-warning fw-bold ms-3"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <a
                        href={fullPath}
                        key={item.label}
                        onClick={(e) => {
                          if (e.ctrlKey || e.metaKey) return; // allow new tab
                          e.preventDefault();
                          trackHeaderNavigation(fullPath);
                          navigate(fullPath);
                        }}
                        className={`${
                          isHomePage ? "text-black" : "text-black"
                        } text-decoration-none fw-medium position-relative`}
                        style={{ padding: "0.5rem 0" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "0.8";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "1";
                        }}
                      >
                        {item.label}
                        <span
                          className="position-absolute bottom-0 start-0 bg-white"
                          style={{
                            height: "2px",
                            width: "0%",
                            transition: "width 0.3s ease",
                          }}
                        />
                      </a>
                    );
                  })}
                </nav>
              </div>
              {/* <a href="#" className="text-muted-custom text-decoration-none">
                Home
              </a>
              <a href="#" className="text-muted-custom text-decoration-none">
                Videos
              </a>
              <a href="#" className="text-muted-custom text-decoration-none">
                Audio
              </a>
              <a href="#" className="text-muted-custom text-decoration-none">
                Documents
              </a>
              <a href="#" className="text-muted-custom text-decoration-none">
                Images
              </a>
              <a href="#" className="text-muted-custom text-decoration-none">
                Archives
              </a>
              <a href="#" className="text-muted-custom text-decoration-none">
                Others
              </a> */}
            </div>
            {/* <button className="btn btn-custom-primary">Request File</button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
