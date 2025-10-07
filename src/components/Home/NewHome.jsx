import { useState, useEffect } from "react";
import "./NewHome.css";
import { trackCardClick } from "../../utils/Analytics";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import ToolsSection from "../ToolsSection";
import AboutUs from "../AboutUs/AboutUs";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../App";
import { categories, faqs } from "../../utils/Constant";

export default function NewHome() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const [categoriesData, setCategoriesData] = useState(categories);
  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const qBase = collection(db, "downloadCount");
        const snapshot = await getDocs(qBase);

        if (snapshot.empty) return;

        // Initialize category totals
        const categoryTotals = {
          images: 0,
          videos: 0,
          audios: 0,
          documents: 0,
          archives: 0,
          code: 0,
        };

        // Loop through all documents and add their totals
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();

          const totals = data.totals || {};

          Object.keys(totals).forEach((key) => {
            if (categoryTotals.hasOwnProperty(key)) {
              categoryTotals[key] += totals[key];
            }
          });
        });
        // Map totals back to UI categories
        const updated = categories.map((cat) => ({
          ...cat,
          downloads: categoryTotals[cat.key] || cat.downloads,
        }));

        setCategoriesData(updated);
      } catch (err) {
        console.error("Error fetching category downloads:", err);
      }
    };

    fetchDownloads();
  }, []);

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
              <SearchBar onSearch={(value) => {}} />

              {/* Free Badge */}
              <div className="d-inline-flex align-items-center gap-2 badges px-4 py-2 rounded-pill text-white">
                <img
                  width={20}
                  src={require("../../assets/shield.png")}
                  alt="Shield Icon"
                />
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
              <h3 className="text-muted-custom lead">
                Find the perfect sample files for your projects across different
                categories. Perfect for developers, testers, educators, and
                presentations.
              </h3>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="row g-4">
            {categoriesData.map((category, index) => {
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
                    <div
                      className={`w-50 text-center rounded-pill fw-bold small mb-3 d-inline-flex align-items-center  justify-content-center ${category.bgDownload} ${category.textDownload}`}
                    >
                      {category.downloads}+ Downloads
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

      <section>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Developer Tools</h2>
            <h3 className="text-muted-custom lead">
              Essential utilities for developers and designers.
            </h3>
            <h3 className="text-muted-custom lead">
              Convert, compress, generate, and optimize your digital assets with
              our collection of professional tools.
            </h3>

            {/* <div className="text-center text-black my-2 px-3 px-md-5">
            
              <h3 className="text-muted-custom lead">
                Find the perfect sample files for your projects across different
                categories. Perfect for developers, testers, educators, and
                presentations.
              </h3>
            </div> */}
          </div>
          <ToolsSection />
        </div>
      </section>
      <AboutUs />
      <section id={"faq"} className="py-5 bg-muted-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="display-6 fw-bold mb-3">
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
