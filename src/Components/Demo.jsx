import React from 'react';
import Animation from './Animation';
import right from '../right.png';

export const Demo = ({ openPopup }) => {
  const handleClick = (e) => {
    if (typeof openPopup === 'function') {
      e.preventDefault();       // stop link nav if we have a popup
      openPopup();
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12 flex flex-col md:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6 text-center lg:text-left">
          For Customer Success Leaders – Account Care
        </h2>
        <p className="font-poppins font-medium mb-6 text-xl text-center lg:text-left">
          Stop churn before it starts with 360° intelligence.
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-6 font-dm">
          <li className="flex items-center gap-3">
            <span className="text-green-600 font-bold text-xl">✔</span>
            <span className="bg-[#003399] text-white px-2 py-1 text-center lg:text-left">
              Unified customer health scores & predictive churn alerts
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-600 font-bold text-xl">✔</span>
            <span className="bg-[#003399] text-white px-2 py-1 text-center lg:text-left">
              Dexy Copilot generates prioritized playbooks
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-600 font-bold text-xl">✔</span>
            <span className="bg-[#003399] text-white px-2 py-1 text-center lg:text-left">
              Upsell & expansion insights to grow ARR
            </span>
          </li>
        </ul>

        {/* CTA Button (opens popup if provided; otherwise opens Calendly in new tab) */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label="Claim Your Account Care Demo"
          className="group relative isolate overflow-hidden grid
                     lg:inline-flex items-center justify-center
                     rounded-full px-6 sm:px-14 py-4 sm:py-5
                     text-[14px] sm:text-[18px] font-semibold text-white tracking-wide
                     bg-[#0039A4]
                     shadow-[0_10px_40px_rgba(0,57,164,0.55)]
                     transition-transform duration-300 hover:-translate-y-1"
        >
          <span className="relative z-10 font-dm">Get Your Churn Prediction Report Free</span>

          {/* Sweeping shine */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
                       bg-white/40
                       transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                       [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                       group-hover:left-[120%] group-hover:opacity-0"
          />
          {/* Glossy overlay */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-white/10
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-500"
          />
        </a>

        {/* Small text */}
        <p className="mt-4 text-[12px] lg:text-sm pl-0 lg:pl-0 text-center lg:text-left">
         See which accounts DexKor flagged as at-risk today before competitors do.
        </p>

        {/* Animation / Progress */}
        <div className="mt-2 flex justify-center lg:justify-start">
          <Animation />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <img
          src={right}
          alt="Account Care Dashboard"
          className="w-full rounded-lg border border-[#0039A4]"
          loading="lazy"
        />
      </div>
    </section>
  );
};
