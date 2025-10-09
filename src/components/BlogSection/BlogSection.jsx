import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <div id="blogs" className="bg-gradient bg-white">
      <div className="container my-1 py-4 ">
        <h3 className="text-center display-6 fw-bold mb-3 py-4">Blogs</h3>
        <h3 className="text-muted-custom lead text-center mb-5">
          {
            "Explore engaging articles covering tech, development tips, and digital insights. Stay updated with the latest trends, tutorials, and practical guides to boost your knowledge and creativity."
          }
        </h3>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div
              className="p-4 d-flex flex-column align-items-start"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eaeaea",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("blog/how-to-convert-jpg-to-png");
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover", // fills the area, may crop edges
                  borderRadius: "12px",
                }}
              >
                {/* Download Icon */}
                <img
                  src={require("../../assets/blog-1.jpg")}
                  alt={"title"}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <h2 className="fw-bold fs-5">
                How to Convert JPG to PNG 3 Simple and Effective Methods
              </h2>
              <p className={"text-muted fs-6"}>
                In this guide, we'll cover three simple methods to convert JPG
                images to PNG and introduce our free, built-in converter for
                instant results!
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div
              className="p-4 d-flex flex-column align-items-start"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eaeaea",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("blog/how-to-use-sample-files-for-testing");
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover", // fills the area, may crop edges
                  borderRadius: "12px",
                }}
              >
                {/* Download Icon */}
                <img
                  src={require("../../assets/blog-4.jpg")}
                  alt={"title"}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <h2 className="fw-bold fs-5">
                Step-by-Step Guide to Using Sample Files in Software Testing
              </h2>
              <p className={"text-muted fs-6"}>
                Learn why sample files matter, where to find them, and how to
                use them for testing web apps, media players, and data
                pipelines.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div
              className="p-4 d-flex flex-column align-items-start"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eaeaea",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("blog/compare-png-webp-and-nine-patch-image");
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover", // fills the area, may crop edges
                  borderRadius: "12px",
                }}
              >
                {/* Gift Icon */}
                <img
                  src={require("../../assets/blog-6.jpg")}
                  alt={"title"}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <h2 className="fw-bold fs-5">
                PNG vs WebP vs 9-Patch: Best Image Format for Mobile & Web
                Performance
              </h2>
              <p className={"fs-6 text-muted"}>
                A Guide to Choosing the Right Image Format for Your Needs Boost
                Performance, Save Bandwidth, and Enhance User Experience{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
