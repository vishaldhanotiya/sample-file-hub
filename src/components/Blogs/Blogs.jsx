import "./Blogs.css";
import BlogSection from "../BlogSection/BlogSection";
import { useEffect } from "react";
import { getMetaData } from "../../utils/Constant";

const Blogs = () => {
  
  useEffect(() => {
    const metaData = getMetaData("blogs");

    document.title = metaData.title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = metaData.description; // Use .content instead of setAttribute
  }, []);

  return (
    <div className="bg-white min-vh-100 py-5">
      <BlogSection />
    </div>
  );
};

export default Blogs;
