"use client"

import { useState } from "react"
import {
  Search,
  ImageIcon,
  Video,
  Music,
  FileText,
  Archive,
  MoreHorizontal,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import "./NewHome.css"
export default function NewHome() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState(null)

  const categories = [
    {
      icon: ImageIcon,
      title: "Images",
      description: "High-quality sample images in various formats: JPG, PNG, SVG, WebP",
      downloads: "1.2M+",
      color: "text-primary",
    },
    {
      icon: Video,
      title: "Videos",
      description: "Sample video files for testing: MP4, AVI, MOV, WebM formats",
      downloads: "850K+",
      color: "text-secondary",
    },
    {
      icon: Music,
      title: "Audio",
      description: "Audio samples in multiple formats: MP3, WAV, FLAC, OGG",
      downloads: "640K+",
      color: "text-success",
    },
    {
      icon: FileText,
      title: "Documents",
      description: "Sample documents: PDF, DOC, TXT, RTF for testing",
      downloads: "920K+",
      color: "text-danger",
    },
    {
      icon: Archive,
      title: "Archives",
      description: "Compressed files for testing: ZIP, RAR, 7Z, TAR formats",
      downloads: "330K+",
      color: "text-warning",
    },
    {
      icon: MoreHorizontal,
      title: "Others",
      description: "Miscellaneous file formats: CSV, JSON, XML, and more",
      downloads: "180K+",
      color: "text-info",
    },
  ]

  const faqs = [
    {
      question: "Are all files really free?",
      answer:
        "Yes! All sample files on SampleFiles.dev are completely free to download and use. No hidden fees, no registration required.",
    },
    {
      question: "How do you ensure files are virus-free?",
      answer:
        "Every file is scanned with multiple antivirus engines before being made available. We maintain strict security protocols to ensure your safety.",
    },
    {
      question: "Can I request specific file formats?",
      answer:
        'Use the "Request File" button to submit requests for specific file types or formats you need for your projects.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-vh-100">
      <section className="hero-gradient py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white">
              <h1 className="display-4 fw-bold mb-4">Free Sample Files for Every Project</h1>
              <p className="lead mb-4">
                Download high-quality sample files instantly. Images, videos, audio, documents, and more - all free and
                virus-free.
              </p>

              {/* Search Bar */}
              <div className="row g-3 justify-content-center mb-4">
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search for any file type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="col-md-4 col-lg-3">
                  <button className="btn btn-custom-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2">
                    <Search size={20} />
                    Search
                  </button>
                </div>
              </div>

              {/* Free Badge */}
              <div className="d-inline-flex align-items-center gap-2 free-badge px-4 py-2 rounded-pill text-white">
                <Check size={16} className="text-success" />
                Free & Virus-Free Files
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Browse Categories</h2>
            <p className="text-muted-custom lead">
              Find the perfect sample files for your projects across different categories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="row g-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="category-card h-100 p-4 text-center rounded">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <IconComponent size={32} className={category.color} />
                    </div>
                    <h3 className="h5 fw-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-custom small mb-3">{category.description}</p>
                    <div className="text-primary-custom fw-medium small mb-3">{category.downloads} Downloads</div>
                    <button className="btn btn-custom-outline w-100">Browse {category.title}</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-5 bg-muted-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
                <p className="text-muted-custom">Everything you need to know about our sample files</p>
              </div>

              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item border-custom mb-3 rounded">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed bg-card-custom"
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={expandedFaq === index}
                      >
                        <span className="fw-medium">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp size={20} className="ms-auto text-muted-custom" />
                        ) : (
                          <ChevronDown size={20} className="ms-auto text-muted-custom" />
                        )}
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

      <section className="bg-card-custom border-top border-custom py-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex flex-wrap gap-4">
              <a href="#" className="text-muted-custom text-decoration-none">
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
              </a>
            </div>
            <button className="btn btn-custom-primary">Request File</button>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <h3 className="h5 fw-bold mb-3">SampleFiles.dev</h3>
              <p className="text-white-50 small">
                Your trusted source for free, high-quality sample files across all formats.
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="h6 fw-semibold mb-3">Categories</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Images
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Videos
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Audio
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Documents
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="h6 fw-semibold mb-3">Resources</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    API Documentation
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    File Formats Guide
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Developer Tools
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Integration Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="h6 fw-semibold mb-3">Support</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-top border-secondary mt-4 pt-4 text-center">
            <p className="text-white-50 small mb-0">
              © 2024 SampleFiles.dev. All rights reserved. Made with ❤️ for developers and creators.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
