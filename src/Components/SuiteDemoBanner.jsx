// SuiteDemoBanner.jsx
import React from "react";

export default function SuiteDemoBanner({ openPopup }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof openPopup === "function") openPopup();
    else console.warn("SuiteDemoBanner: `openPopup` prop is missing or not a function.");
  };

  // Get current month name dynamically
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <section className="w-full bg-white py-6 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="relative overflow-hidden rounded-2xl
                     bg-[#0039A4] text-white
                     px-6 sm:px-10 py-12 sm:py-14
                     shadow-[0_24px_64px_rgba(11,80,201,0.35)]
                     ring-1 ring-white/10"
        >
          {/* Headline */}
          <h2
            className="text-center font-extrabold leading-tight tracking-[1px]
                       text-[28px] sm:text-[34px]"
          >
            Experience the AI-Native Command Center for
            <br className="hidden sm:block" />
            Your Entire Customer Lifecycle
          </h2>

          {/* Subcopy */}
          <p
            className="mt-3 text-center text-[14px] sm:text-[15px] text-white/90 max-w-3xl mx-auto font-dm"
          >
            Unify data, automate workflows, and predict churn and expansion across your
            customer lifecycle — all in one AI-powered platform designed for customer
            success, support, and onboarding leaders.
          </p>

          {/* Mid Line with Gradient Text */}
          <h3
            className="mt-6 text-center text-[18px] sm:text-[30px] font-extrabold font-dm tracking-[0.5px]"
          >
            Book Your Personalized{" "}
            <span
              className="bg-clip-text text-transparent font-dm tracking-[0.5px] text-[18px] sm:text-[30px]"
              style={{
                backgroundImage:
                  "linear-gradient(91.75deg, #FFFFFF -0.51%, #A389FF 94.94%)",
              }}
            >
              DexKor Suite Demo
            </span>
          </h3>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={handleClick}
              aria-label="Claim Your Spot and Start Winning"
              className="inline-flex items-center justify-center
                         rounded-full px-6 sm:px-8 py-3
                         text-[14px] sm:text-[20px] font-semibold
                         bg-white text-[#0B2F73]
                         shadow-[0_10px_30px_rgba(0,0,0,0.20)]
                         hover:shadow-[0_14px_44px_rgba(0,0,0,0.28)]
                         transition-transform duration-200 hover:-translate-y-0.5 font-dm
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/60"
            >
              Start Your 14-Day Free Trial Today
            </button>
          </div>

          {/* Disclaimer */}
          <p
            className="mt-3 text-center text-[12px] sm:text-sm text-white/75 font-dm"
          > Last 3 {currentMonth}  calls available | Industry leaders from your segment go first.
            
          </p>
        </div>
      </div>
    </section>
  );
}
