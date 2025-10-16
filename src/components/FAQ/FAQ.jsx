import { faqs } from "../../utils/Constant";
import { useState } from "react";

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div>
      <section id={"faq"} className="py-5 bg-muted-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="display-6 fw-bold mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-body-secondary fw-normal fs-4">
                  Everything you need to know about our sample files
                </p>
              </div>

              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="accordion-item border-custom mb-3 rounded p-2"
                  >
                    <p className="accordion-header">
                      <button
                        className="accordion-button p-2 collapsed bg-card-custom"
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={expandedFaq === index}
                      >
                        <span className="text-black fw-medium">
                          {faq.question}
                        </span>
                      </button>
                    </p>
                    {expandedFaq === index && (
                      <div className="accordion-collapse show">
                        <div className="accordion-body">
                          <p className="text-body-secondary fw-medium mb-0">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
