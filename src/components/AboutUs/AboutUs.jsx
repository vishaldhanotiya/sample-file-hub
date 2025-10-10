import React from "react";

const AboutUs = () => {
  return (
        <div className="container">
      <div className="bg-white rounded-4 shadow-lg p-5 border-0 mt-5 mb-5 overflow-hidden">
      <section className="text-center mb-5 ">
        <h1 className="fw-bold mb-3">About Us</h1>
        <p className="text-muted fs-5">
          Welcome to <strong>SampleFiles.dev</strong> — a free and reliable
          resource built for developers, testers, designers, and educators who
          need ready-to-use sample files for software testing and demo purposes.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="fw-semibold mb-3">Who We Are</h2>
        <p>
          We created <strong>SampleFiles.dev</strong> to make your work faster,
          easier, and safer. Whether you’re building a file upload feature,
          testing APIs, designing UI layouts, or demonstrating a product, our
          sample files save you time and effort — no need to create dummy
          content manually.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="fw-semibold mb-3">Our Mission</h2>
        <blockquote className="blockquote border-start border-4 ps-3">
          <p className="mb-0">
            To provide high-quality, virus-free, and easily accessible sample
            files that empower developers and testers to build better products.
          </p>
        </blockquote>
        <p className="mt-3">
          We believe testing should be effortless and secure. That’s why every
          file hosted on our platform is verified, properly formatted, and
          categorized by type and size for your convenience.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="fw-semibold mb-3">What We Offer</h2>
        <ul className="list-unstyled">
          <li>🖼️ <strong>Sample Images</strong> – JPG, PNG, SVG, GIF, WEBP, TIFF, and more.</li>
          <li>🎵 <strong>Sample Audio Files</strong> – MP3, WAV, OGG, M4A for media player testing.</li>
          <li>🎬 <strong>Sample Video Files</strong> – MP4, MOV, WEBM, AVI in different resolutions.</li>
          <li>📄 <strong>Sample Documents</strong> – PDF, DOCX, XLSX, CSV, TXT for upload & export testing.</li>
          <li>🗂️ <strong>Sample Archives</strong> – ZIP, RAR, TAR, and other compressed formats.</li>
        </ul>
        <p>
          Each file is <strong>safe for educational and development use</strong>,
          hosted on reliable servers, and easy to download without any login or subscription.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="fw-semibold mb-3">Why Developers Choose Us</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✅ 100% Free & No Signup Required</li>
          <li className="list-group-item">✅ Clean and Fast User Experience</li>
          <li className="list-group-item">✅ Safe, Tested, and Lightweight Files</li>
          <li className="list-group-item">✅ Regularly Updated Content</li>
          <li className="list-group-item">✅ Developer-Friendly Interface</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="fw-semibold mb-3">Our Vision</h2>
        <p>
          We aim to become the <strong>most trusted open resource for sample files worldwide</strong>,
          supporting developers across web, mobile, and data-driven platforms. Our long-term goal
          is to expand into <strong>API-based file generation</strong>, allowing developers to fetch
          test files directly into their projects.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="fw-semibold mb-3">Transparency & File Safety</h2>
        <ul>
          <li>Free from personal, copyrighted, or sensitive content.</li>
          <li>Virus-free and safe to use in test or demo environments.</li>
          <li>Compliant with fair-use and educational purposes.</li>
        </ul>
        <p>
          If you ever find a broken link or unsafe file, please report it — we’ll fix it immediately.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="fw-semibold mb-3">Contact Us</h2>
        <p>
          Have feedback, partnership ideas, or need a custom sample file format? We’d love to hear from you!
        </p>
        <p className="fw-bold">📧 samplefiles.dev@gmail.com</p>
      </section>

      <section className="text-center border-top pt-4">
        <p className="text-muted">
          SampleFiles.dev is built for the community — by developers, for developers.
          Your feedback helps us grow and keep the platform useful for everyone.
        </p>
        <p>
          If you find our site helpful, consider sharing it with your peers or linking to it
          in your tutorials and documentation.
        </p>
      </section>
      </div>
    </div>
  );
};

export default AboutUs;
