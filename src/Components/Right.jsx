// SaleshubSection.jsx
import React from "react";
import left from "../images-65.png"; // replace with your Saleshub shot if different
import HelpdeskAnimation from "./Animation";

export default function SaleshubSection({
  AnimationComponent = HelpdeskAnimation,
  openPopup, // ✅ Added popup handler prop
}) {
  const checks = [
    "AI-driven pipeline forecasting with clear signals",
    "Opportunity scoring for renewals & expansions",
    "Cadence automation to close deals faster",
  ];

  // ✅ Safe click handler
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof openPopup === "function") {
      e.preventDefault(); // stop link redirect
      openPopup();
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-10 items-center">
          {/* ===== Copy: shows FIRST on mobile, SECOND on md+ ===== */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h3 className="text-[22px] sm:text-[30px] font-semibold text-neutral-900 text-center md:text-left">
              For Revenue Teams - <span className="font-bold">Saleshub</span>
            </h3>
            <p className="mt-2 text-[14px] sm:text-[16px] font-poppins text-center md:text-left">
              Forecast with confidence, not guesswork.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-6 mt-6">
              {checks.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {/* Bold SVG tick (green) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 md:h-5 md:w-5 text-green-500 shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>

                  <span className="font-dm bg-[#0039A4] text-white px-3 py-1.5 text-[13px] font-semibold shadow-[0_4px_14px_rgba(0,57,164,0.25)] text-center lg:text-left">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* ✅ CTA Button — Opens popup */}
            <div className="mt-0">
              <button
  type="button"
  onClick={handleClick}
  aria-label="Explore Sales Hub"
  className="group relative isolate overflow-hidden  
             inline-flex items-center justify-center
             rounded-full px-6 sm:px-10 py-4 sm:py-5
             text-[12px] sm:text-[16px] font-extrabold text-white tracking-wide
             bg-[#0039A4]
             shadow-[0_18px_40px_rgba(0,31,109,0.45)]
             transition-transform duration-300 hover:-translate-y-1
             mx-auto md:ml-[30px] 
  }
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0039A4] mobile-center"
>
                <span className="relative z-10 font-dm ">Find Hidden Expansion Revenue in Pipeline</span>

                {/* Shine effect */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
                             bg-white/40
                             transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                             [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                             group-hover:left-[120%] group-hover:opacity-0"
                />

                {/* Gloss overlay */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-white/10
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                />
              </button>

              {/* Subtext */}
              <p className="mt-6 text-[12px] lg:text-sm text-gray-600 text-center md:text-left md:pl-6 lg:pl-8">
  {`Don't miss the $250K in your portfolio – ${new Date().toLocaleString("default", { month: "long" })} priority access closing.`}
</p>


              {/* Animation (if component passed) */}
              {typeof AnimationComponent === "function" && (
                <div className="mt-3 flex justify-center md:justify-start pl-0  lg:pl-10">
                  <AnimationComponent />
                </div>
              )}
            </div>
          </div>

          {/* ===== Image: shows SECOND on mobile, FIRST on md+ ===== */}
          <div className="order-2 md:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-[520px] rounded-2xl border border-[#0039A4] bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <img
                src={left}
                alt="Saleshub dashboard preview"
                className="w-full rounded-xl object-cover"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
