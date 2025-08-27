"use client";

import { useState } from "react";
import {
  ImageIcon,
  Video,
  Music,
  FileText,
  Archive,
  MoreHorizontal,
  Check,
  ShieldHalf,
} from "lucide-react";
import "./NewHome.css";
import { trackCardClick } from "../../utils/Analytics";
import NewSearchBar from "../SearchBar/NewSearchBar";
import { useNavigate } from "react-router-dom";
export default function NewHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();
  const categories = [
    {
      key: "images",
      icon: ImageIcon,
      title: "Images",
      description:
        "High-quality sample images in various formats: JPG, PNG, WEBP, SVG, GIF, BMP",
      downloads: "250+",
      color: "text-white",
      bgDownload: "bg-primary-subtle",
      textDownload: "text-primary-emphasis",
    },
    {
      key: "videos",
      icon: Video,
      title: "Videos",
      description:
        "Sample video files for testing: MP4, AVI, MKV, FLV, MOV, WebM formats",
      downloads: "100+",
      color: "text-white",
      bgDownload: "bg-info-subtle",
      textDownload: "text-info-emphasis",
    },
    {
      key: "audios",
      icon: Music,
      title: "Audio",
      description: "Audio samples in multiple formats: MP3, WAV, AAC, OGG",
      downloads: "200+",
      color: "text-white",
      bgDownload: "bg-success-subtle",
      textDownload: "text-success-emphasis",
    },
    {
      key: "documents",
      icon: FileText,
      title: "Documents",
      description:
        "Sample documents:PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, TXT, ODT, RTF, ZIP for testing",
      downloads: "520+",
      color: "text-white",
      bgDownload: "bg-danger-subtle",
      textDownload: "text-danger-emphasis",
    },
    // {
    //   icon: Archive,
    //   title: "Archives",
    //   description: "Compressed files for testing: ZIP, RAR, 7Z, TAR formats",
    //   downloads: "100+",
    //   color: "text-white",
    //   bgDownload: "bg-warning-subtle",
    //   textDownload: "text-warning-emphasis",
    // },
    // {
    //   icon: MoreHorizontal,
    //   title: "Others",
    //   description: "Miscellaneous file formats: CSV, JSON, XML, and more",
    //   downloads: "180+",
    //   color: "text-white",
    //   bgDownload: "bg-primary-subtle",
    //   textDownload: "text-primary-emphasis",
    // },
  ];

  const faqs = [
    {
      question: "Are all files really free?",
      answer:
        "Yes! All sample files on SampleFiles.dev are completely free to download and use. No hidden fees, no registration required.",
    },
    {
      question: "Can I request specific file formats?",
      answer:
        'Use the "Request File" button to submit requests for specific file types or formats you need for your projects.',
    },
    {
      question: "Do I need to create an account or sign up?",
      answer:
        "No account or signup is required. Simply browse the categories and download the files you need instantly.",
    },
    {
      question: "Is there a limit on how many files I can download?",
      answer:
        "No limits! Download as many files as you need, whenever you want.",
    },
    {
      question: "How often are new files added?",
      answer:
        "We regularly update our library with new images, videos, audios, and documents to keep our collection fresh and useful.",
    },
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-vh-100">
      <section className="hero-gradient py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <div className="text-center m-2 pt-2 pb-3">
                <h1 className="text-white fw-bold mb-4 fs-1 fs-md-1">
                  Download Free Sample & Dummy Files Instantly
                </h1>
                <h2 className="text-white fw-semibold mb-3 fs-5 fs-md-4">
                  Download high-quality sample files instantly. Images, videos,
                  audio, documents, and more.
                </h2>
                <h3 className="text-white fw-normal fs-6 mb-4 fs-md-5">
                  No login, no tracking, just instant access.
                </h3>
              </div>
              {/* <SearchBar onSearch={(value) => {}} /> */}

              {/* Search Bar */}
              <NewSearchBar onSearch={(value) => setSearchQuery(value)} />

              {/* Free Badge */}
              <div className="d-inline-flex align-items-center gap-2 badges px-4 py-2 rounded-pill text-white">
                <img width={20} src={require("../../assets/shield.png")} alt="Shield Icon" />
                Free & Virus-Free Files
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Browse Categories</h2>
            <h3 className="text-muted-custom lead">
              All files are 100% safe, virus-free, and free for personal or
              commercial use.
            </h3>

            <div className="text-center text-black my-2 px-3 px-md-5">
              {/* <h2 className="fs-4 fs-md-3 fw-semibold mb-2">
                Ready-to-Use Dummy Files (PDF, JPG, MP4) — Free to Download
              </h2> */}
              <h3 className="text-muted-custom lead">
                Find the perfect sample files for your projects across different
                categories. Perfect for developers, testers, educators, and
                presentations.
              </h3>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="row g-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="category-card h-100 p-4 text-center rounded">
                    <div
                      className="hero-gradient d-inline-flex align-items-center  justify-content-center bg-light rounded mb-3"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <IconComponent size={32} className={category.color} />
                    </div>
                    <h3 className="h5 fw-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-custom small mb-3">
                      {category.description}
                    </p>
                    <div className={`w-50 text-center rounded-pill fw-bold small mb-3 d-inline-flex align-items-center  justify-content-center ${category.bgDownload} ${category.textDownload}`}>
                      {category.downloads} Downloads
                    </div>
                    <button
                      className={`btn fw-bold btn-custom-outline w-100 `}
                      onClick={() => {
                        trackCardClick(category.key);
                        navigate(`sample-${category.key}`);
                      }}
                    >
                      Browse {category.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id={"faq"} className="py-5 bg-muted-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-custom">
                  Everything you need to know about our sample files
                </p>
              </div>

              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="accordion-item border-custom mb-3 rounded"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button p-2 collapsed bg-card-custom"
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={expandedFaq === index}
                      >
                        <span className="fw-medium">{faq.question}</span>
                        {/* {expandedFaq === index ? (
                          <ChevronUp
                            size={20}
                            className="ms-auto text-muted-custom"
                          />
                        ) : (
                          <ChevronDown
                            size={20}
                            className="ms-auto text-muted-custom"
                          />
                        )} */}
                      </button>
                    </h2>
                    {expandedFaq === index && (
                      <div className="accordion-collapse show">
                        <div className="accordion-body">
                          <p className="text-muted-custom mb-0">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
