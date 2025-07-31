import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";

const Home = () => {
  const navigate = useNavigate();
  const goToFileListing = (type) => {
    navigate("/fileListing", {state:{fileType:type}});
  };
  const imageType = [
    { label: "PNG",type: "png", icon: require("../../assets/icon-png.png") },
    { label: "JPG",type: "jpg", icon: require("../../assets/icon-jpg.png") },
    { label: "SVG",type: "svg", icon: require("../../assets/icon-svg.png") },
    { label: "GIF", type: "gif",icon: require("../../assets/icon-gif.png") },
  ];

  const videoType = [
    { label: "MP4",type: "mp4",  icon: require("../../assets/icon-mp4.png") },
    { label: "MKV",type: "mkv",  icon: require("../../assets/icon-mkv.png") },
    { label: "AVI",type: "avi",  icon: require("../../assets/icon-avi.png") },
    { label: "FLV",type: "flv",  icon: require("../../assets/icon-flv.png") },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
     <Header/>

      <main className="container py-4 flex-grow-1">
      <SearchBar onSearch={()=>{}} />
        <section className="mb-4">
          <h4 className="fw-bold mb-3">Image File Types</h4>
          <div className="row g-3">
            {imageType.map((item, index) => (
              <div className="col-6 col-md-3" key={index} onClick={()=>goToFileListing(item.type)}>
                <img
                  className="ratio ratio-1x1 rounded bg-light"
                  src={item.icon}
                />
                <p className="mt-2 fw-medium text-dark">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h4 className="fw-bold mb-3">Video File Types</h4>
          <div className="row g-3">
            {videoType.map((item, index) => (
              <div className="col-6 col-md-3" key={index} onClick={()=>goToFileListing(item.type)}>
                <img
                  className="ratio ratio-1x1 rounded bg-light"
                  src={item.icon}
                />
                <p className="mt-2 fw-medium text-dark">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="fw-bold mb-3">Featured Resources</h4>
          <div className="row g-3">
            {[
              "Landscape",
              "Abstract Art",
              "Presentation Template",
              "Marketing Video",
            ].map((title, idx) => (
              <div className="col-12 col-md-6" key={title}>
                <div
                  className="ratio ratio-16x9 rounded bg-light"
                  style={{
                    backgroundImage: `url('featured${idx}.jpg')`,
                    backgroundSize: "cover",
                  }}
                />
                <div>
                  <p className="fw-medium text-dark mt-2">{title}</p>
                  <p className="text-muted">
                    {idx % 2 === 0 ? "Download" : "Copy"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
