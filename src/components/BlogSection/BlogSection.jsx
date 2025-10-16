import { useNavigate } from "react-router-dom";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import blog4 from "../../assets/blog-4.jpg";
import blog5 from "../../assets/blog-5.jpg";
import blog6 from "../../assets/blog-6.jpg";
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
    path: "/how-to-convert-image-from-jpg-to-png",
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
  {
    id: 4,
    title: " Image Optimization: Best Practices for Web Performance",
    description:
      " Learn how to optimize images for faster loading websites. A practical guide to WebP/AVIF formats, compression, responsive images, and Core Web Vitals",
    author: "Vishal Dhanotiya",
    date: "Oct 15, 2025",
    image: blog4,
    category: "Security",
    path: "/image-optimization-best-practices-for-web-performance",
  },
  {
    id: 5,
    title: "File Upload Security: A Complete Guide for Developers",
    description:
      " Learn secure file upload best practices for web applications. Covers client-side & server-side validation, allowed file types, and scanning uploaded files",
    author: "Vishal Dhanotiya",
    date: "Oct 15, 2025",
    image: blog5,
    category: "Security",
    path: "/file-upload-security-a-complete-guide-for-developers",
  },
  {
    id: 6,
    title: "The PNG Paradox: Fixing Common Transparency, File Size, and Quality Mistakes",
    description:
      "PNGs are powerful but often misunderstood. From transparency glitches to oversized files, most “solutions” online miss the real cause.",
    author: "Vishal Dhanotiya",
    date: "Oct 15, 2025",
    image: blog6,
    category: "Security",
    path: "/the-png-paradox-fixing-common-transparency-file-size-and-quality-mistakes",
  },
];

export default function BlogSection() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <section id="blogs" className="bg-white pt-5 pb-3">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-3">Blogs</h2>

        <p className="text-body-secondary fw-normal fs-4 text-center mb-5">
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

                <h3 className="fw-bold fs-4">{blog.title}</h3>
                <p className="text-body-secondary fw-medium flex-grow-1">
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
                    <div>Read More →</div>
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
