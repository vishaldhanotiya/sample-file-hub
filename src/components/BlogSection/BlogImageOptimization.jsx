import { useEffect } from "react";
import { getMetaData } from "../../utils/Constant";

export default function BlogImageOptimization() {

     // Set title and metadata
      useEffect(() => {
        const metaData = getMetaData("blog-4");
    
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
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
            <div
              className="position-absolute"
              style={{ top: "20%", left: "10%" }}
            >
              🖼️
            </div>
            <div
              className="position-absolute"
              style={{ top: "60%", right: "15%" }}
            >
              ⚡
            </div>
            <div
              className="position-absolute"
              style={{ bottom: "30%", left: "20%" }}
            >
              🚀
            </div>
          </div>
          <h1 className="display-5 fw-bold mb-3 position-relative">
            Image Optimization Best Practices
          </h1>
          <p className="lead mb-0 position-relative fs-4">
            A practical guide to faster loading times and better user experience
          </p>
          <div className="mt-4 position-relative">
            <span className="badge bg-light text-dark fs-6 me-2 p-2">
              Performance
            </span>
            <span className="badge bg-light text-dark fs-6 me-2 p-2">
              Web Development
            </span>
            <span className="badge bg-light text-dark fs-6 p-2">
              Best Practices
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
                  Did you know images make up over{" "}
                  <strong>50% of most webpage sizes</strong>? That's why
                  optimizing them can slash your load times and keep visitors
                  from bouncing.
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
                      "Why Image Optimization Matters",
                      "Choosing the Right Image Format",
                      "Modern Image Formats Comparison",
                      "Responsive Images Implementation",
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
                      "Compression Techniques & Tools",
                      "Smart Loading Strategies",
                      "Performance Monitoring",
                      "Advanced Tips & Best Practices",
                      "Real-World Impact & Conclusion",
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

          {/* Section 1 */}
          <div id="section-1" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                1
              </span>
              Why Image Optimization Matters
            </h2>
            <div className="row g-4">
              {[
                {
                  icon: "📊",
                  title: "Page Weight Impact",
                  desc: "Images account for 50-60% of total page weight on average",
                  stat: "50%+",
                },
                {
                  icon: "⚡",
                  title: "Load Time Effect",
                  desc: "Every 1 second delay reduces conversions by 7%",
                  stat: "7% loss",
                },
                {
                  icon: "📱",
                  title: "Mobile Impact",
                  desc: "Mobile users experience slower load times on unoptimized images",
                  stat: "3G matters",
                },
                {
                  icon: "🔍",
                  title: "SEO Factor",
                  desc: "Core Web Vitals directly affect search rankings",
                  stat: "SEO critical",
                },
              ].map((item, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="text-center p-3 border rounded-3 bg-light h-100">
                    <div className="fs-1 mb-2">{item.icon}</div>
                    <h5 className="fw-bold text-dark">{item.title}</h5>
                    <p className="text-secondary small">{item.desc}</p>
                    <span className="badge bg-primary">{item.stat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                2
              </span>
              Choosing the Right Image Format
            </h2>

            <div className="table-responsive">
              <table className="table table-hover align-middle shadow-sm">
                <thead className="table-dark">
                  <tr>
                    <th className="border-0">Format</th>
                    <th className="border-0">Best Use Case</th>
                    <th className="border-0">Browser Support</th>
                    <th className="border-0">Compression Type</th>
                    <th className="border-0">Pro Tips</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      format: "JPEG",
                      useCase: "Photos, complex images with gradients",
                      support: "Universal",
                      compression: "Lossy",
                      tip: "Use 75-85% quality for best balance",
                    },
                    {
                      format: "PNG",
                      useCase: "Logos, graphics with transparency",
                      support: "Universal",
                      compression: "Lossless",
                      tip: "Perfect for graphics with text and sharp edges",
                    },
                    {
                      format: "WebP",
                      useCase: "General web use, modern applications",
                      support: "Modern browsers",
                      compression: "Both",
                      tip: "25-35% smaller than PNG with same quality",
                    },
                    {
                      format: "AVIF",
                      useCase: "High-quality needs, next-gen apps",
                      support: "Growing support",
                      compression: "Both",
                      tip: "Best compression available, 50% smaller than JPEG",
                    },
                    {
                      format: "SVG",
                      useCase: "Icons, logos, simple illustrations",
                      support: "Universal",
                      compression: "Vector",
                      tip: "Infinitely scalable, perfect for responsive design",
                    },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="fw-semibold text-dark">{row.format}</td>
                      <td className="text-secondary">{row.useCase}</td>
                      <td>
                        <span
                          className={`badge ${
                            row.support === "Universal"
                              ? "bg-success"
                              : row.support === "Modern browsers"
                              ? "bg-warning"
                              : "bg-info"
                          }`}
                        >
                          {row.support}
                        </span>
                      </td>
                      <td>
                        <code className="bg-light text-dark">
                          {row.compression}
                        </code>
                      </td>
                      <td className="text-success small">{row.tip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Guide */}
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card border-success h-100">
                  <div className="card-header bg-success text-white py-3">
                    <h5 className="mb-0 fw-bold">🚀 Quick Format Guide</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        ✅ <strong>Photos</strong> → JPEG or WebP
                      </li>
                      <li className="mb-2">
                        ✅ <strong>Logos & Graphics</strong> → PNG or SVG
                      </li>
                      <li className="mb-2">
                        ✅ <strong>Modern Sites</strong> → WebP with JPEG
                        fallbacks
                      </li>
                      <li className="mb-2">
                        ✅ <strong>High Quality</strong> → AVIF for supported
                        browsers
                      </li>
                      <li className="mb-0">
                        ✅ <strong>Icons & Illustrations</strong> → SVG
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-info h-100">
                  <div className="card-header bg-info text-white py-3">
                    <h5 className="mb-0 fw-bold">💡 Real-World Impact</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Switching from PNG to WebP can save enough data to load
                      your page
                      <strong> 2-3 seconds faster</strong> on mobile networks.
                      For e-commerce sites, this can mean{" "}
                      <strong>10-20% higher conversion rates</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                3
              </span>
              Modern Image Formats Comparison
            </h2>

            <div className="row g-4">
              {[
                {
                  format: "WebP",
                  savings: "25-35%",
                  features: [
                    "Better compression than JPEG",
                    "Supports transparency",
                    "Animation support",
                  ],
                  support: "Chrome, Firefox, Edge, Opera",
                },
                {
                  format: "AVIF",
                  savings: "50%+",
                  features: [
                    "Best compression quality",
                    "HDR support",
                    "Wide color gamut",
                  ],
                  support: "Chrome, Firefox, Opera",
                },
                {
                  format: "JPEG XL",
                  savings: "30-40%",
                  features: [
                    "Backward compatible",
                    "Progressive decoding",
                    "Lossless JPEG recompression",
                  ],
                  support: "Experimental support",
                },
              ].map((format, index) => (
                <div key={index} className="col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-header bg-light text-dark py-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold">{format.format}</h5>
                        <span className="badge bg-success">
                          {format.savings} smaller
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h6 className="fw-bold text-dark mb-2">Key Features:</h6>
                      <ul className="text-secondary mb-3">
                        {format.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                      <h6 className="fw-bold text-dark mb-2">
                        Browser Support:
                      </h6>
                      <p className="text-secondary small">{format.support}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="alert alert-warning mt-4 border-0">
              <h6 className="fw-bold mb-2">🎯 Implementation Strategy:</h6>
              <p className="mb-0">
                Always provide fallbacks for modern formats. Use the{" "}
                <code>&lt;picture&gt;</code> element to serve AVIF/WebP to
                supported browsers and JPEG/PNG as fallback for older browsers.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                4
              </span>
              Responsive Images Implementation
            </h2>

            <div className="row">
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header bg-primary text-white py-3">
                    <h5 className="mb-0 fw-bold">Multiple Sizes (srcset)</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-secondary">
                      Serve the right size for each device:
                    </p>
                    <div className="card border-0 bg-light text-dark">
                      <div className="card-body p-0">
                        <pre className="p-3 mb-0 bg-dark text-light border-0">
                          <code className="text-light">
                            {`<img src="image-800.jpg"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1000px) 800px,
            1200px"
     alt="Description">`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header bg-success text-white py-3">
                    <h5 className="mb-0 fw-bold">Modern Formats (picture)</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-secondary">
                      Use new formats with safe fallbacks:
                    </p>
                    <div className="card border-0 bg-light text-dark">
                      <div className="card-body p-0">
                        <pre className="p-3 mb-0 bg-dark text-light border-0">
                          <code className="text-light">
                            {`<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="alert alert-info border-0">
              <h5 className="alert-heading fw-bold">
                🎯 Pro Tips for Responsive Images
              </h5>
              <ul className="mb-0">
                <li>
                  <strong>Start with the largest size needed</strong> - browsers
                  will pick the right one automatically
                </li>
                <li>
                  <strong>Always include descriptive alt text</strong> - crucial
                  for accessibility and SEO
                </li>
                <li>
                  <strong>Test on real devices</strong> - emulators don't always
                  match real-world performance
                </li>
                <li>
                  <strong>Set width and height attributes</strong> - prevents
                  layout shifts and improves CLS
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                5
              </span>
              Compression Techniques & Tools
            </h2>

            <div className="row mb-4">
              {[
                {
                  format: "JPEG Quality",
                  range: "75-85%",
                  description: "Sweet spot for quality vs file size",
                  tip: "Lower for thumbnails (60-70%), higher for hero images (80-90%)",
                },
                {
                  format: "WebP Quality",
                  range: "65-80%",
                  description: "Better quality at lower file sizes than JPEG",
                  tip: "Perfect balance for modern browsers with excellent compression",
                },
                {
                  format: "AVIF Quality",
                  range: "50-70%",
                  description: "Outstanding compression efficiency",
                  tip: "Future-proof your images with next-gen compression",
                },
                {
                  format: "PNG Optimization",
                  range: "Lossless",
                  description:
                    "Use tools to reduce file size without quality loss",
                  tip: "Perfect for logos, icons, and graphics with transparency",
                },
              ].map((item, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-3">
                  <div className="card text-center h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        🖼️ {item.format}
                      </h5>
                      <p className="h4 text-dark fw-bold">{item.range}</p>
                      <p className="card-text text-secondary small">
                        {item.description}
                      </p>
                      <small className="text-muted">{item.tip}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <h4 className="mt-4 mb-3 text-dark">
              🛠️ Essential Optimization Tools
            </h4>
            <div className="row">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-light">
                    <h5 className="mb-0 fw-bold">Development Tools</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {[
                        {
                          name: "imagemin",
                          type: "Node.js",
                          desc: "Plugin-based image minification",
                        },
                        {
                          name: "Sharp",
                          type: "Node.js",
                          desc: "High-performance image processing",
                        },
                        {
                          name: "ImageMagick",
                          type: "CLI",
                          desc: "Command-line image manipulation",
                        },
                      ].map((tool, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <strong>{tool.name}</strong>
                            <div className="text-secondary small">
                              {tool.desc}
                            </div>
                          </div>
                          <span className="badge bg-primary">{tool.type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-light">
                    <h5 className="mb-0 fw-bold">Online Tools & Services</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {[
                        {
                          name: "Squoosh",
                          type: "Web",
                          desc: "Google's online image optimizer",
                        },
                        {
                          name: "TinyPNG",
                          type: "Web",
                          desc: "Smart PNG and JPEG compression",
                        },
                        {
                          name: "Cloudinary",
                          type: "Service",
                          desc: "Complete image management CDN",
                        },
                      ].map((tool, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <strong>{tool.name}</strong>
                            <div className="text-secondary small">
                              {tool.desc}
                            </div>
                          </div>
                          <span className="badge bg-success">{tool.type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                6
              </span>
              Smart Loading Strategies
            </h2>

            <div className="row">
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header bg-info text-white py-3">
                    <h5 className="mb-0 fw-bold">Easy Native Lazy Loading</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-secondary">
                      Just add one attribute for automatic lazy loading:
                    </p>
                    <div className="card border-0 bg-light text-dark">
                      <div className="card-body p-0">
                        <pre className="p-3 mb-0 bg-dark text-light border-0">
                          <code className="text-light">
                            {`<img src="image.jpg" 
     loading="lazy" 
     alt="Description">`}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <small className="text-muted mt-2 d-block">
                      Browsers handle the rest automatically! Supported in all
                      modern browsers.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header bg-dark text-white py-3">
                    <h5 className="mb-0 fw-bold">Advanced Implementation</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-secondary">
                      For custom lazy loading behavior:
                    </p>
                    <div className="card border-0 bg-light text-dark">
                      <div className="card-body p-0">
                        <pre className="p-3 mb-0 bg-dark text-light border-0">
                          <code className="text-light">
                            {`// Intersection Observer API
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

// Observe all lazy images
document.querySelectorAll('img.lazy')
  .forEach(img => observer.observe(img));`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lazy Loading Best Practices */}
            <div className="alert alert-success border-0">
              <h5 className="alert-heading fw-bold">
                💡 Lazy Loading Best Practices
              </h5>
              <ul className="mb-0">
                <li>
                  <strong>Don't lazy load above-the-fold images</strong> - they
                  should load immediately for LCP
                </li>
                <li>
                  <strong>Use native lazy loading when possible</strong> - it's
                  simpler and well-supported
                </li>
                <li>
                  <strong>Set width and height attributes</strong> - prevents
                  layout shifts and improves CLS
                </li>
                <li>
                  <strong>Consider loading="eager" for critical images</strong>{" "}
                  - force important images to load first
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                7
              </span>
              Performance Monitoring & Core Web Vitals
            </h2>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card border-danger h-100">
                  <div className="card-header bg-danger text-white py-3">
                    <h5 className="mb-0 fw-bold">🎯 Core Web Vitals</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li className="mb-2">
                        <strong>Largest Contentful Paint (LCP)</strong>
                        <br />
                        <small>
                          Measure loading performance. Target: under 2.5 seconds
                        </small>
                      </li>
                      <li className="mb-2">
                        <strong>Cumulative Layout Shift (CLS)</strong>
                        <br />
                        <small>
                          Measure visual stability. Target: under 0.1
                        </small>
                      </li>
                      <li className="mb-2">
                        <strong>First Input Delay (FID)</strong>
                        <br />
                        <small>
                          Measure interactivity. Target: under 100 milliseconds
                        </small>
                      </li>
                      <li>
                        <strong>First Contentful Paint (FCP)</strong>
                        <br />
                        <small>
                          Measure perceived load speed. Target: under 1.8
                          seconds
                        </small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-warning h-100">
                  <div className="card-header bg-warning text-dark py-3">
                    <h5 className="mb-0 fw-bold">⚡ Performance Monitoring</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li>
                        <strong>Set performance budgets</strong> - max total
                        image size per page
                      </li>
                      <li>
                        <strong>Test on slow 3G networks</strong> - real-world
                        conditions matter
                      </li>
                      <li>
                        <strong>Monitor field data</strong> - use CrUX data for
                        real user metrics
                      </li>
                      <li>
                        <strong>Implement RUM</strong> - Real User Monitoring
                        for continuous insights
                      </li>
                      <li>
                        <strong>Use Lighthouse CI</strong> - automate
                        performance testing
                      </li>
                      <li>
                        <strong>Track image dimensions</strong> - ensure proper
                        sizing across devices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                8
              </span>
              Advanced Tips & Best Practices
            </h2>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card border-primary h-100">
                  <div className="card-header bg-primary text-white py-3">
                    <h5 className="mb-0 fw-bold">🚀 Quick Performance Wins</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li>
                        <strong>Enable CDN compression</strong> - automatic
                        optimization at edge
                      </li>
                      <li>
                        <strong>Use CSS for simple effects</strong> - instead of
                        image files
                      </li>
                      <li>
                        <strong>Implement image sitemaps</strong> - better SEO
                        and indexing
                      </li>
                      <li>
                        <strong>Monitor broken images</strong> - 404s hurt
                        performance and UX
                      </li>
                      <li>
                        <strong>Use HTTP/2 or HTTP/3</strong> - better parallel
                        loading
                      </li>
                      <li>
                        <strong>Implement cache policies</strong> - proper
                        caching headers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border-success h-100">
                  <div className="card-header bg-success text-white py-3">
                    <h5 className="mb-0 fw-bold">🛡️ Security & SEO</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li>
                        <strong>Always use alt text</strong> - accessibility and
                        SEO requirement
                      </li>
                      <li>
                        <strong>Implement srcset and sizes</strong> - responsive
                        images for SEO
                      </li>
                      <li>
                        <strong>Use descriptive filenames</strong> - helps with
                        image search
                      </li>
                      <li>
                        <strong>Sanitize uploaded images</strong> - prevent
                        malicious content
                      </li>
                      <li>
                        <strong>Consider WebP for all images</strong> - with
                        proper fallbacks
                      </li>
                      <li>
                        <strong>Monitor Core Web Vitals</strong> - direct Google
                        ranking factor
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Content */}
            <div className="alert alert-dark border-0">
              <h5 className="fw-bold mb-3">
                📈 Additional Optimization Strategies
              </h5>
              <div className="row">
                <div className="col-md-6">
                  <ul className="text-secondary">
                    <li>
                      <strong>Use vector graphics (SVG)</strong> for icons and
                      logos
                    </li>
                    <li>
                      <strong>Implement image CDNs</strong> for automatic
                      optimization
                    </li>
                    <li>
                      <strong>Consider progressive JPEGs</strong> for better
                      perceived performance
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="text-secondary">
                    <li>
                      <strong>Optimize image metadata</strong> remove
                      unnecessary EXIF data
                    </li>
                    <li>
                      <strong>Use adaptive serving</strong> based on network
                      conditions
                    </li>
                    <li>
                      <strong>Monitor competitor performance</strong> for
                      benchmarking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-dark border-bottom pb-2">
              <span
                className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                9
              </span>
              Real-World Impact & Conclusion
            </h2>

            {/* Real-World Example */}
            <div className="card bg-light border-0 mb-4">
              <div className="card-body">
                <h4 className="card-title text-dark mb-4">
                  📊 Real-World Impact Example
                </h4>
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <div className="p-3 border rounded-3 bg-white">
                      <h5 className="text-danger fw-bold">
                        Before Optimization
                      </h5>
                      <p className="h2 text-danger fw-bold">4.2s</p>
                      <small className="text-muted">Average Load Time</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="p-3 border rounded-3 bg-white">
                      <h5 className="text-success fw-bold">
                        After Optimization
                      </h5>
                      <p className="h2 text-success fw-bold">1.8s</p>
                      <small className="text-muted">Average Load Time</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="p-3 border rounded-3 bg-white">
                      <h5 className="text-primary fw-bold">Performance Gain</h5>
                      <p className="h2 text-primary fw-bold">57%</p>
                      <small className="text-muted">Faster Load Times</small>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    * Based on aggregate data from e-commerce sites implementing
                    comprehensive image optimization strategies
                  </small>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="card border-primary">
              <div className="card-header bg-primary text-white py-3">
                <h4 className="mb-0 fw-bold">🎯 Key Takeaways</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="text-secondary">
                      <li className="mb-2">
                        <strong>Choose formats wisely</strong> - match format to
                        specific use case
                      </li>
                      <li className="mb-2">
                        <strong>Implement responsive images</strong> - serve
                        right size for each device
                      </li>
                      <li className="mb-2">
                        <strong>Use modern formats with fallbacks</strong> -
                        WebP + JPEG for compatibility
                      </li>
                      <li className="mb-2">
                        <strong>Optimize compression settings</strong> - balance
                        quality and file size
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="text-secondary">
                      <li className="mb-2">
                        <strong>Lazy load below-the-fold</strong> - faster
                        initial page loads
                      </li>
                      <li className="mb-2">
                        <strong>Set performance budgets</strong> - stay within
                        agreed limits
                      </li>
                      <li className="mb-2">
                        <strong>Monitor Core Web Vitals</strong> - track real
                        user experience
                      </li>
                      <li className="mb-2">
                        <strong>Use proper tooling</strong> - automate
                        optimization workflows
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0 text-dark">
                    <strong>Remember:</strong> Image optimization isn't a
                    one-time task. Make it part of your development workflow and
                    continuous improvement process. Regular monitoring and
                    optimization can lead to significantly better user
                    experience, higher conversions, and improved SEO rankings.
                    🚀
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div
            className="text-center mt-5 p-5 rounded-4 border"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <h2 className="h1 fw-bold mb-3 text-dark">
              Ready to Optimize Your Images?
            </h2>
            <p className="fs-5 text-secondary mb-4">
              Start with our free sample images to test your optimization
              strategies and see real performance improvements.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a
                href="/images"
                className="btn btn-dark btn-lg px-5 py-3 shadow hover-lift"
              >
                🖼️ Browse Sample Images
              </a>
              <a
                href="#section-1"
                className="btn btn-outline-dark btn-lg px-5 py-3"
              >
                📖 Review Guide Again
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
