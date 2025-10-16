import { useState, useEffect } from "react";
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../App";
import { categories } from "../../utils/Constant";
import Blog from "../BlogSection/BlogSection";
import BrowseCategories from "../BrowseCategories/BrowseCategories";
import DeveloperTools from "../DeveloperTools/DeveloperTools";
import FAQ from "../FAQ/FAQ";

export default function Home() {
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
                <h3 className="text-white fw-medium fs-6 mb-4 fs-md-5">
                  No login, no tracking, just instant access.
                </h3>
              </div>

              {/* Search Bar */}
              <SearchBar onSearch={() => {}} />

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
      <BrowseCategories categoriesData={categoriesData} />

      <DeveloperTools />

      <Blog />

      <WhyChooseUs />

      <FAQ />
    </div>
  );
}
