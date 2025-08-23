"use client";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/img-back.png";
import AboutUs from "../AboutUs/AboutUs";
import { trackCardClick } from "../../utils/Analytics";
import FAQAccordion from "../FAQAccordion/FAQAccordion";
import './Home.css'
export default function Home() {
  const navigate = useNavigate();

  const fileTypes = [
    {
      key: "images",
      name: "Images",
      subtitle: "JPG, PNG, WEBP, SVG, GIF, BMP",
      backgroundColor: "#FF6F61",
      icon: require("../../assets/image.png"),
    },
    {
      key: "videos",
      name: "Videos",
      subtitle: "MP4, AVI, MKV, FLV, MOV",
      backgroundColor: "#42A5F5",
      icon: require("../../assets/videography.png"),
    },
    {
      key: "audios",
      name: "Audios",
      subtitle: "MP3, WAV, AAC, OGG",
      backgroundColor: "#66BB6A",

      icon: require("../../assets/mic.png"),
    },
    {
      key: "documents",
      name: "Document",
      subtitle: "PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, TXT, ODT, RTF, ZIP",
      backgroundColor: "#AB47BC",
      icon: require("../../assets/file.png"),
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className={"text-dark py-5"}
      >
        <main className="py-2">
          <div>
            {/* Hero Section with SEO-friendly headings */}
            <div className="text-center m-2 pt-4 pb-5">
              <div className="text-center m-2 pt-2 pb-3">
                <h1 className="text-white fw-bold mb-3 fs-2 fs-md-1">
                  Download Free Sample & Dummy Files Instantly
                </h1>
                <h2 className="text-white fw-semibold mb-2 fs-5 fs-md-4">
                  Explore a Vast Collection of Sample Files Across Various Media
                  Types
                </h2>
                <h3 className="text-white fw-normal fs-6 fs-md-5">
                  No login, no tracking, just instant access.
                </h3>
              </div>

              <div className="pt-1">
                <SearchBar onSearch={(value) => {}} />
              </div>
            </div>

            {/* Benefits Section */}
            <div className="text-center text-white my-2 px-3 px-md-5">
              <h2 className="fs-4 fs-md-3 fw-semibold mb-2">
                Ready-to-Use Dummy Files (PDF, JPG, MP4) — Free to Download
              </h2>
              <h3 className="fs-6 fs-md-5 fw-normal mb-3">
                All files are 100% safe, virus-free, and free for personal or
                commercial use. Perfect for developers, testers, educators, and
                presentations.
              </h3>
            </div>

            {/* File Type Cards */}
            <div className="row g-3 justify-content-center mx-2 mx-sm-3 mx-md-4 mx-lg-5 px-2 px-sm-3 px-md-4 px-lg-5 my-4 my-md-4">
              {fileTypes.map((type, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="p-4 rounded-4 position-relative h-100 d-flex flex-column justify-content-between"
                    style={{
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(16px)",
                      backgroundColor: "#d1d7ff",
                    }}
                    onClick={() => {
                      trackCardClick(type.key);
                      navigate(`sample-${type.key}`);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 30px rgba(0, 0, 0, 0.15)";
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 30px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <div
                      className="fs-1 mb-3"
                      style={{
                        lineHeight: 0,
                      }}
                    >
                      <div
                        className="mb-3 d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: `${type.backgroundColor}`,
                          color: "#fff",
                          borderRadius: "12px",
                          width: "54px",
                          height: "54px",
                          backdropFilter: "blur(10px)",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img
                          alt={`${type.name} icon`}
                          src={type.icon}
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1" style={{ color: "inherit" }}>
                        {type.name}
                      </h4>
                      <p
                        className="mb-3"
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        {type.subtitle}
                      </p>
                    </div>
                    <div
                      style={{
                        alignSelf: "flex-end",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "rgba(0, 0, 0, 0.8)",
                        userSelect: "none",
                        transition: "transform 0.3s ease",
                      }}
                      aria-label={`Go to ${type.name}`}
                      className="hover-arrow"
                    >
          <div class="btn browse-btn">Browse →</div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
      </div>
      <AboutUs />
      <FAQAccordion/>      
    </>
  );
}
