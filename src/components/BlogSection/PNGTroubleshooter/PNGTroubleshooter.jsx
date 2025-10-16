import { useState } from "react";

const PNGTroubleshooter = () => {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [hasTransparency, setHasTransparency] = useState(false);

  // Troubleshooter Data
  const issues = [
    {
      id: "transparency",
      title: "Transparency Problems",
      description: "White halos, black backgrounds, or incorrect transparency",
      solutions: [
        "Design on transparent canvas from the start",
        'Disable "matte" color in export settings',
        "Use proper anti-aliasing settings",
        "Test on multiple background colors",
      ],
    },
    {
      id: "file-size",
      title: "Large File Size",
      description: "PNG files are larger than expected",
      solutions: [
        "Use PNG optimization tools (TinyPNG, ImageOptim)",
        "Reduce color depth from PNG-24 to PNG-8",
        "Remove unnecessary metadata",
        "Consider SVG for simple graphics",
      ],
    },
    {
      id: "pixelation",
      title: "Pixelation & Quality Issues",
      description: "Images look blurry or pixelated",
      solutions: [
        "Export at maximum needed dimensions",
        "Avoid upscaling raster images",
        "Use SVG for scalable graphics",
        "Check export resolution settings",
      ],
    },
    {
      id: "browser-issues",
      title: "Browser Inconsistency",
      description: "Looks different across browsers/devices",
      solutions: [
        "Export with sRGB color profile",
        "Test across multiple browsers",
        "Use consistent color management",
        "Check CSS background colors",
      ],
    },
  ];

  // Format Comparison Data
  const formats = [
    {
      name: "PNG",
      type: "png",
      transparency: "Alpha Channel",
      animation: "Via APNG",
      compression: "Lossless",
      bestFor: ["Logos", "Screenshots", "Graphics with transparency"],
      fileSize: "Medium to Large",
      browserSupport: "99%",
    },
    {
      name: "WebP",
      type: "webp",
      transparency: "Alpha Channel",
      animation: "Supported",
      compression: "Lossy/Lossless",
      bestFor: ["Web images", "Photographs", "Modern web apps"],
      fileSize: "Small",
      browserSupport: "98%",
    },
    {
      name: "AVIF",
      type: "avif",
      transparency: "Alpha Channel",
      animation: "Supported",
      compression: "Lossy/Lossless",
      bestFor: ["Next-gen web", "High quality images", "Modern applications"],
      fileSize: "Very Small",
      browserSupport: "85%",
    },
    {
      name: "JPEG",
      type: "jpeg",
      transparency: "None",
      animation: "None",
      compression: "Lossy",
      bestFor: ["Photographs", "Complex images", "Print materials"],
      fileSize: "Small to Medium",
      browserSupport: "100%",
    },
    {
      name: "GIF",
      type: "gif",
      transparency: "Basic (1-bit)",
      animation: "Supported",
      compression: "Lossless",
      bestFor: ["Simple animations", "Low-color graphics"],
      fileSize: "Large for animations",
      browserSupport: "100%",
    },
  ];

  // Optimization Tools Data
  const tools = [
    {
      id: "tinypng",
      name: "TinyPNG",
      type: "Online",
      cost: "Free (with limits)",
      features: ["Smart compression", "WebP support", "Batch processing"],
      link: "https://tinypng.com",
      rating: 5,
    },
    {
      id: "imageoptim",
      name: "ImageOptim",
      type: "Desktop",
      cost: "Free",
      features: [
        "Lossless optimization",
        "Metadata removal",
        "Batch processing",
      ],
      link: "https://imageoptim.com",
      rating: 4,
    },
    {
      id: "squoosh",
      name: "Squoosh",
      type: "Web App",
      cost: "Free",
      features: ["Multiple formats", "Quality comparison", "Resize tools"],
      link: "https://squoosh.app",
      rating: 4,
    },
    {
      id: "pngquant",
      name: "pngquant",
      type: "Command Line",
      cost: "Free",
      features: ["Color reduction", "High quality", "Batch processing"],
      link: "https://pngquant.org",
      rating: 5,
    },
  ];

  const optimizationTips = [
    "Always start with the highest quality source image",
    "Use PNG-8 for simple graphics with limited colors",
    "Remove unnecessary metadata and color profiles",
    "Consider using SVG for logos and simple icons",
    "Implement responsive images with srcset attribute",
    "Use modern formats (WebP/AVIF) with PNG fallbacks",
  ];

  const selectedIssueData = issues.find((issue) => issue.id === selectedIssue);

  return (
    <div className="container mt-5 mb-5">
      <article className="bg-white rounded-4 shadow-lg border-0 overflow-hidden">
        {/* Header Section */}
        <header
          className="text-center py-5 px-3 position-relative"
          style={{
            background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
            color: "#fff",
          }}
        >
          <h1 className="display-6 fw-bold mb-3 position-relative">
            The PNG Paradox: Fixing Common Transparency, File Size, and Quality
            Mistakes
          </h1>
          <p className="lead mb-0 position-relative fs-5">
            Finally, a guide that clears up PNG confusion—why images look
            blurry, turn black, or load slowly, and how to fix them.
          </p>
          <div className="mt-4 position-relative">
            <span className="badge bg-light text-dark fs-6 me-2 p-2">PNG</span>
            <span className="badge bg-light text-dark fs-6 me-2 p-2">
              Optimization
            </span>
            <span className="badge bg-light text-dark fs-6 p-2">
              Web Design
            </span>
          </div>
        </header>

        {/* Content Section */}
        <section className="p-4 p-md-5">
          {/* Introduction */}
          <div
            className="alert alert-info border-0 rounded-3 shadow-sm"
            role="alert"
          >
            <div className="d-flex">
              <div className="me-3 fs-4">💡</div>
              <div>
                <p className="fs-5 lh-lg mb-0">
                  PNG files seem straightforward, but they hide complexities
                  that frustrate both designers and developers. From mysterious
                  white halos around transparent images to unexpectedly large
                  file sizes, this guide tackles the real problems you face
                  daily.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="card border-0 shadow-sm mb-5">
            <div className="card-header bg-dark text-white py-3">
              <h2 className="h4 mb-0 fw-bold">📋 Table of Contents</h2>
            </div>
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    {[
                      "Common PNG Problems & Solutions",
                      "Image Format Comparison",
                      "Optimization Tools & Tips",
                    ].map((item, index) => (
                      <li key={index} className="mb-2">
                        <a
                          href={`#section-${index + 1}`}
                          className="text-decoration-none text-dark hover-text-primary"
                        >
                          <span className="text-secondary me-2">
                            {index + 1}.
                          </span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    {[
                      "PNG Best Practices",
                      "Performance Statistics",
                      "Interactive PNG Troubleshooter",
                      "Key Takeaways",
                    ].map((item, index) => (
                      <li key={index} className="mb-2">
                        <a
                          href={`#section-${index + 5}`}
                          className="text-decoration-none text-dark hover-text-primary"
                        >
                          <span className="text-secondary me-2">
                            {index + 5}.
                          </span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1 - Common Problems */}
          <div id="section-1" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                1
              </span>
              Common PNG Problems & Solutions
            </h2>

            <div className="row g-4">
              {issues.map((issue, index) => (
                <div key={issue.id} className="col-lg-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-header bg-light py-3">
                      <h5 className="mb-0 fw-bold text-dark">{issue.title}</h5>
                    </div>
                    <div className="card-body">
                      <p className="text-secondary mb-3">{issue.description}</p>
                      <h6 className="text-dark fw-bold mb-2">Solutions:</h6>
                      <ul className="text-secondary">
                        {issue.solutions.map((solution, idx) => (
                          <li key={idx} className="mb-1">
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 - Format Comparison */}
          <div id="section-2" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                2
              </span>
              Image Format Comparison
            </h2>

            <div className="table-responsive">
              <table className="table table-hover align-middle shadow-sm">
                <thead className="table-dark">
                  <tr>
                    <th className="border-0">Format</th>
                    <th className="border-0">Transparency</th>
                    <th className="border-0">Animation</th>
                    <th className="border-0">Compression</th>
                    <th className="border-0">File Size</th>
                    <th className="border-0">Browser Support</th>
                  </tr>
                </thead>
                <tbody>
                  {formats.map((format, index) => (
                    <tr key={index}>
                      <td className="fw-semibold text-dark">{format.name}</td>
                      <td>
                        <span
                          className={`badge ${
                            format.transparency === "Alpha Channel"
                              ? "bg-success"
                              : format.transparency === "Basic (1-bit)"
                              ? "bg-warning"
                              : "bg-secondary"
                          }`}
                        >
                          {format.transparency}
                        </span>
                      </td>
                      <td className="text-center">
                        {format.animation !== "None" ? "✅" : "❌"}
                      </td>
                      <td>
                        <code className="bg-light text-dark">
                          {format.compression}
                        </code>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            format.fileSize === "Very Small"
                              ? "bg-success"
                              : format.fileSize === "Small"
                              ? "bg-info"
                              : format.fileSize === "Medium"
                              ? "bg-warning"
                              : "bg-danger"
                          }`}
                        >
                          {format.fileSize}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            format.browserSupport === "100%"
                              ? "bg-success"
                              : format.browserSupport >= "95%"
                              ? "bg-primary"
                              : format.browserSupport >= "85%"
                              ? "bg-warning"
                              : "bg-secondary"
                          }`}
                        >
                          {format.browserSupport}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="alert alert-info mt-4 border-0">
              <strong>💡 Pro Tip:</strong> Use the <code>&lt;picture&gt;</code>{" "}
              element to serve modern formats like WebP/AVIF with PNG fallbacks
              for maximum compatibility and performance.
            </div>
          </div>

          {/* Section 3 - Optimization Tools */}
          <div id="section-3" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                3
              </span>
              Optimization Tools & Tips
            </h2>

            <div className="row">
              <div className="col-md-8">
                <h5 className="mb-3 text-dark">Recommended Tools</h5>
                <div className="row">
                  {tools.map((tool) => (
                    <div key={tool.id} className="col-lg-6 mb-3">
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="card-title mb-0 text-dark">
                              {tool.name}
                            </h6>
                            <span className="badge bg-light text-dark small">
                              {tool.type}
                            </span>
                          </div>
                          <div className="mb-2">
                            {Array.from({ length: 5 }, (_, i) => (
                              <span
                                key={i}
                                className={
                                  i < tool.rating
                                    ? "text-warning"
                                    : "text-secondary"
                                }
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="card-text small mb-2">
                            <strong>Cost:</strong>
                            <span
                              className={
                                tool.cost === "Free"
                                  ? "text-success ms-1"
                                  : "text-warning ms-1"
                              }
                            >
                              {tool.cost}
                            </span>
                          </p>
                          <ul className="list-unstyled small mb-3">
                            {tool.features.map((feature, index) => (
                              <li key={index} className="mb-1">
                                <span className="text-success me-1">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-dark w-100"
                          >
                            Visit Tool
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-4">
                <h5 className="mb-3 text-dark">Quick Tips</h5>
                <div className="card border-0 bg-light">
                  <div className="card-body">
                    <ul className="list-unstyled mb-0">
                      {optimizationTips.map((tip, index) => (
                        <li key={index} className="mb-3 pb-2 border-bottom">
                          <small className="text-secondary">{tip}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card border-0 bg-primary text-white mt-3">
                  <div className="card-body text-center">
                    <h6 className="mb-2">🚀 Performance Stats</h6>
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-2">
                          <div className="h5 mb-0">26%</div>
                          <small>Smaller with WebP</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-2">
                          <div className="h5 mb-0">70%</div>
                          <small>Avg Size Reduction</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Best Practices */}
          <div id="section-4" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                4
              </span>
              PNG Best Practices
            </h2>
            <div className="row">
              <div className="col-md-6">
                <div className="card border-success h-100">
                  <div className="card-header bg-success text-white py-3">
                    <h5 className="mb-0 fw-bold">✅ Do Use PNG For:</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li>Logos with transparency requirements</li>
                      <li>Screenshots with text clarity needs</li>
                      <li>Graphics requiring lossless compression</li>
                      <li>Images with sharp edges and text</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-danger h-100">
                  <div className="card-header bg-danger text-white py-3">
                    <h5 className="mb-0 fw-bold">❌ Avoid PNG For:</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li>Photographs (use WebP/JPEG)</li>
                      <li>Simple icons (use SVG)</li>
                      <li>Large background images</li>
                      <li>Print materials (use TIFF/PDF)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Section 5 - Interactive Troubleshooter */}
          <div id="section-5" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                5
              </span>
              Interactive PNG Troubleshooter
            </h2>

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label className="form-label fw-bold text-dark">
                        What's your PNG problem?
                      </label>
                      <select
                        className="form-select border-2"
                        value={selectedIssue}
                        onChange={(e) => setSelectedIssue(e.target.value)}
                      >
                        <option value="">Select an issue...</option>
                        {issues.map((issue) => (
                          <option key={issue.id} value={issue.id}>
                            {issue.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-dark">
                        File Size (if known)
                      </label>
                      <input
                        type="text"
                        className="form-control border-2"
                        placeholder="e.g., 2.5 MB"
                        value={fileSize}
                        onChange={(e) => setFileSize(e.target.value)}
                      />
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={hasTransparency}
                        onChange={(e) => setHasTransparency(e.target.checked)}
                        id="transparencyCheck"
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="transparencyCheck"
                      >
                        Image uses transparency
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    {selectedIssueData ? (
                      <div className="p-4 border rounded-3 bg-light h-100">
                        <h5 className="text-success mb-3 fw-bold">
                          {selectedIssueData.title}
                        </h5>
                        <p className="text-secondary">
                          {selectedIssueData.description}
                        </p>

                        <h6 className="mt-4 mb-3 text-dark fw-bold">
                          ✅ Recommended Solutions:
                        </h6>
                        <ul className="list-unstyled">
                          {selectedIssueData.solutions.map(
                            (solution, index) => (
                              <li
                                key={index}
                                className="mb-2 d-flex align-items-start"
                              >
                                <span className="text-success me-2 mt-1">
                                  ✓
                                </span>
                                <span className="text-secondary">
                                  {solution}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ) : (
                      <div className="text-center text-muted py-5 border rounded-3 bg-light">
                        <div className="fs-1 opacity-25">❓</div>
                        <p className="mt-3 mb-0">
                          Select your PNG issue to see solutions
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 - Key Takeaways */}
          <div id="section-6" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                6
              </span>
              Key Takeaways
            </h2>
            <div className="card border-primary">
              <div className="card-header bg-primary text-white py-3">
                <h4 className="mb-0 fw-bold">💎 Summary</h4>
              </div>
              <div className="card-body">
                <ul className="text-secondary mb-0">
                  <li className="mb-2">
                    PNG excels at transparency and lossless quality but can
                    create large files
                  </li>
                  <li className="mb-2">
                    Always design transparent graphics on transparent canvases
                    to avoid halos
                  </li>
                  <li className="mb-2">
                    Use optimization tools to reduce file sizes by 70% or more
                  </li>
                  <li className="mb-2">
                    Consider modern formats like WebP and AVIF for better
                    performance
                  </li>
                  <li>
                    Implement proper fallbacks for maximum browser compatibility
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div
            className="text-center mt-5 p-5 rounded-4 border"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <h2 className="h1 fw-bold mb-3 text-dark">
              Ready to Optimize Your PNGs?
            </h2>
            <p className="fs-5 text-secondary mb-4">
              Use these troubleshooting techniques and tools to solve your PNG
              problems and improve web performance.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a
                href="#section-1"
                className="btn btn-dark btn-lg px-5 py-3 shadow hover-lift"
              >
                🔧 Start Troubleshooting
              </a>
              <a
                href="#section-3"
                className="btn btn-outline-dark btn-lg px-5 py-3"
              >
                📊 Compare Formats
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PNGTroubleshooter;
