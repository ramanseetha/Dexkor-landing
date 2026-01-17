// HelpdeskSection.jsx
import React from "react";
import left from "../left.png";
import HelpdeskAnimation from "./Animation";

export default function HelpdeskSection({
  AnimationComponent = HelpdeskAnimation,
  openPopup, // ✅ add this as prop
}) {
  const checks = [
    "One inbox for WhatsApp, Slack, social & email",
    "AI Agent Assist for instant replies & auto-categorization",
    "SLA guardrails and Auto-QA for consistent quality",
  ];

  // ✅ Handle CTA click
  const handleClick = (e) => {
    if (typeof openPopup === "function") {
      e.preventDefault(); // stop link redirect
      openPopup(); // open popup
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-2 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-10 items-center">
          {/* ===== Right: Text Content (first on mobile) ===== */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h3 className="text-[26px] sm:text-[30px] font-semibold text-neutral-900 text-center lg:text-left">
              For Customer Support Teams - Helpdesk
            </h3>
            <p className="mt-2 text-[14px] sm:text-[20px] font-poppins text-center lg:text-left">
              Turn ticket chaos into seamless service.
            </p>

            {/* ✅ Checklist with SVG ticks */}
            <ul className="space-y-3 mb-6 mt-6">
              {checks.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {/* SVG Green Tick Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 md:h-6 md:w-6 text-green-500 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>

                  <span className="bg-[#003399] text-white px-3 py-1.5 text-[13px] font-semibold shadow-[0_4px_14px_rgba(0,57,164,0.25)] text-center lg:text-left">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-0">
              <a
                href="https://calendly.com/richard-dexkor/dexkor-demo-call-with-founder"
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Boost Your Support Efficiency Now"
                className="group relative isolate overflow-hidden 
                           grid lg:inline-flex items-center justify-center
                           rounded-full px-6 sm:px-10 py-4 sm:py-5
                           text-[14px] sm:text-[20px] font-extrabold text-white tracking-wide
                           bg-[#0039A4]
                           shadow-[0_10px_40px_rgba(0,57,164,0.55)]
                           transition-transform duration-300 hover:-translate-y-1
                           mx-auto md:mx-0"
              >
                <span className="relative z-10 font-dm">
            Transform Your Support Team in 7 Days
                </span>

                {/* sweeping shine effect */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
                             bg-white/40
                             transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                             [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                             group-hover:left-[120%] group-hover:opacity-0"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-white/10
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                />
              </a>

              {/* Subtext */}
              <p className="mt-6 text-[12px] lg:text-sm  pl-6 lg:pl-0 text-center lg:text-left">
  {`200+ support leaders eliminated chaos this quarter. ${new Date().toLocaleString("default", { month: "long" })} access ends Friday.`}
</p>


              {/* Animation */}
              {typeof AnimationComponent === "function" && (
                <div className="mt-3 flex justify-center lg:justify-start">
                  <AnimationComponent />
                </div>
              )}
            </div>
          </div>

          {/* ===== Left: Screenshot Card ===== */}
          <div className="order-2 md:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-[520px] rounded-2xl border border-[#0039A4] bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <img
                src={left}
                alt="Helpdesk inbox preview"
                className="w-full rounded-xl object-cover"
              />
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
