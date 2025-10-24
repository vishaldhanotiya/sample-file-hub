import React from "react";

const AVIFBlogPost = () => {
  return (
    <div className="container mt-5 mb-5">
      <article className="bg-white rounded-4 shadow-lg border-0 overflow-hidden">
        <div className="row justify-content-center">
          {/* Header with background color */}
          <header
            className="text-center py-5 px-3 position-relative ps-5 pe-5"
            style={{
              color: "#fff",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <h1 className="display-5 fw-bold text-white mb-3 lh-sm">
              AVIF: The Next-Generation Image Format Revolutionizing Web
              Performance
            </h1>
            <div className="text-white mb-4">
              <span className="me-3">• Technical Analysis</span>
              <span className="me-3">• Industry Trends</span>
              <span>• Implementation Guide</span>
            </div>

            <div className="mt-4 position-relative">
              <span className="badge bg-light text-dark fs-6 me-2 p-2">
                Web Performance{" "}
              </span>
              <span className="badge bg-light text-dark fs-6 p-2">
                Image Optimization
              </span>
            </div>
          </header>
          <section className="p-4 p-md-5">
            {/* <div className="border-top pt-4">
              <p className="lead text-muted">
                An in-depth technical analysis of AVIF's capabilities, adoption challenges, 
                and strategic implementation for modern web development.
              </p>
            </div> */}

            {/* Executive Summary */}
            <section className="mb-5">
              <div className="card border-start-4 border-start-primary shadow-sm">
                <div className="card-body">
                  <h6 className="card-title text-uppercase fw-bold text-black mb-2">
                    Executive Summary
                  </h6>
                  <p className="card-text mb-0">
                    AVIF delivers <strong>50% better compression</strong> than
                    JPEG while maintaining superior image quality, supporting
                    advanced features like HDR and animation, and remaining
                    completely royalty-free. While browser support continues to
                    expand, strategic implementation with fallbacks provides
                    immediate performance benefits.
                  </p>
                </div>
              </div>
            </section>

            {/* What is AVIF Section */}
            <section className="mb-5">
              <h2 className="h2 fw-bold text-dark mb-4 border-bottom pb-2">
                Understanding AVIF Technology
              </h2>
              <p className="mb-4">
                <strong className="text-dark">
                  AVIF (AV1 Image File Format)
                </strong>{" "}
                is a new type of image format that uses the AV1 video technology
                to make image files smaller and faster to load. It was created
                by a group of big tech companies like Google, Mozilla,
                Microsoft, Cisco, and Netflix.
              </p>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="h-100 p-4 bg-light rounded">
                    <h5 className="fw-bold mb-3">Core Technology</h5>
                    <p className="mb-0">
                      Utilizes advanced compression algorithms from AV1 video
                      codec, originally designed for efficient 4K video
                      streaming, now optimized for static and animated images.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="h-100 p-4 bg-light rounded">
                    <h5 className="fw-bold mb-3">Industry Backing</h5>
                    <p className="mb-0">
                      Developed and maintained by the Alliance for Open Media,
                      ensuring ongoing innovation and widespread industry
                      adoption across platforms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Advantages */}
            <section className="mb-5">
              <h2 className="h2 fw-bold text-dark mb-4 border-bottom pb-2">
                Technical Advantages
              </h2>

              <div className="row g-4 mb-4">
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <div
                        className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <span className="fw-bold text-success">50%</span>
                      </div>
                      <h5 className="card-title fw-bold">
                        Superior Compression
                      </h5>
                      <p className="card-text text-muted small">
                        Average file size reduction of 50% compared to JPEG at
                        equivalent quality levels, with additional 20-30%
                        improvement over WebP.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <div
                        className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <span className="fw-bold text-primary">12-bit</span>
                      </div>
                      <h5 className="card-title fw-bold">
                        Enhanced Color Depth
                      </h5>
                      <p className="card-text text-muted small">
                        Supports 12-bit color depth (68 billion colors) versus
                        JPEG's 8-bit (16.7 million), eliminating color banding
                        in gradients.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <div
                        className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <span className="fw-bold text-info">HDR</span>
                      </div>
                      <h5 className="card-title fw-bold">Advanced Features</h5>
                      <p className="card-text text-muted small">
                        Comprehensive support for HDR, wide color gamuts,
                        transparency, animation, and lossless compression in a
                        single format.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light p-4 rounded">
                <h6 className="fw-bold text-dark mb-3">
                  Technical Specifications
                </h6>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <strong>Compression:</strong> Both lossy and lossless
                      </li>
                      <li className="mb-2">
                        <strong>Color Support:</strong> Up to 12-bit, Rec. 2100,
                        P3
                      </li>
                      <li className="mb-2">
                        <strong>Transparency:</strong> Full alpha channel
                        support
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <strong>Animation:</strong> Native support with high
                        efficiency
                      </li>
                      <li className="mb-2">
                        <strong>Metadata:</strong> EXIF, XMP, and custom
                        metadata
                      </li>
                      <li className="mb-2">
                        <strong>License:</strong> Royalty-free, open standard
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Adoption Challenges */}
            <section className="mb-5">
              <h2 className="h2 fw-bold text-dark mb-4 border-bottom pb-2">
                Adoption Considerations
              </h2>

              <div className="card border-0 bg-light mb-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark mb-3">
                    <span className="badge bg-warning me-2">1</span>
                    Browser & Platform Support
                  </h5>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="text-center p-3 bg-white rounded">
                        <div className="text-success mb-2">
                          <strong>Full Support</strong>
                        </div>
                        <small className="text-muted">
                          Chrome, Firefox, Opera, Android
                        </small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3 bg-white rounded">
                        <div className="text-warning mb-2">
                          <strong>Recent Support</strong>
                        </div>
                        <small className="text-muted">
                          Safari (iOS 14+, macOS Big Sur+)
                        </small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center p-3 bg-white rounded">
                        <div className="text-danger mb-2">
                          <strong>No Support</strong>
                        </div>
                        <small className="text-muted">
                          Internet Explorer, Legacy Browsers
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card h-100 border-0">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-dark">
                        <span className="badge bg-secondary me-2">2</span>
                        Computational Requirements
                      </h6>
                      <p className="card-text text-muted">
                        Encoding complexity is approximately 5-10x higher than
                        JPEG, requiring more processing power and time for batch
                        conversions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 border-0">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-dark">
                        <span className="badge bg-secondary me-2">3</span>
                        Tooling Ecosystem
                      </h6>
                      <p className="card-text text-muted">
                        While support is growing in mainstream tools, some
                        professional workflows may require additional plugins or
                        conversion steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation Strategy */}
            <section className="mb-5">
              <h2 className="h2 fw-bold text-dark mb-4 border-bottom pb-2">
                Implementation Strategy
              </h2>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-white border-0 py-3">
                  <h5 className="mb-0 fw-bold">
                    Progressive Enhancement Approach
                  </h5>
                </div>
                <div className="card-body">
                  <p className="text-muted mb-4">
                    Implement AVIF using the &lt;picture&gt; element to provide
                    optimal formats based on browser capability while
                    maintaining compatibility.
                  </p>

                  <div className="bg-dark rounded p-4 mb-4">
                    <pre
                      className="text-light mb-0"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {`<picture>
  <source srcset="hero-image.avif" type="image/avif">
  <source srcset="hero-image.webp" type="image/webp">
  <img 
    src="hero-image.jpg" 
    alt="Professional product showcase"
    loading="lazy"
    width="1200"
    height="800"
  >
</picture>`}
                    </pre>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <h6 className="fw-bold text-dark mb-3">
                        Conversion Tools
                      </h6>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <strong>Squoosh.app</strong> - Web-based optimization
                        </li>
                        <li className="mb-2">
                          <strong>Sharp (Node.js)</strong> - Automated build
                          processes
                        </li>
                        <li className="mb-2">
                          <strong>libavif</strong> - Command-line tools
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold text-dark mb-3">Best Practices</h6>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          • Quality setting 60-80 for optimal balance
                        </li>
                        <li className="mb-2">
                          • Monitor for over-compression artifacts
                        </li>
                        <li className="mb-2">
                          • Implement CDN with format detection
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Comparison */}
            <section className="mb-5">
              <h2 className="h2 fw-bold text-dark mb-4 border-bottom pb-2">
                Performance Analysis
              </h2>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" className="fw-bold text-dark">
                        Format
                      </th>
                      <th scope="col" className="fw-bold text-dark">
                        Compression Efficiency
                      </th>
                      <th scope="col" className="fw-bold text-dark">
                        Feature Support
                      </th>
                      <th scope="col" className="fw-bold text-dark">
                        Browser Coverage
                      </th>
                      <th scope="col" className="fw-bold text-dark">
                        Performance Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>AVIF</strong>
                      </td>
                      <td>
                        <div className="progress" style={{ height: "8px" }}>
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                        <small className="text-muted">Excellent</small>
                      </td>
                      <td>
                        <span className="badge bg-success">Complete</span>
                      </td>
                      <td>
                        <span className="badge bg-info">85%+</span>
                      </td>
                      <td>
                        <strong className="text-success">9.5/10</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>WebP</strong>
                      </td>
                      <td>
                        <div className="progress" style={{ height: "8px" }}>
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                        <small className="text-muted">Very Good</small>
                      </td>
                      <td>
                        <span className="badge bg-primary">Comprehensive</span>
                      </td>
                      <td>
                        <span className="badge bg-success">97%+</span>
                      </td>
                      <td>
                        <strong className="text-primary">8.0/10</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>JPEG</strong>
                      </td>
                      <td>
                        <div className="progress" style={{ height: "8px" }}>
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <small className="text-muted">Good</small>
                      </td>
                      <td>
                        <span className="badge bg-warning">Basic</span>
                      </td>
                      <td>
                        <span className="badge bg-success">Universal</span>
                      </td>
                      <td>
                        <strong className="text-warning">6.0/10</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-5">
              <div
                className="card border-0 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
              >
                <div className="card-body p-4">
                  <h3 className="h4 fw-bold mb-3">Strategic Recommendation</h3>
                  <p className="mb-4 opacity-90">
                    AVIF represents the future of web image optimization with
                    undeniable technical advantages. Organizations should begin
                    immediate implementation using progressive enhancement
                    strategies to deliver superior performance to modern
                    browsers while maintaining compatibility across all user
                    bases.
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-white bg-opacity-20 text-black rounded p-3 me-4">
                      <strong className="d-block h5 mb-1">50-60%</strong>
                      <small className="opacity-90">
                        Reduction in Image Bandwidth
                      </small>
                    </div>
                    <div className="bg-white text-black bg-opacity-20 rounded p-3">
                      <strong className="d-block h5 mb-1">85%+</strong>
                      <small className="opacity-90">
                        Current Browser Support
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Resources - Fixed text color */}
            <footer className="border-top pt-4">
              <h6 className="fw-bold text-dark mb-3">
                Technical Resources & References
              </h6>
              <div className="row g-3">
                <div className="col-md-4">
                  <a
                    href="https://aomediacodec.github.io/av1-avif/"
                    className="text-decoration-none d-block p-3 border rounded hover-shadow"
                  >
                    <div className="fw-bold text-primary mb-1">
                      📄 Official Specification
                    </div>
                    <small className="text-dark">
                      AVIF File Format Specification
                    </small>
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="https://caniuse.com/avif"
                    className="text-decoration-none d-block p-3 border rounded hover-shadow"
                  >
                    <div className="fw-bold text-primary mb-1">
                      🌐 Browser Compatibility
                    </div>
                    <small className="text-dark">
                      Current Support Statistics
                    </small>
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="https://squoosh.app/"
                    className="text-decoration-none d-block p-3 border rounded hover-shadow"
                  >
                    <div className="fw-bold text-primary mb-1">
                      🛠️ Conversion Tool
                    </div>
                    <small className="text-dark">
                      Squoosh - Web-based Converter
                    </small>
                  </a>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </article>
    </div>
  );
};

export default AVIFBlogPost;
