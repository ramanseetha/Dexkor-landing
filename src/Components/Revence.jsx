// StarboardSection.jsx
import React from "react";
import right from "../Revence.png";
import Animation from "./Animation";

export default function StarboardSection({ openPopup }) {
  const checks = [
    "Peer recognition tied to real impact (ARR, CSAT, SLAs)",
    "Leaderboards & rewards to motivate top performers",
    "Built-in celebration loops that boost retention",
  ];

  const handleClick = (e) => {
    e.preventDefault();
    if (typeof openPopup === "function") openPopup();
    else console.warn("StarboardSection: `openPopup` prop is missing or not a function.");
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-0 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-10 items-center">
        {/* Left: Copy */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2 text-center lg:text-left">
            For People & Culture Teams - Starboard
          </h2>
          <p className="font-poppins text-[14px] sm:text-[16px] mb-6 text-center lg:text-left">
            Celebrate what grows revenue.
          </p>

          {/* Features list */}
          <ul className="space-y-3 mt-6 mb-8">
            {checks.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                {/* Bold SVG green tick */}
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

          {/* CTA (button, opens popup) */}
    <button
  type="button"
  onClick={handleClick}
  aria-label="Explore StarBoard"
  className="group relative isolate overflow-hidden
             flex sm:inline-flex items-center justify-center
             rounded-full px-6 sm:px-14 py-4 sm:py-5
             text-[12px] sm:text-[17px] font-semibold text-white tracking-wide
             bg-[#0039A4]
             shadow-[0_10px_40px_rgba(0,57,164,0.55)]
             transition-transform duration-300 hover:-translate-y-1
             mx-auto sm:mx-0 lg:ml-6
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0039A4]"
>
            <span className="relative z-10 font-dm mobile-center">Build Recognition Loops That Drive Growth</span>

            {/* Sweeping shine effect */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
                         bg-white/40 transition-all duration-[900ms]
                         ease-[cubic-bezier(0.4,0,0.2,1)]
                         [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                         group-hover:left-[120%] group-hover:opacity-0"
            />
            {/* Glossy overlay */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-white/10
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </button>

          {/* Subcopy */}
          <p className="mt-6 text-[12px] lg:text-sm pl-6 lg:pl-8 text-center lg:text-left">
  {`CloudWorks aligned incentives to 40% portfolio growth | ${new Date().toLocaleString("default", { month: "long" })} slots limited.`}
</p>


          {/* Progress / Animation */}
          <div className="mt-3 flex justify-center lg:justify-start pl-0 lg:pl-10">
            <Animation />
          </div>
        </div>

        {/* Right: Framed image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-[540px] rounded-2xl border border-[#0039A4] p-3 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <img
              src={right}
              alt="Starboard dashboard"
              className="w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
