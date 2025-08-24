export default function AboutUs() {
  return (
    <div className="bg-gradient bg-white">
      <div className="container my-5 py-4">
        <h3 className="text-center mb-5 fw-bold py-4">Why Choose Us?</h3>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div
              className="p-4 h-100 d-flex flex-column align-items-start"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eaeaea",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#0d6efd",
                  color: "#fff",
                  borderRadius: "12px",
                  width: "54px",
                  height: "54px",
                }}
              >
                {/* Download Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9v4.6a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V9.9a.5.5 0 0 0-1 0v4.1H1V9.9a.5.5 0 0 0-.5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </div>
              <h2 className="fw-bold fs-5">Download in Seconds</h2>
              <p className={"text-muted fs-6"}>
                Grab any test file instantly — no account, no delays, no fuss.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div
              className="p-4 h-100 d-flex flex-column align-items-start"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eaeaea",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#20c997",
                  color: "#fff",
                  borderRadius: "12px",
                  width: "48px",
                  height: "48px",
                }}
              >
                {/* Folder Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.828 4a3 3 0 0 0-2.121-.879H2.5A1.5 1.5 0 0 0 1 4.621v6.758A1.5 1.5 0 0 0 2.5 12.9h11a1.5 1.5 0 0 0 1.5-1.5V5.621A1.5 1.5 0 0 0 13.5 4.12H9.828z" />
                </svg>
              </div>
              <h2 className="fw-bold fs-5">All Formats Covered</h2>
              <p className={"text-muted fs-6"}>
                From PNG to MP4 to DOCX — <strong>20+ file types</strong> ready
                to download.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div
              className="p-4 h-100 d-flex flex-column align-items-start"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #eaeaea",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#fd7e14",
                  color: "#fff",
                  borderRadius: "12px",
                  width: "48px",
                  height: "48px",
                }}
              >
                {/* Gift Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 1a2 2 0 1 1 4 0v2H3V1zm6 0a2 2 0 1 1 4 0v2h-4V1zM2 5v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H2zm5 9V5h2v9H7z" />
                </svg>
              </div>
              <h2 className="fw-bold fs-5">Always Free</h2>
              <p className={"fs-6 text-muted"}>
                Test files shouldn’t cost money — and they never will here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
