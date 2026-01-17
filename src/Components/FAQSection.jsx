import React, { useState } from "react";
import Animation from "./Animation"; // ✅ Animation Component

export default function FAQSection({ openPopup }) {
  const faqs = [
    {
      question: "Do you provide actionable next steps based on real-time data?",
      answer:
        "Yes, OrgGPT AI delivers prioritized playbooks tailor-made to each customer’s status and growth signals.",
    },
    {
      question: "Can DexKor automate workflows without coding?",
      answer:
        "Absolutely. DexKor allows non-technical teams to automate their customer success workflows easily with drag-and-drop simplicity.",
    },
    {
      question: "Which platforms does DexKor integrate with?",
      answer:
        "DexKor integrates seamlessly with CRMs, helpdesks, analytics tools, and major communication platforms like Slack and Teams.",
    },
    {
      question: "Is client data security a priority?",
      answer:
        "Yes. DexKor follows enterprise-grade encryption standards and complies with GDPR, SOC 2, and ISO 27001 frameworks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  // ✅ Handles popup or fallback link
  const handleClick = (e) => {
    if (typeof openPopup === "function") {
      e.preventDefault();
      openPopup();
    }
  };

  return (
    <section className="w-full bg-white py-6 lg:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ====== Section Heading ====== */}
        <h2 className="text-center text-2xl sm:text-4xl font-extrabold text-[#0039A4] mb-10 font-dm">
          Frequently Asked Questions
        </h2>

        {/* ====== FAQ List ====== */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl shadow-sm transition-all duration-300 ${
                openIndex === i
                  ? "border-[#0039A4] bg-[#f7f9ff]"
                  : "border-neutral-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left px-6 py-5 transition-colors duration-300"
              >
                <span
                  className={`font-semibold text-[16px] sm:text-[18px] transition-colors duration-300 ${
                    openIndex === i ? "text-[#0039A4]" : "text-neutral-900"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Chevron Icon */}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-[#0039A4]" : "rotate-0 text-neutral-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer Section */}
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm sm:text-[15px] text-neutral-700 leading-relaxed font-dm transition-opacity duration-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ====== CTA Button + Text + Animation ====== */}
        <div className="text-center mt-12">
          {/* CTA Button */}
          <div className="relative inline-block align-top">
            <a
              href="#"
              onClick={handleClick}
              aria-label="Unlock Your Unified Success Dashboard"
              className="group relative isolate overflow-hidden inline-flex items-center justify-center
                         rounded-full px-8 sm:px-12 py-4 sm:py-5
                         text-[14px] sm:text-[18px] font-extrabold text-white tracking-wide
                         bg-gradient-to-r from-[#0039A4] to-[#0039A4]
                         shadow-[0_10px_40px_rgba(0,57,164,0.55)]
                         hover:shadow-[0_22px_70px_rgba(0,57,164,0.55)]
                         transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10 font-dm">
                Unlock Your Unified Success Dashboard
              </span>

              {/* Shine Animation */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
                           bg-white/40 transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                           [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                           group-hover:left-[120%] group-hover:opacity-0"
              />
              {/* Glossy Overlay */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/10
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </a>
          </div>

          {/* Dynamic Text */}
          <p className="mt-6 text-[12px] lg:text-sm text-center text-neutral-700">
            {currentMonth} slots close Friday | 500+ CS leaders already booked theirs
          </p>

          {/* Animation Bar */}
          <div className="mt-6 flex justify-center">
            <Animation />
          </div>
        </div>
      </div>
    </section>
  );
}
