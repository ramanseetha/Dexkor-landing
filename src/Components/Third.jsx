import React from "react";
import Animation from "./Animation";

export default function DexkorSuiteSection({ openPopup }) {
  const handleOpen = () => {
    if (typeof openPopup === "function") openPopup();
  };

  return (
    <section className="relative w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-2 md:py-2">
        {/* Heading */}
        <h2
          className="text-[30px] sm:text-[32px] md:text-[40px] font-semibold leading-tight
                     tracking-[0.8px]
                     bg-gradient-to-r from-[#0039A4] via-[#5E5BF8] to-[#8A85FF]
                     text-transparent bg-clip-text text-center lg:text-left"
        >
          The Dexkor AI Suite: One Platform For Your Entire
          <br className="hidden sm:block" /> Customer Ecosystem
        </h2>

        {/* Blurb */}
        <p className="mt-4 text-[14px] sm:text-[18px] max-w-6xl font-dm text-center lg:text-left">
          DexKor AI Suite integrates five powerful modules, each built to solve
          critical needs for distinct customer-facing teams.
        </p>

        {/* Cards grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 auto-rows-[1fr]">
          <FeatureCard
            title="OnboardHub"
            subtitle="Customer Onboarding & Training"
            body="Guided journeys, milestones, adoption nudges, time-to-value analytics."
            className="md:col-span-4 h-full"
          />
          <FeatureCard
            title="HelpDesk"
            subtitle="AI-Native Support"
            body="Omnichannel inbox (email, Slack, WhatsApp, social), AI triage, sentiment, SLA guardrails, Auto-QA."
            className="md:col-span-4 h-full"
          />
          <FeatureCard
            title="AccountCare"
            subtitle="Customer Success & Retention"
            body="Live health scores, churn & expansion signals, exec-ready EBR packs, prioritized playbooks."
            className="md:col-span-4 h-full"
          />
          <FeatureCard
            title="SalesHub"
            subtitle="Predictive Revenue Engine"
            body="AI-prioritized pipeline, renewal/expansion intel, forecast confidence you can defend in boardrooms."
            className="md:col-span-4 h-full"
          />
          <FeatureCard
            title="StarBoard"
            subtitle="Recognition & Engagement"
            body="Peer kudos and rewards tied to ARR/CSAT/SLA wins, so the right behaviors compound."
            className="md:col-span-4 h-full"
          />
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          {/* Option A: keep <a> but prevent navigation */}
          <a
             type="button"
            href="#"
            onClick={ handleOpen }
         
            rel="noopener noreferrer"
            aria-label="See DexKor Suite in Action"
            className="group relative isolate overflow-hidden
                       inline-flex items-center justify-center
                       rounded-full px-10 sm:px-20 py-5 sm:py-6
                       text-[14px] sm:text-[20px] font-extrabold text-white tracking-wide
                       bg-[#0039A4]
                       shadow-[0_10px_40px_rgba(0,57,164,0.55)]
                       transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 font-dm">See Your All-In-One DexKor AI Suite</span>

            {/* sweeping shine effect */}
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
          </a>

          {/*
          // Option B (preferable): use a button instead
          <button
            type="button"
            onClick={handleOpen}
            aria-label="See DexKor Suite in Action"
            className="group relative isolate overflow-hidden inline-flex items-center justify-center
                       rounded-full px-14 sm:px-20 py-5 sm:py-6
                       text-[12px] sm:text-[20px] font-extrabold text-white tracking-wide
                       bg-[#0039A4]
                       shadow-[0_10px_40px_rgba(0,57,164,0.55)]
                       transition-transform duration-300 hover:-translate-y-1"
          >
            ...
          </button>
          */}
        </div>
 
        <p className="text-center mt-6 text-[12px] lg:text-sm pb-0">
         Teams report 35% churn cuts in 90 days | Your competitors already switched.
        </p>
      </div>

      <div className="mt-0 flex justify-center">
        <Animation />
      </div>
    </section>
  );
}

/* --- Reusable Card --- */
function FeatureCard({ title, subtitle, body, className = "" }) {
  return (
    <div
      className={[
        "rounded-[14px] border border-blue-500 bg-white p-6 sm:p-7 py-10 lg:py-16",
        "hover:shadow-[0_8px_28px_rgba(20,20,43,0.08)] transition-shadow",
        className,
      ].join(" ")}
    >
      <h3 className="text-[18px] sm:text-[20px] font-bold text-neutral-900 tracking-normal">
        {title}
      </h3>
      <b className="mt-1 block text-[13px] sm:text-[16px] font-medium text-neutral-900">
        {subtitle}
      </b>
      <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-neutral-600">
        {body}
      </p>
    </div>
  );
}
