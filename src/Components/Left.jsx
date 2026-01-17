import React from "react";
import Animation from "./Animation";
import right from "../main.png";

export const Left = ({ openPopup }) => {
  // ✅ Safe popup handler
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof openPopup === "function") {
      openPopup();
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12 flex flex-col md:flex-row items-center gap-0 lg:gap-10">
      {/* ===== Left Content ===== */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-3 text-center lg:text-left">
          For Customer Onboarding Managers – Onboardhub
        </h2>
        <p className="mb-6 text-center lg:text-left font-poppins text-[16px]">
          Accelerate time-to-value for every new customer.
        </p>

        {/* ✅ Features list */}
        <ul className="space-y-3 mb-6 font-dm">
          {[
            "Guided onboarding journeys & milestone tracking",
            "AI nudges to shorten ramp times and prevent drop-offs",
            "Centralized adoption analytics to flag risks early",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="text-green-600 font-bold text-xl leading-none">✔</span>
              <span className="bg-[#0039A4] text-white px-3 py-1.5 text-[13px] font-bold text-center lg:text-left">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* ✅ CTA Button — opens popup */}
        <button
  type="button"
  onClick={handleClick}
  aria-label="Accelerate Your Onboarding Success"
  className="group relative isolate overflow-hidden 
             inline-flex items-center justify-center
             rounded-full px-6 sm:px-14 py-4 sm:py-5
             text-[11px] sm:text-[18px] font-semibold text-white tracking-wide
             bg-[#0039A4]
             shadow-[0_10px_40px_rgba(0,57,164,0.55)]
             transition-transform duration-300 hover:-translate-y-1 cursor-pointer
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0039A4]
             ml-[22px] sm:mr-0 lg:mx-0"
>
  


          <span className="relative z-10 font-dm">
          Accelerate Onboarding - Cut Ramp Time by Half
          </span>

          {/* sweeping shine */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
                       bg-white/40
                       transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                       [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                       group-hover:left-[120%] group-hover:opacity-0"
          />
          {/* glossy overlay */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-white/10
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-500"
          />
        </button>

        {/* Subtext */}
        <p className="mt-6 text-[12px]  lg:text-sm text-left pl-6 lg:pl-6 text-center lg:text-left">
          50% faster time-to-value | 100+ SaaS teams onboarded this year already.
        </p>

        {/* Progress / Animation */}
        <div className="mt-2 flex justify-center lg:justify-start pl-0 lg:pl-6">
          <Animation />
        </div>
      </div>

      {/* ===== Right Image ===== */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-[540px] rounded-2xl border border-[#0039A4] p-3 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
          <img
            src={right}
            alt="Onboardhub dashboard"
            className="w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
