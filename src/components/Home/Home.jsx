"use client";

import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/img-back.png";
import AboutUs from "../AboutUs/AboutUs";
import { trackCardClick } from "../../utils/Analytics";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const fileTypes = [
    {
      key: "image",
      name: "Images",
      subtitle: "JPG, PNG, SVG, GIF, WEBP, BMP",
      backgroundColor: "#FF6F61",
      icon: require("../../assets/image.png"),
    },
    {
      key: "video",
      name: "Videos",
      subtitle: "MP4, AVI, MKV, FLV, MOV",
      backgroundColor: "#42A5F5",

      icon: require("../../assets/videography.png"),
    },
    {
      key: "audio",
      name: "Audios",
      subtitle: "MP3, WAV, AAC, OGG",
      backgroundColor: "#66BB6A",
      
      icon: require("../../assets/mic.png"),
    },
    {
      key: "document",
      name: "Document",
      subtitle: "PDF, DOCX, TXT, PPT, ODT, RTF",
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
        className={
          darkMode
            ? "bg-dark text-white min-vh-100"
            : "text-dark min-vh-100 py-5"
        }
      >
        <main className="py-2">
          <div>
            {/* Hero Section with SEO-friendly headings */}
            <div className="text-center m-3 py-5">
              <h1 className="text-white display-7 fw-bold mb-4">
                Download Free Sample & Dummy Files Instantly
              </h1>
              <h2 className="text-white display-8 lead">
              Explore a vast collection of sample files across various media
              types.
              </h2>
              <h3 className="text-white display-8 lead mb-4">
              Perfect for testing, development, and learning.
              </h3>
              <div className="p-1">
                <SearchBar onSearch={(value) => {}} />
              </div>
            </div>

            {/* Benefits Section */}
            <h2 className="text-center text-white display-8 lead">
              Ready-to-Use Dummy Files (PDF, JPG, MP4) — Free to Download
            </h2>
            <h3 className="text-center text-white display-8 lead">
              All files are 100% safe, virus-free, and free for personal or
              commercial use. Perfect for developers, testers, educators, and
              presentations.
            </h3>

            {/* File Type Cards */}
            <div className="row g-3 m-5 ps-5 pe-5 justify-content-center">
              {fileTypes.map((type, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="p-4 rounded-4 position-relative h-100 d-flex flex-column justify-content-between"
                    style={{
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(16px)",
                      backgroundColor: darkMode
                        ? "rgba(30, 30, 30, 0.4)"
                        : "#d1d7ff",
                    }}
                    onClick={() => {
                      trackCardClick(type.key);
                      navigate(`sample-${type.key}`);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = darkMode
                        ? "0 15px 30px rgba(0, 0, 0, 0.2)"
                        : "0 15px 30px rgba(0, 0, 0, 0.15)";
                      e.currentTarget.style.backgroundColor = darkMode
                        ? "rgba(40, 40, 40, 0.6)"
                        : "rgba(255, 255, 255, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = darkMode
                        ? "0 4px 30px rgba(0, 0, 0, 0.1)"
                        : "0 4px 30px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <div
                      className="fs-1 mb-3"
                      style={{
                        lineHeight: 0,
                        color: darkMode ? "white" : undefined,
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
                      <h4
                        className="fw-bold mb-1"
                        style={{ color: darkMode ? "white" : "inherit" }}
                      >
                        {type.name}
                      </h4>
                      <p
                        className="mb-3"
                        style={{
                          fontSize: "0.9rem",
                          color: darkMode
                            ? "rgba(255, 255, 255, 0.7)"
                            : "rgba(0, 0, 0, 0.6)",
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
                        color: darkMode
                          ? "rgba(255, 255, 255, 0.8)"
                          : "rgba(0, 0, 0, 0.8)",
                        userSelect: "none",
                        transition: "transform 0.3s ease",
                      }}
                      aria-label={`Go to ${type.name}`}
                      className="hover-arrow"
                    >
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <AboutUs />
    </>
  );
}
