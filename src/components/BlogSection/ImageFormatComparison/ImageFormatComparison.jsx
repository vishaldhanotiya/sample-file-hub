const ImageFormatComparison = () => {
  const formatData = {
    png: {
      name: "PNG",
      description: "The Precision Artist",
      bestFor: [
        "Logos with transparency",
        "Icons with sharp edges",
        "Screenshots with text",
        "When maximum compatibility is needed",
      ],
      strengths: [
        "Perfect alpha transparency",
        "Lossless quality",
        "Universal browser support",
        "Great for text and sharp lines",
      ],
      weaknesses: [
        "Large file sizes",
        "Poor for photographs",
        "No animation support",
        "Inefficient compression",
      ],
      exampleUse: "Company logos, UI icons, technical diagrams",
    },
    ninePatch: {
      name: "9-Patch",
      description: "The Android Specialist",
      bestFor: [
        "Android app buttons",
        "Stretchable backgrounds",
        "Chat bubbles",
        "Progress bars",
      ],
      strengths: [
        "Perfect scalability",
        "No distortion when stretching",
        "Native Android performance",
        "Small file sizes for UI",
      ],
      weaknesses: [
        "Android only",
        "Requires special tools",
        "Complex to create",
        "Not for content images",
      ],
      exampleUse:
        "Android UI elements, responsive buttons, notification backgrounds",
    },
    webp: {
      name: "WebP",
      description: "The Performance Champion",
      bestFor: [
        "Photographs",
        "Complex images",
        "Website hero images",
        "Animated graphics",
      ],
      strengths: [
        "25-35% smaller than PNG/JPEG",
        "Lossless & lossy compression",
        "Animation support",
        "Alpha transparency",
      ],
      weaknesses: [
        "Limited legacy browser support",
        "Requires fallbacks for IE",
        "More complex implementation",
      ],
      exampleUse: "Product photos, blog images, animated stickers",
    },
  };

  const performanceData = [
    { format: "PNG", size: "245 KB", loadTime: "1.8s", quality: "100%" },
    { format: "WebP (Lossy)", size: "67 KB", loadTime: "0.5s", quality: "98%" },
    {
      format: "WebP (Lossless)",
      size: "128 KB",
      loadTime: "0.9s",
      quality: "100%",
    },
    { format: "9-Patch", size: "3 KB", loadTime: "Instant", quality: "N/A" },
  ];

  const useCases = [
    {
      scenario: "App Icon/Logo",
      choice: "PNG",
      reason: "Lossless quality and perfect transparency are key",
    },
    {
      scenario: "Android Button",
      choice: "9-Patch",
      reason: "Only format designed to stretch correctly for dynamic content",
    },
    {
      scenario: "Website Hero Image",
      choice: "WebP (Lossy)",
      reason: "Drastically reduces file size for faster loading",
    },
    {
      scenario: "Animated Sticker",
      choice: "WebP (Animated)",
      reason: "Smaller files and smoother transparency than GIF",
    },
    {
      scenario: "Complex Illustration",
      choice: "WebP (Lossless)",
      reason: "PNG-quality with much smaller file size",
    },
  ];

  return (
    <div className="container my-3">
      <div className="bg-white rounded-4 shadow-lg border-0 mt-4 overflow-hidden">
        <div className="row mb-2">
          <div className="col-12">
            <header
              className="text-center py-5 px-3 position-relative mb-5"
              style={{
                background: "linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)",
                color: "#fff",
              }}
            >
              <h1 className="display-6 fw-bold text-white mb-3 text-center">
                PNG vs WebP vs 9-Patch: <br></br> Best Image Format for Mobile
                and Web Performance
              </h1>
              <p className="lead mb-0 position-relative fs-4 mb-4">
                Choosing the perfect image format for web & mobile applications
              </p>
            </header>
          </div>
        </div>
        {/* Header */}
        <div className="px-lg-5 px-3 ">
          <div className="alert alert-info">
            <strong>Performance Fact:</strong> 53% of mobile visits are
            abandoned if pages take longer than 3 seconds to load. Your image
            choices matter!
          </div>
          {/* Quick Decision Guide */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <h4 className="mb-0">🚀 Quick Decision Guide</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-success text-center shadow-sm">
                        <div className="card-body text-center">
                          <div className="h1 mb-3">🖼️</div>
                          <h5 className="card-title text-success">Use PNG</h5>
                          <p className="card-text">
                            For simple graphics, logos, and icons that require
                            transparency. Universal support.
                          </p>
                          <div className="mt-3">
                            <small className="text-muted fw-bold">
                              Best for: Icons, logos with transparency
                            </small>
                          </div>
                        </div>
                        <a className="mb-2">Download PNG</a>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-warning text-center shadow-sm">
                        <div className="card-body text-center">
                          <div className="h1 mb-3">📱</div>
                          <h5 className="card-title text-warning">
                            Use 9-Patch
                          </h5>
                          <p className="card-text">
                            Exclusively for Android app UI elements that need to
                            stretch without distortion.
                          </p>
                          <div className="mt-3">
                            <small className="text-muted fw-bold">
                              Best for: Android buttons, chat bubbles
                            </small>
                          </div>
                        </div>
                        <a className="mb-2">Download 9-Patch</a>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="card h-100 border-info text-center shadow-sm">
                        <div className="card-body text-center">
                          <div className="h1 mb-3">⚡</div>
                          <h5 className="card-title text-info">Use WebP</h5>
                          <p className="card-text">
                            For almost everything else - photographs and complex
                            images. Superior compression.
                          </p>
                          <div className="mt-3">
                            <small className="text-muted fw-bold">
                              Best for: Photos, hero images, animations
                            </small>
                          </div>
                        </div>
                        <a className="mb-2">Download WebP</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Format Details */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center mb-4">
                📊 Format Details & Comparison
              </h2>
              <div className="row">
                {Object.entries(formatData).map(([key, format]) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={key}>
                    <div
                      className={`card h-100 shadow-sm ${
                        key === "png"
                          ? "border-success"
                          : key === "ninePatch"
                          ? "border-warning"
                          : "border-info"
                      }`}
                    >
                      <div
                        className={`card-header ${
                          key === "png"
                            ? "bg-success text-white"
                            : key === "ninePatch"
                            ? "bg-warning text-dark"
                            : "bg-info text-white"
                        }`}
                      >
                        <h5 className="mb-1">{format.name}</h5>
                        <small className="opacity-75">
                          {format.description}
                        </small>
                      </div>
                      <div className="card-body">
                        <h6 className="text-success">✅ Best For:</h6>
                        <ul className="mb-3">
                          {format.bestFor.map((item, index) => (
                            <li key={index} className="small">
                              {item}
                            </li>
                          ))}
                        </ul>

                        <h6 className="text-primary">💪 Strengths:</h6>
                        <ul className="mb-3">
                          {format.strengths.map((item, index) => (
                            <li key={index} className="small">
                              {item}
                            </li>
                          ))}
                        </ul>

                        <h6 className="text-danger">⚠️ Weaknesses:</h6>
                        <ul className="mb-3">
                          {format.weaknesses.map((item, index) => (
                            <li key={index} className="small">
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-3 p-3 bg-light rounded">
                          <strong>📝 Example Use:</strong>
                          <span className="small d-block mt-1">
                            {format.exampleUse}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Benchmarks */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-dark text-white">
                  <h4 className="mb-0">📈 Performance Benchmarks</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-striped">
                      <thead className="table-dark">
                        <tr>
                          <th>Format</th>
                          <th>File Size</th>
                          <th>Load Time</th>
                          <th>Quality Score</th>
                          <th>Efficiency Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {performanceData.map((data, index) => (
                          <tr key={index}>
                            <td>
                              <strong>{data.format}</strong>
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  data.size.includes("KB")
                                    ? parseInt(data.size) < 100
                                      ? "bg-success"
                                      : parseInt(data.size) < 200
                                      ? "bg-warning"
                                      : "bg-danger"
                                    : "bg-success"
                                }`}
                              >
                                {data.size}
                              </span>
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  data.loadTime === "Instant"
                                    ? "bg-success"
                                    : data.loadTime.includes("0.")
                                    ? "bg-info"
                                    : "bg-warning"
                                }`}
                              >
                                {data.loadTime}
                              </span>
                            </td>
                            <td>{data.quality}</td>
                            <td>
                              {data.format.includes("WebP") && "🏆 Excellent"}
                              {data.format.includes("9-Patch") &&
                                "🚀 Perfect for UI"}
                              {data.format === "PNG" && "⚠️ Inefficient"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-6 mb-3">
                      <div className="card bg-light border-success">
                        <div className="card-body">
                          <h6 className="text-success">
                            📈 Real Impact Example
                          </h6>
                          <p className="mb-2 small">
                            E-commerce site switching to WebP saw incredible
                            results:
                          </p>
                          <ul className="small mb-0">
                            <li>
                              <strong>42% smaller images</strong>
                            </li>
                            <li>
                              <strong>1.2s faster loading</strong>
                            </li>
                            <li>
                              <strong>18% more conversions</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card bg-light border-primary">
                        <div className="card-body">
                          <h6 className="text-primary">🎯 SEO Impact</h6>
                          <p className="mb-2 small">
                            Faster images significantly improve Google Core Web
                            Vitals:
                          </p>
                          <ul className="small mb-0">
                            <li>
                              <strong>LCP</strong> (Largest Contentful Paint)
                            </li>
                            <li>
                              <strong>CLS</strong> (Cumulative Layout Shift)
                            </li>
                            <li>
                              <strong>Overall Page Experience Score</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Table */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                  <h4 className="mb-0">🎯 Common Use Cases</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-success">
                        <tr>
                          <th width="25%">Scenario</th>
                          <th width="20%">Best Choice</th>
                          <th width="55%">Why?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {useCases.map((useCase, index) => (
                          <tr key={index}>
                            <td>
                              <strong>{useCase.scenario}</strong>
                            </td>
                            <td>
                              <span
                                className={`badge ${
                                  useCase.choice.includes("PNG")
                                    ? "bg-success"
                                    : useCase.choice.includes("9-Patch")
                                    ? "bg-warning text-dark"
                                    : "bg-info"
                                }`}
                              >
                                {useCase.choice}
                              </span>
                            </td>
                            <td>{useCase.reason}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Examples */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-dark text-white">
                  <h4 className="mb-0">💻 Implementation Examples</h4>
                </div>
                <div className="card-body">
                  {/* HTML Implementation */}
                  <div className="mb-4">
                    <h6 className="text-primary">🌐 HTML with Fallbacks</h6>
                    <pre className="bg-dark text-light p-3 rounded small">
                      {`<picture>
  <source srcset="hero.webp" type="image/webp">
  <source srcset="hero.jpg" type="image/jpeg">
  <img src="hero.jpg" alt="Product image" loading="lazy">
</picture>`}
                    </pre>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      {/* Android Implementation */}
                      <div className="mb-4">
                        <h6 className="text-warning">🤖 Android XML</h6>
                        <pre className="bg-dark text-light p-3 rounded small">
                          {`<!-- 9-Patch for buttons -->
<Button
    android:background="@drawable/button_background"
    android:text="Submit" />

<!-- WebP for content -->
<ImageView
    android:src="@drawable/product_image"
    android:scaleType="centerCrop" />`}
                        </pre>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* React Implementation */}
                      <div className="mb-4">
                        <h6 className="text-info">⚛️ React Component</h6>
                        <pre className="bg-dark text-light p-3 rounded small">
                          {`const OptimizedImage = ({ src, alt, webpSrc }) => (
  <picture>
    <source srcSet={webpSrc} type="image/webp" />
    <img 
      src={src} 
      alt={alt}
      loading="lazy"
      className="img-fluid" 
    />
  </picture>
);`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Conversion Commands */}
                  {/* <div>
                    <h6 className="text-success">🔧 Conversion Commands</h6>
                    <pre className="bg-dark text-light p-3 rounded small">
                      {`# Convert to WebP
cwebp -q 80 image.jpg -o image.webp

# Lossless PNG to WebP
cwebp -lossless image.png -o image.webp

# Batch conversion
for file in *.png; do cwebp "$file" -o "\${file%.*}.webp"; done`}
                    </pre>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* === NINE PATCH GUIDE SECTION === */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card shadow-sm border-warning">
                <div className="card-header bg-warning text-dark">
                  <h4 className="mb-0">🧩 How to Generate a 9-Patch Image</h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Learn simple methods to create a <code>.9.png</code> image
                    for Android apps using Android Studio, image editors, or
                    online tools.
                  </p>

                  {/* Method 1 */}
                  <div className="card mb-4 border-start border-3 border-primary">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        1️⃣ Android Studio — Draw 9-Patch Tool (Recommended)
                      </h5>
                      <ul>
                        <li>
                          Open <strong>Android Studio</strong> →{" "}
                          <strong>Tools</strong> → <strong>Draw 9-patch</strong>
                          .
                        </li>
                        <li>
                          Load your PNG, mark stretchable (top/left) and content
                          (bottom/right) areas.
                        </li>
                        <li>
                          Use the preview to test scaling and save as{" "}
                          <code>your_image.9.png</code>.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Method 2 */}
                  <div className="card mb-4 border-start border-3 border-success">
                    <div className="card-body">
                      <h5 className="card-title text-success">
                        2️⃣ Using Image Editors (Photoshop / GIMP)
                      </h5>
                      <ul>
                        <li>
                          Add a 1px transparent border around your PNG image.
                        </li>
                        <li>
                          Draw <strong>pure black lines</strong> on the edges to
                          mark stretch and padding areas.
                        </li>
                        <li>
                          Save as <code>filename.9.png</code> ensuring lines are
                          fully opaque.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Method 3 */}
                  <div className="card mb-4 border-start border-3 border-info">
                    <div className="card-body">
                      <h5 className="card-title text-info">
                        3️⃣ Online 9-Patch Generators
                      </h5>
                      <ul>
                        <li>
                          Upload your image to an online 9-patch generator.
                        </li>
                        <li>
                          Draw guides visually and download the ready{" "}
                          <code>.9.png</code> file.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Usage Tips */}
                  <div className="alert alert-light border">
                    <h6 className="fw-bold">💡 Usage & Tips</h6>
                    <ul className="mb-0">
                      <li>
                        Place the file in <code>res/drawable/</code> or{" "}
                        <code>res/drawable-nodpi/</code>.
                      </li>
                      <li>
                        Use it like any drawable:{" "}
                        <code>@drawable/your_image</code>.
                      </li>
                      <li>
                        Ensure black lines are fully opaque and precisely at the
                        border.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Best Practices */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-success shadow-sm">
                <div className="card-header bg-success text-white">
                  <h4 className="mb-0">✅ Best Practices Summary</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <strong>🎯 Use WebP as your primary format</strong>{" "}
                          for web with proper fallbacks
                        </li>
                        <li className="list-group-item">
                          <strong>🖼️ Reserve PNG for transparency needs</strong>{" "}
                          and simple graphics
                        </li>
                        <li className="list-group-item">
                          <strong>📱 Leverage 9-patch exclusively</strong> for
                          Android UI elements
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <strong>⚡ Implement lazy loading</strong> for better
                          performance
                        </li>
                        <li className="list-group-item">
                          <strong>🔧 Optimize images</strong> during build
                          process
                        </li>
                        <li className="list-group-item">
                          <strong>📊 Monitor Core Web Vitals</strong> impact
                          regularly
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Recommendation */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-primary shadow">
                <div className="card-header bg-primary text-white text-center">
                  <h4 className="mb-0">🎯 Final Recommendation</h4>
                </div>
                <div className="card-body text-center">
                  <p className="lead mb-4">
                    <strong>
                      Don't choose one format—build a smart system!
                    </strong>{" "}
                    Use WebP as your default with proper fallbacks, reserve PNG
                    for transparency needs, and leverage 9-patch for Android UI
                    elements.
                  </p>
                  <div
                    className="alert alert-warning mb-0 mx-auto"
                    style={{ maxWidth: "600px" }}
                  >
                    <strong>🚀 Pro Tip:</strong> Start by auditing your largest
                    images with Chrome DevTools, then gradually implement format
                    conversion in your build process. Your users (and your
                    Google PageSpeed score) will thank you!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFormatComparison;

// import React, { useState } from 'react';

// const ImageFormatComparison = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   const formatData = {
//     png: {
//       name: 'PNG',
//       description: 'The Precision Artist',
//       bestFor: ['Logos with transparency', 'Icons with sharp edges', 'Screenshots with text', 'When maximum compatibility is needed'],
//       strengths: ['Perfect alpha transparency', 'Lossless quality', 'Universal browser support', 'Great for text and sharp lines'],
//       weaknesses: ['Large file sizes', 'Poor for photographs', 'No animation support', 'Inefficient compression'],
//       exampleUse: 'Company logos, UI icons, technical diagrams'
//     },
//     ninePatch: {
//       name: '9-Patch',
//       description: 'The Android Specialist',
//       bestFor: ['Android app buttons', 'Stretchable backgrounds', 'Chat bubbles', 'Progress bars'],
//       strengths: ['Perfect scalability', 'No distortion when stretching', 'Native Android performance', 'Small file sizes for UI'],
//       weaknesses: ['Android only', 'Requires special tools', 'Complex to create', 'Not for content images'],
//       exampleUse: 'Android UI elements, responsive buttons, notification backgrounds'
//     },
//     webp: {
//       name: 'WebP',
//       description: 'The Performance Champion',
//       bestFor: ['Photographs', 'Complex images', 'Website hero images', 'Animated graphics'],
//       strengths: ['25-35% smaller than PNG/JPEG', 'Lossless & lossy compression', 'Animation support', 'Alpha transparency'],
//       weaknesses: ['Limited legacy browser support', 'Requires fallbacks for IE', 'More complex implementation'],
//       exampleUse: 'Product photos, blog images, animated stickers'
//     }
//   };

//   const performanceData = [
//     { format: 'PNG', size: '245 KB', loadTime: '1.8s', quality: '100%' },
//     { format: 'WebP (Lossy)', size: '67 KB', loadTime: '0.5s', quality: '98%' },
//     { format: 'WebP (Lossless)', size: '128 KB', loadTime: '0.9s', quality: '100%' },
//     { format: '9-Patch', size: '3 KB', loadTime: 'Instant', quality: 'N/A' }
//   ];

//   const useCases = [
//     { scenario: 'App Icon/Logo', choice: 'PNG', reason: 'Lossless quality and perfect transparency are key' },
//     { scenario: 'Android Button', choice: '9-Patch', reason: 'Only format designed to stretch correctly for dynamic content' },
//     { scenario: 'Website Hero Image', choice: 'WebP (Lossy)', reason: 'Drastically reduces file size for faster loading' },
//     { scenario: 'Animated Sticker', choice: 'WebP (Animated)', reason: 'Smaller files and smoother transparency than GIF' },
//     { scenario: 'Complex Illustration', choice: 'WebP (Lossless)', reason: 'PNG-quality with much smaller file size' }
//   ];

//   return (
//     <div className="container my-5">
//       {/* Header */}
//       <div className="row mb-5">
//         <div className="col-12">
//           <h1 className="display-4 fw-bold text-primary mb-3">
//             PNG vs. 9-Patch vs. WebP
//           </h1>
//           <p className="lead text-muted">
//             Choosing the perfect image format for web & mobile applications
//           </p>
//           <div className="alert alert-info">
//             <strong>Performance Fact:</strong> 53% of mobile visits are abandoned if pages take longer than 3 seconds to load. Your image choices matter!
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="row mb-4">
//         <div className="col-12">
//           <ul className="nav nav-pills nav-fill">
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('overview')}
//               >
//                 <i className="bi bi-grid me-2"></i>
//                 Quick Overview
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === 'formats' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('formats')}
//               >
//                 <i className="bi bi-images me-2"></i>
//                 Format Details
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === 'performance' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('performance')}
//               >
//                 <i className="bi bi-speedometer2 me-2"></i>
//                 Performance
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === 'implementation' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('implementation')}
//               >
//                 <i className="bi bi-code me-2"></i>
//                 Implementation
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Quick Overview Tab */}
//       {activeTab === 'overview' && (
//         <div className="row">
//           <div className="col-12">
//             <div className="card mb-4">
//               <div className="card-header bg-primary text-white">
//                 <h5 className="mb-0">Quick Decision Guide</h5>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-md-4 mb-3">
//                     <div className="card h-100 border-success">
//                       <div className="card-body">
//                         <h5 className="card-title text-success">🖼️ Use PNG</h5>
//                         <p className="card-text">
//                           For simple graphics, logos, and icons that require transparency. Universal support.
//                         </p>
//                         <small className="text-muted">Best for: Icons, logos with transparency</small>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-4 mb-3">
//                     <div className="card h-100 border-warning">
//                       <div className="card-body">
//                         <h5 className="card-title text-warning">📱 Use 9-Patch</h5>
//                         <p className="card-text">
//                           Exclusively for Android app UI elements that need to stretch without distortion.
//                         </p>
//                         <small className="text-muted">Best for: Android buttons, chat bubbles</small>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-4 mb-3">
//                     <div className="card h-100 border-info">
//                       <div className="card-body">
//                         <h5 className="card-title text-info">⚡ Use WebP</h5>
//                         <p className="card-text">
//                           For almost everything else - photographs and complex images. Superior compression.
//                         </p>
//                         <small className="text-muted">Best for: Photos, hero images, animations</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Use Cases Table */}
//             <div className="card">
//               <div className="card-header">
//                 <h5 className="mb-0">Common Use Cases</h5>
//               </div>
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table className="table table-striped">
//                     <thead>
//                       <tr>
//                         <th>Scenario</th>
//                         <th>Best Choice</th>
//                         <th>Why?</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {useCases.map((useCase, index) => (
//                         <tr key={index}>
//                           <td><strong>{useCase.scenario}</strong></td>
//                           <td>
//                             <span className={`badge ${
//                               useCase.choice.includes('PNG') ? 'bg-success' :
//                               useCase.choice.includes('9-Patch') ? 'bg-warning' : 'bg-info'
//                             }`}>
//                               {useCase.choice}
//                             </span>
//                           </td>
//                           <td>{useCase.reason}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Format Details Tab */}
//       {activeTab === 'formats' && (
//         <div className="row">
//           {Object.entries(formatData).map(([key, format]) => (
//             <div className="col-lg-4 col-md-6 mb-4" key={key}>
//               <div className={`card h-100 ${
//                 key === 'png' ? 'border-success' :
//                 key === 'ninePatch' ? 'border-warning' : 'border-info'
//               }`}>
//                 <div className={`card-header ${
//                   key === 'png' ? 'bg-success text-white' :
//                   key === 'ninePatch' ? 'bg-warning text-dark' : 'bg-info text-white'
//                 }`}>
//                   <h5 className="mb-0">{format.name}</h5>
//                   <small>{format.description}</small>
//                 </div>
//                 <div className="card-body">
//                   <h6>✅ Best For:</h6>
//                   <ul>
//                     {format.bestFor.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>

//                   <h6>💪 Strengths:</h6>
//                   <ul>
//                     {format.strengths.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>

//                   <h6>⚠️ Weaknesses:</h6>
//                   <ul>
//                     {format.weaknesses.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>

//                   <div className="mt-3 p-3 bg-light rounded">
//                     <strong>Example:</strong> {format.exampleUse}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Performance Tab */}
//       {activeTab === 'performance' && (
//         <div className="row">
//           <div className="col-12">
//             <div className="card mb-4">
//               <div className="card-header">
//                 <h5 className="mb-0">Performance Benchmarks</h5>
//               </div>
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table className="table table-hover">
//                     <thead className="table-dark">
//                       <tr>
//                         <th>Format</th>
//                         <th>File Size</th>
//                         <th>Load Time</th>
//                         <th>Quality Score</th>
//                         <th>Efficiency</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {performanceData.map((data, index) => (
//                         <tr key={index}>
//                           <td><strong>{data.format}</strong></td>
//                           <td>
//                             <span className={`badge ${
//                               data.size.includes('KB') ?
//                               (parseInt(data.size) < 100 ? 'bg-success' : 'bg-warning') : 'bg-danger'
//                             }`}>
//                               {data.size}
//                             </span>
//                           </td>
//                           <td>{data.loadTime}</td>
//                           <td>{data.quality}</td>
//                           <td>
//                             {data.format.includes('WebP') && '🏆 Excellent'}
//                             {data.format.includes('9-Patch') && '🚀 Perfect for UI'}
//                             {data.format === 'PNG' && '⚠️ Inefficient'}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="row mt-4">
//                   <div className="col-md-6">
//                     <div className="card bg-light">
//                       <div className="card-body">
//                         <h6>📈 Real Impact Example</h6>
//                         <p className="mb-0">
//                           E-commerce site switching to WebP saw:
//                           <br/>
//                           <strong>42% smaller images</strong> ·
//                           <strong> 1.2s faster loading</strong> ·
//                           <strong> 18% more conversions</strong>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="card bg-light">
//                       <div className="card-body">
//                         <h6>🎯 SEO Impact</h6>
//                         <p className="mb-0">
//                           Faster images improve Google Core Web Vitals:
//                           <br/>
//                           LCP · CLS · Overall Page Experience
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Implementation Tab */}
//       {activeTab === 'implementation' && (
//         <div className="row">
//           <div className="col-12">
//             <div className="card mb-4">
//               <div className="card-header">
//                 <h5 className="mb-0">Code Implementation Examples</h5>
//               </div>
//               <div className="card-body">

//                 {/* HTML Implementation */}
//                 <div className="mb-4">
//                   <h6>🌐 HTML with Fallbacks</h6>
//                   <pre className="bg-dark text-light p-3 rounded">
//                     {`<picture>
//   <source srcset="hero.webp" type="image/webp">
//   <source srcset="hero.jpg" type="image/jpeg">
//   <img src="hero.jpg" alt="Product image" loading="lazy">
// </picture>`}
//                   </pre>
//                 </div>

//                 {/* Android Implementation */}
//                 <div className="mb-4">
//                   <h6>🤖 Android XML</h6>
//                   <pre className="bg-dark text-light p-3 rounded">
//                     {`<!-- 9-Patch for buttons -->
// <Button
//     android:background="@drawable/button_background"
//     android:text="Submit" />

// <!-- WebP for content -->
// <ImageView
//     android:src="@drawable/product_image"
//     android:scaleType="centerCrop" />`}
//                   </pre>
//                 </div>

//                 {/* React Implementation */}
//                 <div className="mb-4">
//                   <h6>⚛️ React Component</h6>
//                   <pre className="bg-dark text-light p-3 rounded">
//                     {`const OptimizedImage = ({ src, alt, webpSrc }) => (
//   <picture>
//     <source srcSet={webpSrc} type="image/webp" />
//     <img
//       src={src}
//       alt={alt}
//       loading="lazy"
//       className="img-fluid"
//     />
//   </picture>
// );`}
//                   </pre>
//                 </div>

//                 {/* Conversion Commands */}
//                 <div>
//                   <h6>🔧 Conversion Commands</h6>
//                   <pre className="bg-dark text-light p-3 rounded">
//                     {`# Convert to WebP
// cwebp -q 80 image.jpg -o image.webp

// # Lossless PNG to WebP
// cwebp -lossless image.png -o image.webp

// # Batch conversion
// for file in *.png; do cwebp "$file" -o "\${file%.*}.webp"; done`}
//                   </pre>
//                 </div>
//               </div>
//             </div>

//             {/* Best Practices */}
//             <div className="card">
//               <div className="card-header bg-success text-white">
//                 <h5 className="mb-0">✅ Best Practices Summary</h5>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <ul>
//                       <li>Use WebP as your primary format for web</li>
//                       <li>Provide PNG/JPEG fallbacks for compatibility</li>
//                       <li>Use 9-patch exclusively for Android UI</li>
//                     </ul>
//                   </div>
//                   <div className="col-md-6">
//                     <ul>
//                       <li>Implement lazy loading for better performance</li>
//                       <li>Optimize images during build process</li>
//                       <li>Monitor Core Web Vitals impact</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Final Recommendation */}
//       <div className="row mt-5">
//         <div className="col-12">
//           <div className="card border-primary">
//             <div className="card-header bg-primary text-white">
//               <h5 className="mb-0">🎯 Final Recommendation</h5>
//             </div>
//             <div className="card-body">
//               <p>
//                 <strong>Don't choose one format—build a smart system!</strong> Use WebP as your default
//                 with proper fallbacks, reserve PNG for transparency needs, and leverage 9-patch for
//                 Android UI elements. This multi-format strategy ensures optimal performance across
//                 all platforms and devices.
//               </p>
//               <div className="alert alert-warning mb-0">
//                 <strong>Pro Tip:</strong> Start by auditing your largest images with Chrome DevTools,
//                 then gradually implement format conversion in your build process.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageFormatComparison;
