import React from "react";
import aiIcon from "../ai.png";
import customerIcon from "../customer.png";
import workflowIcon from "../workflow.png";
import growthIcon from "../growth.png";

import Animation from "./Animation";
import ArrowImg from "../arrow.png";

export default function DexkorFeatureSectionExact({ openPopup }) {
  const handleOpen = () => {
    if (typeof openPopup === "function")
      openPopup();
  };

  return (
    <section className="relative w-full bg-gray-400">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#f7f9ff] to-white opacity-90" />
      <div className="relative mx-auto max-w-6xl px-4 py-6 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="text-left">
            <h2 className="font-dm font-semibold tracking-tight leading-[1.10] text-[32px] lg:text-[40px] mb-6 lg:mb-10">
              <span className="font-dm block bg-gradient-to-r from-[#1f5cff] to-[#A389FF] bg-clip-text text-transparent text-center lg:text-left">
                Replace 6+ Tools
              </span>
              <span className="font-dm block bg-gradient-to-r from-[#1f5cff] to-[#A389FF] bg-clip-text text-transparent text-center lg:text-left">
                With DexKor AI Suite
              </span>
            </h2>

            {/* Pills */}
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-block max-w-[520px] rounded-[6px] bg-[#003399] px-0 lg:px-3 py-2 text-[18px] font-medium text-white shadow-sm leading-snug font-dm text-center lg:text-left">
                Stop churn before it starts 
              </div>
               <div className="w-full text-center lg:text-left">
                <div
                  className="inline-block max-w-[520px] rounded-[6px] bg-[#003399]
               px-3 py-2 text-[18px] font-medium text-white shadow-sm leading-snug font-dm"
                >
                   Accelerate onboarding
                </div>
              </div>
              
              <div className="w-full text-center lg:text-left">
                <div
                  className="inline-block max-w-[520px] rounded-[6px] bg-[#003399]
               px-3 py-2 text-[18px] font-medium text-white shadow-sm leading-snug font-dm"
                >
                  Scale support effortlessly
                </div>
              </div>


            </div>

            {/* CTA + Arrow */}
            <div className="relative mt-7 inline-block align-top">
              <button
                type="button"
                onClick={handleOpen}
                aria-label="Unlock Your All-In-One AI Suite"
                className="group relative isolate overflow-hidden inline-flex items-center justify-center
                           rounded-full px-6 sm:px-12 py-4 sm:py-5
                           text-[14px] sm:text-[18px] font-extrabold text-white tracking-wide
                           bg-gradient-to-r from-[#0039A4] to-[#0039A4]
                           shadow-[0_10px_40px_rgba(0,57,164,0.55)]
                           hover:shadow-[0_22px_70px_rgba(0,57,164,0.55)]
                           transition-transform duration-300 hover:-translate-y-1 ml-8 lg:ml-0"
              >
                <span className="relative z-10 font-dm">Secure Your AI Suite Demo Today</span>

                {/* sweeping shine */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 -left-[50%] w-[50%] h-full
                             bg-white/40 transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]
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

              <img
                src={ArrowImg}
                alt="arrow"
                className="hidden sm:block absolute -right-[140px] md:-right-[160px] lg:-right-[160px] -top-10 md:-top-6
                           w-28 md:w-36 lg:w-[100px] h-auto select-none pointer-events-none"
                draggable={false}
              />
            </div>

            <p className="mt-6 text-[12px] lg:text-sm text-center lg:text-center pl-0 lg:pl-0">
  {new Date().toLocaleString('default', { month: 'long' })} slots close Friday | 500+ CS leaders already booked theirs
</p>


            {/* Progress/animation bar */}
            <div className="mt-6 mr-0 lg:mr-24">
              <Animation />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-start lg:self-start lg:translate-y-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard imgSrc={aiIcon} title="AI-Powered Predictions" />
              <FeatureCard imgSrc={customerIcon} title="360° Customer Intelligence" />
              <FeatureCard imgSrc={workflowIcon} title="Unified Workflow Engine" />
              <FeatureCard imgSrc={growthIcon} title="Proactive Revenue Growth" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ imgSrc, title }) {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-center gap-4 rounded-2xl border border-[#3b4cff] p-8 bg-white">
      <img src={imgSrc} alt={title} className="h-14 w-14 object-contain" />
      <h3 className="text-[16px] sm:text-[17px] font-semibold text-neutral-900 leading-snug text-center lg:text-left">
        {title}
      </h3>
    </div>
  );
}
