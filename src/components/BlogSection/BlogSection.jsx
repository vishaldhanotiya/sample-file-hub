import { useNavigate } from "react-router-dom";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-4.jpg";
import blog3 from "../../assets/blog-6.jpg";
import "../BlogList/BlogList";

const blogs = [
  {
    id: 1,
    title: "How to Convert JPG to PNG — 3 Simple and Effective Methods",
    description:
      "In this guide, we'll cover three simple methods to convert JPG images to PNG and introduce our free, built-in converter for instant results!",
    author: "Vishal Dhanotiya",
    date: "October 8, 2025",
    image: blog1,
    category: "Development",
    path: "/how-to-convert-jpg-to-png",
  },
  {
    id: 2,
    title: "Step-by-Step Guide to Using Sample Files in Software Testing",
    description:
      "Learn why sample files matter, where to find them, and how to use them for testing web apps, media players, and data pipelines.",
    author: "John Doe",
    date: "September 20, 2025",
    image: blog2,
    category: "Performance",
    path: "/how-to-use-sample-files-for-testing",
  },
  {
    id: 3,
    title:
      "PNG vs WebP vs 9-Patch: Best Image Format for Mobile & Web Performance",
    description:
      "A guide to choosing the right image format — boost performance, save bandwidth, and enhance user experience.",
    author: "Vishal Dhanotiya",
    date: "August 14, 2025",
    image: blog3,
    category: "Security",
    path: "/compare-png-webp-and-nine-patch-images",
  },
];

export default function BlogSection() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <section id="blogs" className="bg-white py-5">
      <div className="container">
        <h3 className="text-center display-6 fw-bold mb-3">Blogs</h3>
        <p className="text-muted lead text-center mb-5">
          Explore engaging articles covering tech, development tips, and digital
          insights. Stay updated with the latest trends, tutorials, and guides
          to boost your knowledge and creativity.
        </p>

        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-md-4 d-flex">
              <div
                className="blog-card flex-fill d-flex flex-column p-3"
                onClick={() => handleNavigate(blog.path)}
              >
                <div className="blog-image mb-3">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="img-fluid rounded-3"
                  />
                </div>

                <h5 className="fw-bold">{blog.title}</h5>
                <p className="text-muted small flex-grow-1">
                  {blog.description}
                </p>

                <div className="mt-auto text-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(blog.path);
                    }}
                    className="btn btn-outline-primary btn-sm fw-semibold px-3 rounded-3"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


{
  /* <div className="col-md-6 col-lg-4" key={blog.id} onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 0px 0px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0px 0px rgba(0,0,0,0.08)";
              }}>
                  <div
                    className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <img
                      src={blog.image}
                      className="card-img-top"
                      alt={blog.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="badge bg-primary">
                          {blog.category}
                        </span>
                        <small className="text-muted">{blog.date}</small>
                      </div>
                      <h5 className="card-title fw-semibold text-dark">
                        {blog.title}
                      </h5>
                      <p className="card-text text-muted">{blog.description}</p>
                    </div>
                    <div className="card-footer bg-white border-0 text-end">
                      <button
                      onClick={()=>navigate(blog.path)}
                        className="btn btn-outline-primary btn-sm fw-semibold px-3"
                        style={{
                          borderRadius: "10px",
                        }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </div> */
}
//              <div className="col-md-4">
//   <div
//     className="p-4 d-flex flex-column align-items-start"
//     style={{
//       backgroundColor: "#ffffff",
//       border: "1px solid #eaeaea",
//       borderRadius: "20px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//       transition: "transform 0.2s ease, box-shadow 0.2s ease",
//     }}
//     onClick={() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       navigate("blog/how-to-convert-jpg-to-png");
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = "translateY(-3px)";
//       e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
//     }}
//   >
//     <div
//       className="mb-3 d-flex align-items-center justify-content-center"
//       style={{
//         width: "100%",
//         height: "50%",
//         objectFit: "cover", // fills the area, may crop edges
//         borderRadius: "12px",
//       }}
//     >
//       {/* Download Icon */}
//       <img
//         src={require("../../assets/blog-1.jpg")}
//         alt={"title"}
//         style={{
//           width: "100%",
//           borderRadius: "12px",
//         }}
//       />
//     </div>
//     <h2 className="fw-bold fs-5">
//       How to Convert JPG to PNG 3 Simple and Effective Methods
//     </h2>
//     <p className={"text-muted fs-6"}>
//       In this guide, we'll cover three simple methods to convert JPG
//       images to PNG and introduce our free, built-in converter for
//       instant results!
//     </p>
//   </div>
// </div>

// <div className="col-md-4">
//   <div
//     className="p-4 d-flex flex-column align-items-start"
//     style={{
//       backgroundColor: "#ffffff",
//       border: "1px solid #eaeaea",
//       borderRadius: "20px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//       transition: "transform 0.2s ease, box-shadow 0.2s ease",
//     }}
//     onClick={() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       navigate("blog/how-to-use-sample-files-for-testing");
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = "translateY(-3px)";
//       e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
//     }}
//   >
//     <div
//       className="mb-3 d-flex align-items-center justify-content-center"
//       style={{
//         width: "100%",
//         height: "50%",
//         objectFit: "cover", // fills the area, may crop edges
//         borderRadius: "12px",
//       }}
//     >
//       {/* Download Icon */}
//       <img
//         src={require("../../assets/blog-4.jpg")}
//         alt={"title"}
//         style={{
//           width: "100%",
//           borderRadius: "12px",
//         }}
//       />
//     </div>
//     <h2 className="fw-bold fs-5">
//       Step-by-Step Guide to Using Sample Files in Software Testing
//     </h2>
//     <p className={"text-muted fs-6"}>
//       Learn why sample files matter, where to find them, and how to
//       use them for testing web apps, media players, and data
//       pipelines.
//     </p>
//   </div>
// </div>

//  <div className="col-md-4">
//   <div
//     className="p-4 d-flex flex-column align-items-start"
//     style={{
//       backgroundColor: "#ffffff",
//       border: "1px solid #eaeaea",
//       borderRadius: "20px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//       transition: "transform 0.2s ease, box-shadow 0.2s ease",
//     }}
//     onClick={() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       navigate("blog/compare-png-webp-and-nine-patch-images");
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = "translateY(-3px)";
//       e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
//     }}
//   >
//     <div
//       className="mb-3 d-flex align-items-center justify-content-center"
//       style={{
//         width: "100%",
//         height: "50%",
//         objectFit: "cover", // fills the area, may crop edges
//         borderRadius: "12px",
//       }}
//     >
//       {/* Gift Icon */}
//       <img
//         src={require("../../assets/blog-6.jpg")}
//         alt={"title"}
//         style={{
//           width: "100%",
//           borderRadius: "12px",
//         }}
//       />
//     </div>
//     <h2 className="fw-bold fs-5">
//       PNG vs WebP vs 9-Patch: Best Image Format for Mobile & Web
//       Performance
//     </h2>
//     <p className={"fs-6 text-muted"}>
//       A Guide to Choosing the Right Image Format for Your Needs Boost
//       Performance, Save Bandwidth, and Enhance User Experience
//     </p>
//   </div>
// </div>
