import { useNavigate } from "react-router-dom";
import {
  audioTabData,
  documentTabData,
  imageTabData,
  videoTabData,
} from "../../utils/Constant";
import Column from "../Column/Column";
import ContactForm from "../ContactForm/ContactForm";
import SocialShare from "../SocialShare/SocialShare";
import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Left Section (80%) */}
          <div className="col-12 pe-lg-4">
            {/* 80% width */}
            <div className="row">
              {/* Logo and Description */}
              <div className="col-12 col-md-4 mb-4">
                <h2>
                  <span className="fw-light text-white">Sample</span>
                  <span className="fw-bold text-white"> Files</span>
                </h2>
                <p className="text-white-50 text-decoration-none small">
                  Safe, Accurate & Always Free Test Files All sample files are
                  virus-free, production-ready, and include correct metadata for
                  real-world scenarios. Free for personal and commercial use,
                  with unlimited downloads.
                </p>
              </div>

              {/* Category Columns */}
              <div className="col-6 col-md-4 col-lg-2">
                <Column title="Images" items={imageTabData} />
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <Column title="Videos" items={videoTabData} />
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <Column title="Audio" items={audioTabData} />
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <Column title="Documents" items={documentTabData} />
              </div>
            </div>
          </div>

          {/* Right Section (20%) - Contact Form */}
          {/* <div className="col-12 col-lg-3"> */}
          {/* 20% width */}
          {/* <div className="bg-light p-3 rounded border">
              <div className="mb-3 fs-5 text-black fw-medium">Contact Us</div>
              <ContactForm />
            </div> */}
          {/* </div> */}
        </div>
        <div className="mt-5">
          <div className="share-container justify-content-center text-center align-item-center">
            <SocialShare />
          </div>

          {/* Copyright text - full width below all columns */}

          <div className="border-top border-secondary mt-4 pt-4 text-center">
            <p className="text-white-50 small mb-0">
              © 2025 SampleFiles.dev. All rights reserved. Made with{" "}
              <span className="text-white">❤️</span> for developers and
              creators.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <ul className="list-unstyled d-flex justify-content-center text-center mb-0">
            <li className="mx-3">
              <a
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("about-us");
                }}
                href="#"
                className="text-white-50 text-decoration-none small"
              >
                About Us
              </a>
            </li>
            <li className="mx-3">
              <a
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("privacy-policy");
                }}
                href="#"
                className="text-white-50 text-decoration-none small"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mx-3">
              <a
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("terms-of-service");
                }}
                href="#"
                className="text-white-50 text-decoration-none small"
              >
                Terms of Service
              </a>
            </li>
            <li className="mx-3">
              <a
                onClick={() => {
                  navigate("contact-us");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
                href="#"
                className="text-white-50 text-decoration-none small"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
