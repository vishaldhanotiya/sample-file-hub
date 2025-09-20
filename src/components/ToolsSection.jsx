import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ToolsSection = () => {
  const navigate = useNavigate();

  const tools = [
    {
      key: "/convert-png-to-jpg",
      title: "Image Converter",
      description:
        "Convert images between different formats like PNG to JPG, WEBP to PNG, and more. Fast, reliable, and maintains quality.",
      icon: require("../assets/conversion.png"),
      color: "primary",
    },
    {
      key: "placeholder-image-generator",
      title: "Placeholder Image Generator",
      description:
        "Generate custom placeholder images for your projects. Choose dimensions, colors, and text to create perfect mockup images.",
      icon: require("../assets/default-image.png"),
      color: "primary",
    },
    // {
    //   title: "Image Compressor",
    //   description:
    //     "Reduce image file sizes without losing quality. Optimize your images for web, email, or storage with smart compression.",
    //   icon: "📦",
    //   color: "danger",
    // },
    // {
    //   title: "JSON Viewer",
    //   description:
    //     "View, format, and validate JSON data. Pretty-print messy JSON, check syntax errors, and explore nested structures easily.",
    //   icon: "📋",
    //   color: "warning",
    // },
    // {
    //   title: "Color Palette Generator",
    //   description:
    //     "Create beautiful color palettes for your designs. Generate harmonious color schemes, gradients, and export in various formats.",
    //   icon: "🎨",
    //   color: "info",
    // },
    // {
    //   title: "QR Code Generator",
    //   description:
    //     "Generate QR codes for URLs, text, contact info, and more. Customize size, error correction, and download in high quality.",
    //   icon: "📱",
    //   color: "dark",
    // },
    // {
    //   title: "Base64 Encoder/Decoder",
    //   description:
    //     "Encode and decode Base64 strings for data URIs, API integrations, and file handling. Supports text and binary data.",
    //   icon: "🔐",
    //   color: "success",
    // },
    // {
    //   title: "CSS Minifier",
    //   description:
    //     "Minify and optimize CSS code to reduce file size and improve loading speed. Remove comments, whitespace, and redundancy.",
    //   icon: "🎯",
    //   color: "secondary",
    // },
  ];

  return (
    <div className="container py-2">
      {/* Header Section */}

      {/* Tools Grid */}
      <div className="row g-4">
        {tools.map((tool, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="category-card h-100 p-4 text-center rounded">
              <div
                className="hero-gradient d-inline-flex align-items-center  justify-content-center bg-light rounded mb-3"
                style={{ width: "64px", height: "64px" }}
              >
                <img alt="tool-icon" width={50} height={50} src={tool.icon} />
              </div>
              <h5 className="fw-semibold text-dark mb-2">{tool.title}</h5>
              <p className="text-muted small flex-grow-1">{tool.description}</p>
              <button
                onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate(tool.key);
                }}
                className="btn hero-gradient btn-primary mt-3 align-self-end"
              >
                Use Tool →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
