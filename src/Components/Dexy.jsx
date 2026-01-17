// DexyCopilotSection.jsx
import React from "react";
import Animation from "./Animation";
import tickIcon from "../tick.png";

export default function Dexy({ openPopup }) {
  const points = [
    "Monitors engagement, sentiment, adoption, risk & revenue in real time",
    "Generates next-best actions exactly where you work (ticket view, account view, onboarding step, opportunity)",
    "Automates follow-through with workflows, alerts, and tasking",
    "Auto-builds client/board-ready summaries that tell a defensible ROI story",
  ];

  // ✅ Safe click handler for popup
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof openPopup === "function") {
      openPopup();
    } else {
      console.warn("Dexy Section: `openPopup` function not passed.");
    }
  };

  return (
    <section className="w-full bg-[#f7f7fb]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 lg:py-14 text-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-extrabold
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-[#0036C4] to-[#8B7BFF]
                     font-poppins"
        >
          Dexy: Your AI Copilot Across The Suite
        </h2>

        {/* Subcopy */}
        <p className="mt-4 text-[15px] sm:text-[18px] max-w-4xl mx-auto font-dm">
          Dexy, our OrgGPT AI copilot, continuously ingests data from all your platforms
          like CRM, helpdesk, chat, social - and transforms it into actionable intelligence
          you can trust.
        </p>

        {/* Checklist card */}
        <div className="mt-8 text-left">
          <div className="rounded-2xl border border-[#0039A4] bg-white p-5 sm:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
            <ul className="space-y-4">
              {points.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* ✅ Tick Image */}
                  <img
                    src={tickIcon}
                    alt="tick"
                    className="w-5 h-5 mt-[3px] object-contain"
                  />

                  {/* ✅ Text */}
                  <span className="text-[15px] sm:text-[16px] text-neutral-800 font-dm">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ CTA (opens popup) */}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleClick}
            aria-label="Watch Dexy Explain It All"
            className="group relative isolate overflow-hidden
                       inline-flex items-center justify-center
                       rounded-full px-6 sm:px-12 py-4 sm:py-5
                       text-[12px] sm:text-[20px] font-extrabold text-white tracking-wide
                       bg-[#0039A4]
                       shadow-[0_10px_40px_rgba(0,57,164,0.55)]
                       transition-transform duration-300 hover:-translate-y-1
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0039A4]"
          >
            <span className="relative z-10 font-dm">Meet Your AI Copilot - Monitors 10,000 Signals</span>

            {/* sweeping shine */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 -left-[50%] w-[55%] h-full
                         bg-white/40
                         transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                         [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                         group-hover:left-[120%] group-hover:opacity-0"
            />
            {/* glossy overlay */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-white/10
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </button>

          {/* small caption */}
          <p className="text-center mt-6 text-[1rem] lg:text-sm pb-0">
  {`95% prediction accuracy | Teams ahead of you activated ${new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString("default", { month: "long" })}.`}
</p>


          {/* Animation */}
          <div className="mt-2 flex justify-center">
            <Animation />
          </div>
        </div>
      </div>
    </section>
  );
}
