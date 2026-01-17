// TransformationCallSection.jsx
import React from "react";
import quoteImg from "../Layer-0.png"; // blue quote (top left)
import arrowImg from "../Group-0.png";
import Animation from "./Animation";

export default function TransformationCallSection({ openPopup }) {
  // ✅ Safe click handler
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof openPopup === "function") {
      openPopup();
    } else {
      console.warn("TransformationCallSection: `openPopup` not provided.");
    }
  };

  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-8 relative pb-0">
        {/* Top Left Quote Image */}
        <img
          src={quoteImg}
          alt="Quote mark"
          className="absolute top-2 lg:top-0 left-4 sm:left-6 w-12 sm:w-20"
        />

        {/* Main Text Content */}
        <div className="text-center relative">
          <p className="text-left text-[18px] sm:text-[24px] text-neutral-800 max-w-2xl mx-auto leading-relaxed font-medium">
            DexKor’s AI framework stopped our churn blind spots and empowered our
            support with smart automation. The unified platform gave us control
            and confidence.
          </p>

          <p className="text-left mt-5 lg:mt-12 text-sm sm:text-xl font-medium text-neutral-700 max-w-2xl mx-auto font-dm">
            Avery Chen, Head of Customer Success, ScaleUp Labs
          </p>

          {/* Arrow Image — shifted to right side */}
          <div className="mt-8 flex justify-center relative">
            <img
              src={arrowImg}
              alt="Curved blue arrow"
              className="absolute right-[32%] sm:right-[37%] lg:right-[22%] top-[-30px] lg:top-[-80px] w-10 sm:w-10 h-auto rotate-[6deg]"
            />
          </div>

          {/* ✅ CTA Button (opens popup, no link) */}
          <div className="mt-[6rem] lg:mt-12">
            <button
              type="button"
              onClick={handleClick}
              aria-label="Reserve Your Transformation Call"
              className="group relative isolate overflow-hidden
                         inline-flex items-center justify-center
                         rounded-full px-6 sm:px-14 py-4 sm:py-5
                         text-[12px] sm:text-[20px] font-semibold text-white tracking-wide
                         bg-[#0039A4]
                         shadow-[0_10px_40px_rgba(0,57,164,0.55)]
                         transition-transform duration-300 hover:-translate-y-1
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0039A4]"
            >
              <span className="relative z-10 font-dm">
            Reserve Your Transformation Call This Week
              </span>

              {/* Shine effect */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 -left-[50%] w-[55%] h-full
                           bg-white/40
                           transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                           [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                           group-hover:left-[120%] group-hover:opacity-0"
              />

              {/* Gloss overlay */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/10
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </button>

            {/* Subcopy */}
            <p className="mt-3 lg:mt-6 text-sm sm:text-sm">
  {`Only 3 strategist calls left | Next availability ${new Date().toLocaleString("default", { month: "long" })} 18th.`}
</p>


            {/* Progress Bar / Animation */}
            <div className="mt-2 flex justify-center">
              <Animation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
