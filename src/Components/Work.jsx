import React from "react";
import Animation from "./Animation"; // ✅ Update path if needed

export default function DexkorHowItWorks({ openPopup }) {
  const steps = [
    {
      id: "1",
      text: "Connect all your CRM, onboarding, helpdesk, chat, and collaboration tools in minutes - no IT ticket needed.",
    },
    {
      id: "2",
      text: "OrgGPT AI ingests and normalizes all data into a unified dashboard.",
    },
    {
      id: "3",
      text: "AI generates tailored playbooks with next-best-actions for each account.",
    },
    {
      id: "4",
      text: "Automated workflows trigger communications, alerts, and task assignments in real-time.",
    },
    {
      id: "5",
      text: "Built-in ROI dashboards track impact on churn, upsells, and revenue growth.",
    },
  ];

  // ✅ Handle popup or fallback
  const handleClick = (e) => {
    if (typeof openPopup === "function") {
      e.preventDefault();
      openPopup(); // trigger parent popup
    } else {
      console.log("No popup function provided!");
    }
  };

  return (
    <section className="w-full bg-[#003399] py-10 lg:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* ===== Heading ===== */}
        <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[42px] font-bold mb-12 leading-snug">
          How Dexkor Works For Your Team
        </h2>

        {/* ===== Steps ===== */}
        <div className="flex flex-col gap-8 items-center">
          {steps.map((step) => (
            <div key={step.id} className="relative flex items-center w-full max-w-4xl">
              {/* Step Number (Desktop) */}
              <div
                className="absolute -left-6 sm:-left-8 z-10 flex items-center justify-center 
                           w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] 
                           rounded-full bg-[#eceffd] border-[4px] 
                           text-black font-bold text-[22px] sm:text-[24px] shadow-sm
                           hidden xs:flex sm:flex"
              >
                {step.id}
              </div>

              {/* Step Box */}
              <div
                className="flex-1 bg-white rounded-[18px] shadow-md hover:shadow-lg 
                           transition-all duration-300 
                           p-5 sm:p-8 text-left pl-6 sm:pl-24"
              >
                {/* Mobile Step Number */}
                <div className="flex items-center gap-3 sm:hidden mb-2">
                  <div className="flex items-center justify-center w-20 h-10 rounded-full bg-[#eceffd] border border-[#d1d5f0] text-[14px] font-bold">
                    {step.id}
                  </div>
                  <p className="text-[16px] text-neutral-900 font-medium leading-snug">
                    {step.text}
                  </p>
                </div>

                {/* Desktop Text */}
                <p className="hidden sm:block text-[16px] sm:text-[18px] text-neutral-900 font-medium leading-snug">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Button + Text + Animation Section ===== */}
        <div className="relative mt-12 inline-block align-top">
          <a
            href="#"
            onClick={handleClick}
            aria-label="Unlock Your All-In-One AI Suite"
            className="group relative isolate overflow-hidden inline-flex items-center justify-center
                       rounded-full px-6 sm:px-12 py-4 sm:py-5
                       text-[12px] sm:text-[18px] font-extrabold text-black tracking-wide
                       bg-white border border-[#0039A4]
                       shadow-[0_10px_40px_rgba(0,57,164,0.25)]
                       hover:bg-[#0039A4] hover:text-white
                       hover:shadow-[0_22px_70px_rgba(0,57,164,0.55)]
                       transition-all duration-300 ease-in-out hover:-translate-y-1 ml-0 lg:ml-0"
          >
            <span className="relative z-10 font-dm">
              Start Connecting Your Data in 3 Minutes
            </span>

            {/* Sweeping Shine */}
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

        {/* ===== Month Text ===== */}
        <p className="mt-6 text-[12px] lg:text-sm text-center text-white">
          CS leaders report clarity in 48 hours | Priority onboarding slots filling hourly
        </p>

        {/* ===== Animation Bar ===== */}
        <div className="mt-6 flex justify-center">
          <Animation />
        </div>
      </div>
    </section>
  );
}
