import "../Home/NewHome.css"
import ContactForm from '../ContactForm/ContactForm'
import './Footer.css'
import { useNavigate } from "react-router-dom";

export default function NewFooter() {
    const navigate = useNavigate();

  return (
    <div> <footer className="bg-dark text-white py-5">
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
                <li className="mb-2" onClick={navigate('/sample-images')}>
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Images
                  </a>
                </li>
                <li className="mb-2" onClick={navigate('/sample-videos')}>
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Videos
                  </a>
                </li>
                <li className="mb-2" onClick={navigate('/sample-audios')}>
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Audio
                  </a>
                </li>
                <li className="mb-2" onClick={navigate('/sample-documents')}>
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Documents
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3">
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
            </div> */}
            <div className="col-md-3">
              <h4 className="h6 fw-semibold mb-3">Support</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#faq" className="text-white-50 text-decoration-none small">
                    Help Center
                  </a>
                </li>
                {/* <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Contact Us
                  </a>
                </li> */}
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


              <div className="col-12 col-lg-3">
            {/* 20% width */}
            <div className="bg-light p-3 rounded border">
              <div className="mb-3 fs-5 text-black fw-medium">Contact Us</div>
              <ContactForm />
            </div>
          </div>
          </div>
          <div className="border-top border-secondary mt-4 pt-4 text-center">
            <p className="text-white-50 small mb-0">
              © 2024 SampleFiles.dev. All rights reserved. Made with ❤️ for developers and creators.
            </p>
          </div>
        </div>
      </footer></div>
  )
}
