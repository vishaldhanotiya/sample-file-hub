import { useState, useRef } from "react";
import "./FAQAccordion.css"; // optional CSS file for styling

const faqs = [
  {
    question: "Do I need to create an account or sign up?",
    answer:
      "No account or signup is required. Simply browse the categories and download the files you need instantly.",
  },
  {
    question: "Can I request new file types or specific sample files?",
    answer:
      "Absolutely! Use our Contact page to suggest new files or formats, and we’ll try to add them.",
  },
  {
    question: "Is there a limit on how many files I can download?",
    answer: "No limits! Download as many files as you need, whenever you want.",
  },
  {
    question: "Are the files safe to download?",
    answer:
      "Yes. All files are scanned and safe for download. We ensure they are free from viruses or malware.",
  },
  {
    question: "How often are new files added?",
    answer:
      "We regularly update our library with new images, videos, audios, and documents to keep our collection fresh and useful.",
  },
];
const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section py-5">
      <div>
        <h3 className="text-center mb-5 fw-bold">Frequently Asked Questions</h3>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div
              className={`accordion-item mb-3 rounded-3 shadow-sm ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className={`accordion-header d-flex justify-content-between align-items-center ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`accordion-icon ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="accordion-content"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
