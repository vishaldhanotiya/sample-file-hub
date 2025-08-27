import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm=()=> {
  const [state, handleSubmit] = useForm("xdkdjbwz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
<form onSubmit={handleSubmit} className="container" style={{ maxWidth: '500px' }}>
  {/* Email Field */}
  <div className="mb-3">
    <label htmlFor="email" className="form-label text-black">
      Email Address
    </label>
    <input
      id="email"
      type="email"
      name="email"
      className={`form-control text-black ${state.errors?.email ? 'is-invalid' : ''}`}
      placeholder="your@email.com"
    />
    <ValidationError
      prefix="Email"
      field="email"
      errors={state.errors}
      className="invalid-feedback"
    />
  </div>

  {/* Message Field */}
  <div className="mb-3">
    <label htmlFor="message" className="form-label text-black">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={2}
      className={`form-control text-black ${state.errors?.message ? 'is-invalid' : ''}`}
      placeholder="Your message here..."
    />
    <ValidationError
      prefix="Message"
      field="message"
      errors={state.errors}
      className="invalid-feedback text-black"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={state.submitting}
    className="btn btn-primary w-100"
  >
    {state.submitting ? (
      <>
        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
        Sending...
      </>
    ) : (
      "Submit"
    )}
  </button>
</form>
  );
}

export default ContactForm