import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xdkdjbwz");

  if (state.succeeded) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light px-3">
        <div className="p-5 rounded-4 shadow-sm bg-white" style={{ maxWidth: "450px" }}>
          <h2 className="fw-bold text-success mb-3">🎉 Thank You!</h2>
          <p className="text-muted mb-4">
            Your message has been successfully sent. We'll get back to you soon.
          </p>
          <a href="/" className="btn btn-success px-4">Go Home</a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%)",
      }}
    >
      <div
        className="p-4 p-md-5 bg-white rounded-4 shadow-lg w-100"
        style={{ maxWidth: "480px" }}
      >
        <h2 className="text-center mb-3 fw-bold text-primary">
          Contact <span className="text-dark">Us</span>
        </h2>
        <p className="text-center text-muted mb-4">
          Have a question or feedback? We’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold text-secondary">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={`form-control border-2 ${
                state.errors?.email ? "is-invalid" : ""
              }`}
              placeholder="you@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="invalid-feedback"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="form-label fw-semibold text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className={`form-control border-2 ${
                state.errors?.message ? "is-invalid" : ""
              }`}
              placeholder="Write your message..."
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="invalid-feedback"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="btn btn-primary w-100 py-2 fw-semibold"
            style={{ letterSpacing: "0.5px" }}
          >
            {state.submitting ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      <footer className="mt-4 text-muted small">
        © {new Date().getFullYear()} SampleFiles.dev. All rights reserved.
      </footer>
    </div>
  );
};

export default ContactUs;
