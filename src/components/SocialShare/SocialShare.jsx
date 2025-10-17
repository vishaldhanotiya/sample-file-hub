
const SocialShare = () => {
  const generateShareLinks = () => {
    const currentUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const description = encodeURIComponent(
      document.querySelector('meta[name="description"]')?.content || ""
    );

    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&quote=${title}`,
      twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
    };
  };

  const shareLinks = generateShareLinks();

  // Alternative: Direct share API (for mobile devices)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text:
            document.querySelector('meta[name="description"]')?.content || "",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback for desktop
      window.open(shareLinks.facebook, "_blank");
    }
  };

  return (
    <div className="share-container">
      <span className="text-white">Share on</span>
      <div className="social-icons-circle">
        <a
          href={shareLinks.facebook}
          target="_blank"
          onClick={() =>
            window.open(
              "https://www.facebook.com/people/Sample-Files/61582446029379/",
              "_blank",
              "noopener,noreferrer"
            )
          }
          rel="noopener noreferrer"
          className="social-btn-circle facebook"
          aria-label="Share on Facebook"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>

        <a
          href={shareLinks.twitter}
          target="_blank"
          onClick={() =>
            window.open(
              "https://www.instagram.com/samplefiles.dev",
              "_blank",
              "noopener,noreferrer"
            )
          }
          rel="noopener noreferrer"
          className="social-btn-circle instagram"
          aria-label="Share on Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
            <path d="M12 7.163c-2.619 0-4.737 2.122-4.737 4.737 0 2.615 2.118 4.737 4.737 4.737 2.615 0 4.737-2.122 4.737-4.737 0-2.615-2.122-4.737-4.737-4.737zm0 7.813c-1.696 0-3.076-1.376-3.076-3.076 0-1.7 1.38-3.076 3.076-3.076 1.7 0 3.076 1.376 3.076 3.076 0 1.7-1.376 3.076-3.076 3.076z" />
            <circle cx="17.406" cy="6.594" r="1.12" />
          </svg>
        </a>

       

        {/* Optional: Native share button for mobile devices */}
        <button
          onClick={handleNativeShare}
          className="social-btn-circle share"
          aria-label="Share using native share dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
