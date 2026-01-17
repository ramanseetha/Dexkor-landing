import React from "react";

// TODO: update these imports to your real files
import dexkorLogo from "../logo.png";
import heroBg from "../bg-image.png";
import dashboardImg from "../dashboard.png";

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Dexkor background"
          className="h-full w-full object-cover"
        />
        {/* Light overlay to match screenshot feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pt-6 pb-0 sm:pt-8 sm:pb-0">
        {/* Top Row: Logo left + Attention Bar centered */}
        <div className="relative flex items-center justify-center w-full mt-2 pl-0 sm:pl-20">

  {/* Logo Left — hidden on mobile */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block">
    <img
      src={dexkorLogo}
      alt="Dexkor logo"
      className="h-7 w-auto sm:h-8"
    />
  </div>

  {/* Centered Attention Bar */}
  <div className="inline-flex items-center gap-3 lg:gap-0 rounded-full bg-slate-900 px-2 lg:px-4 py-2 text-[10px] sm:text-xs text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)]">

    {/* Red pulsing warning dot */}
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-70"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(248,113,113,0.45)]"></span>
    </span>

    <span className="font-medium text-[9px] lg:text-[14px] sm:text-[15px] tracking-tight px-0 lg:px-4 py-2 text-center">
      ATTENTION: Customer Success, Support, Sales, and Onboarding Leaders: Are Fragmented Data and Manual Processes Holding You Back?
    </span>
  </div>
</div>



        {/* Main content */}
        <div className="mt-2 flex flex-col items-center text-center">
          <h1 className="mx-auto mt-0 lg:mt-6 max-w-full font-semibold leading-tight tracking-tight text-[28px] sm:text-[48px] md:text-[58px] lg:text-[66px] text-neutral-900">
            Smash Revenue Plateaus! Unlock The Only
            <span className="bg-gradient-to-r from-[#1f5cff] to-[#7b5cff] bg-clip-text text-transparent">
              All-In-One Ai Suite
            </span>{" "}
            That Predicts, Automates, And Wins Across Your Customer Lifecycle!
          </h1>

          <p className="mt-4 lg:mt-6 max-w-5xl text-[13px] sm:text-xl text-slate-800">
            Stop stitching together 6+ tools. Dexkor gives your Success, Support,
            Sales and Onboarding teams one intelligent system that predicts
            behavior before problems arise.
          </p>
        </div>

        {/* Dashboard image card */}
        <div className="mt-8 lg:mt-4 flex justify-center">
          <div className="w-full max-w-5xl rounded-[32px] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] overflow-hidden border border-slate-100">
            <img
              src={dashboardImg}
              alt="Dexkor dashboard"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
