const SampleFilesGuide = () => {
  return (
    <div className="container mt-5 mb-5">
      <article className="bg-white rounded-4 shadow-lg border-0 overflow-hidden">
        {/* Header Section */}
        <header
          className="text-center py-5 px-3 position-relative"
          style={{
            background: "linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)",
            color: "#fff",
          }}
        >
          <h1 className="display-5 fw-bold mb-3 position-relative">
            How to Use Sample Files for Testing Software
          </h1>
          <p className="lead mb-0 position-relative fs-4">
            Learn why sample files matter, where to find them, and how to use
            them effectively
          </p>
          <div className="mt-4 position-relative">
            <span className="badge bg-light text-primary fs-6 me-2 p-2">
              Free Downloads
            </span>
            <span className="badge bg-light text-primary fs-6 me-2 p-2">
              Best Practices
            </span>
            <span className="badge bg-light text-primary fs-6 p-2">
              Testing Guide
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
                  Ever tried testing a file upload feature only to realize you
                  don't have the right test files? That's where{" "}
                  <strong>sample files</strong> come in — small, safe, and
                  ready-to-use files that make testing faster, easier, and more
                  reliable.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="card border-0 shadow-sm mb-5">
            <div className="card-header bg-primary text-white py-3">
              <h2 className="h4 mb-0 fw-bold">📘 Table of Contents</h2>
            </div>
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    {[
                      "What Are Sample Files?",
                      "Why Use Sample Files for Testing?",
                      "Types of Sample Files and Use Cases",
                      "Real-World Testing Scenarios",
                      "How to Create Sample Files",
                    ].map((item, index) => (
                      <li key={index} className="mb-2">
                        <a
                          href={`#section-${index + 1}`}
                          className="text-decoration-none text-primary hover-text-dark"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    {[
                      "Best Download Sources",
                      "Testing Tips & Best Practices",
                      "Common Mistakes to Avoid",
                      "Free Downloads & Resources",
                      "Final Thoughts",
                    ].map((item, index) => (
                      <li key={index} className="mb-2">
                        <a
                          href={`#section-${index + 6}`}
                          className="text-decoration-none text-primary hover-text-dark"
                        >
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
            <h2 className="h3 fw-bold mb-4 text-primary border-bottom pb-2">
              <span
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                1
              </span>
              What Are Sample Files?
            </h2>
            <p className="text-secondary fs-5">
              <strong>Sample files</strong> (also called dummy or test files)
              are small, pre-generated files used in software testing and
              validation. They help simulate real-world data without risking
              privacy.
            </p>
            <div className="row g-3 mt-3">
              {[
                {
                  icon: "📄",
                  text: "PDF, DOCX",
                  link: "https://samplefiles.dev/sample-documents/sample-pdf",
                },
                {
                  icon: "🖼️",
                  text: "PNG, JPG, SVG",
                  link: "https://samplefiles.dev/sample-images/sample-jpg",
                },
                {
                  icon: "🎵",
                  text: "MP3, WAV",
                  link: "https://samplefiles.dev/sample-audios/sample-mp3",
                },
                {
                  icon: "🎥",
                  text: "MP4, AVI",
                  link: "https://samplefiles.dev/sample-videos/sample-mp4",
                },
                {
                  icon: "📊",
                  text: "HTML, JSON",
                  link: "https://samplefiles.dev/sample-code/sample-xml",
                },
                {
                  icon: "📦",
                  text: "ZIP, RAR",
                  link: "https://samplefiles.dev/sample-archives/sample-zip",
                },
              ].map((item, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="p-3 border rounded-3 text-center bg-light hover-lift transition-all">
                    <div className="fs-2 mb-2">{item.icon}</div>
                    <div className="small fw-medium">
                      <a
                        href={
                          item.link.startsWith("http")
                            ? item.link
                            : window.location.origin + item.link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-decoration-none small"
                      >
                        {item.text}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-primary border-bottom pb-2">
              <span
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                2
              </span>
              Why Use Sample Files for Testing?
            </h2>
            <div className="row g-4">
              {[
                {
                  icon: "🚀",
                  title: "Speed Up Testing",
                  desc: "Reuse files instead of recreating data",
                },
                {
                  icon: "🔒",
                  title: "Protect Privacy",
                  desc: "No need for real user data",
                },
                {
                  icon: "📏",
                  title: "Ensure Consistency",
                  desc: "Standardized testing across teams",
                },
                {
                  icon: "🐛",
                  title: "Test Edge Cases",
                  desc: "Try large, broken, or unsupported files",
                },
              ].map((item, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-start p-3 border rounded-3 bg-light h-100">
                    <span className="fs-2 me-3">{item.icon}</span>
                    <div>
                      <h5 className="fw-bold mb-1">{item.title}</h5>
                      <p className="text-secondary mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-primary border-bottom pb-2">
              <span
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                3
              </span>
              Types of Sample Files and Use Cases
            </h2>
            <div className="table-responsive">
              <table className="table table-hover align-middle shadow-sm">
                <thead className="table-primary">
                  <tr>
                    <th className="border-0">Type</th>
                    <th className="border-0">Formats</th>
                    <th className="border-0">Common Use Cases</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Documents",
                      formats: "PDF, DOCX, TXT",
                      useCase: "Resume uploads, CMS systems",
                    },
                    {
                      type: "Images",
                      formats: "JPG, PNG, SVG",
                      useCase: "Profile pictures, compression testing",
                    },
                    {
                      type: "Audio",
                      formats: "MP3, WAV, FLAC",
                      useCase: "Podcast apps, playback validation",
                    },
                    {
                      type: "Video",
                      formats: "MP4, MOV, AVI",
                      useCase: "Streaming services, encoding tests",
                    },
                    {
                      type: "Data Files",
                      formats: "CSV, JSON, XML",
                      useCase: "Import/export functionality",
                    },
                    {
                      type: "Archives",
                      formats: "ZIP, RAR, TAR",
                      useCase: "Batch uploads, compression",
                    },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="fw-semibold">{row.type}</td>
                      <td>
                        <code>{row.formats}</code>
                      </td>
                      <td>{row.useCase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-primary border-bottom pb-2">
              <span
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                4
              </span>
              Real-World Testing Scenarios
            </h2>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-header bg-success text-white py-3">
                    <h5 className="mb-0 fw-bold">👨‍💻 For Developers</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li>Test file uploads using Postman or forms</li>
                      <li>Validate processing logic with CSV/JSON imports</li>
                      <li>API endpoint testing with various file types</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-header bg-warning text-dark py-3">
                    <h5 className="mb-0 fw-bold">👩‍🔬 For QA Testers</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li>Automate uploads with Cypress or Selenium</li>
                      <li>Perform negative tests with unsupported formats</li>
                      <li>Ensure correct media rendering on all devices</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-header bg-info text-white py-3">
                    <h5 className="mb-0 fw-bold">🎓 For Students</h5>
                  </div>
                  <div className="card-body">
                    <ul className="text-secondary">
                      <li>Practice with sample datasets for ML or analytics</li>
                      <li>
                        Test academic projects like portals or resume uploads
                      </li>
                      <li>Learn file processing without real data risks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-primary border-bottom pb-2">
              <span
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                7
              </span>
              Best Download Sources
            </h2>
            <div className="list-group shadow-sm">
              {[
                {
                  name: "SampleFiles.dev",
                  desc: "All formats in one place with curated collections",
                  badge: "Recommended",
                  link: "https://samplefiles.dev",
                },
                {
                  name: "GitHub Datasets",
                  desc: "CSV, JSON datasets for developers and data science",
                  link: "https://github.com/topics/dataset",
                },

                /*   {
                 {
                  name: "Sample-Videos.com",
                  desc: "MP4, MOV, 3GP files for video testing",
                },
                   {
                  name: "File-Examples.com",
                  desc: "PDF, DOCX, MP3, CSV files in various sizes",
                }, 
                },*/
              ].map((source, index) => (
                <div
                  key={index}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3"
                >
                  <div>
                    <h6 className="mb-1 fw-bold">
                      <a
                        href={source.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.name}
                      </a>
                    </h6>
                    <p className="mb-1 text-secondary">{source.desc}</p>
                  </div>
                  {source.badge && (
                    <span className="badge bg-primary rounded-pill">
                      {source.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-primary border-bottom pb-2">
              <span
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                8
              </span>
              Testing Tips & Best Practices
            </h2>
            <div className="row g-3">
              {[
                "Test with multiple file types and sizes",
                "Validate MIME types on the backend",
                "Automate uploads where possible",
                "Clean up test files after runs",
                "Test across different browsers and devices",
                "Check file size limits and validation",
              ].map((tip, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-center p-3 border rounded-3 bg-light">
                    <div
                      className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "30px", height: "30px" }}
                    >
                      ✓
                    </div>
                    <span className="fw-medium">{tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="mb-5">
            <h2 className="h3 fw-bold mb-4 text-primary border-bottom pb-2">
              <span
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                9
              </span>
              Common Mistakes to Avoid
            </h2>
            <div
              className="alert alert-warning border-0 rounded-3"
              role="alert"
            >
              <div className="row g-3">
                {[
                  "Using real user data for tests",
                  "Ignoring corrupted or unsupported files",
                  "Forgetting to test across browsers/devices",
                  "Not testing file size limits",
                  "Skipping security validation tests",
                ].map((mistake, index) => (
                  <div
                    key={index}
                    className="col-md-6 d-flex align-items-start"
                  >
                    <span className="text-danger me-2 fw-bold">🚫</span>
                    <span>{mistake}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div
            id="section-9"
            className="text-center mt-5 p-5 rounded-4"
            style={{
              background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            }}
          >
            <h2 className="h1 fw-bold mb-3 text-primary">
              Ready to Start Testing?
            </h2>
            <p className="fs-5 text-secondary mb-4">
              Download our curated collection of sample files and streamline
              your testing workflow today.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a
                href="https://samplefiles.dev"
                className="btn btn-primary btn-lg px-5 py-3 shadow hover-lift"
                target="_blank"
                rel="noopener noreferrer"
              >
                📎 Download Free Sample Files
              </a>
              <a
                href="#section-1"
                className="btn btn-outline-primary btn-lg px-5 py-3"
              >
                📖 Read Guide Again
              </a>
            </div>
            <p className="mt-3 text-muted small">
              JPG, PDF, MP3, MP4, CSV, JSON & more — all in one place.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SampleFilesGuide;
