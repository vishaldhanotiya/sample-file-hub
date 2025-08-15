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
  return (
    <footer className="py-5 bg-black">
      <div className="container">
        <div className="row">
          {/* Left Section (80%) */}
          <div className="col-12 col-lg-9 pe-lg-4">
            {" "}
            {/* 80% width */}
            <div className="row">
              {/* Logo and Description */}
              <div className="col-12 col-md-4 mb-4">
                <h2>
                  <span className="fw-light text-white">Sample</span>
                  <span className="fw-bold text-white"> Files</span>
                </h2>
                <p className="small text-white">
                  Safe, Accurate & Always Free Test Files All sample files are
                  virus-free, production-ready, and include correct metadata for
                  real-world scenarios. Free for personal and commercial use,
                  with unlimited downloads.
                </p>
              </div>

              {/* Category Columns */}
              <div className="col-6 col-md-4 col-lg-2">
                <Column title="Test Images" items={imageTabData} />
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <Column title="Video Samples" items={videoTabData} />
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <Column title="Audio Files" items={audioTabData} />
              </div>

              <div className="col-6 col-md-4 col-lg-2">
                <Column title="Test Documents" items={documentTabData} />
              </div>
            </div>
          </div>

          {/* Right Section (20%) - Contact Form */}
          <div className="col-12 col-lg-3">
            {/* 20% width */}
            <div className="bg-light p-3 rounded border">
              <h5 className="mb-3">Contact Us</h5>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="mt-5">
        <div className="share-container justify-content-center text-center align-item-center">
     
      
          <SocialShare/>
        </div>

        {/* Copyright text - full width below all columns */}
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-center text-secondary mb-0">
              ©2025 Sample Files. All rights reserved.
            </p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
