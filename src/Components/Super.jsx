// UnifiedVsSprawl.jsx
import React from "react";
import Animation from "./Animation.jsx";

const rows = [
  ["Support automation & SLA guardrails", "partial", "check"],
  ["Churn prediction & health scoring", "partial", "check"],
  ["Onboarding journeys & adoption", "partial", "check"],
  ["Forecast accuracy (explainable)", "partial", "check"],
  ["Recognition tied to impact", "x", "check"],
  ["Single customer timeline", "x", "check"],
];

function PatchworkCell({ state }) {
  if (state === "partial") {
    return (
      <div className="flex items-center justify-center gap-2 text-neutral-600">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-400 text-[12px] leading-none">
          i
        </span>
        <span className="text-[13px] font-bold">Partial</span>
      </div>
    );
  }
  if (state === "x") {
    return (
      <div className="flex items-center justify-center">
        <span className="text-[20px] font-extrabold text-[#FF2D2D]">✖</span>
      </div>
    );
  }
  return null;
}

function DexkorCell({ state }) {
  if (state === "check") {
    return (
      <div className="flex items-center justify-center">
        <span className="text-[22px] font-black text-[#16A34A]">✓</span>
      </div>
    );
  }
  return null;
}

export default function UnifiedVsSprawl({ openPopup }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof openPopup === "function") openPopup();
    else console.warn("UnifiedVsSprawl: `openPopup` prop not provided or not a function.");
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 lg:py-0">
        {/* Title */}
        <h2 className="text-center text-[26px] sm:text-[32px] font-extrabold bg-clip-text text-transparent bg-[#0039A4] font-poppins">
          Why Unified Beats <span className="text-[#6F7EFF] font-poppins">Tool Sprawl</span>
        </h2>

        {/* Table */}
        <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-neutral-200">
          <table className="w-full border-collapse">
            <colgroup>
              <col className="w-[46%]" />
              <col className="w-[27%]" />
              <col className="w-[27%]" />
            </colgroup>

            <thead className="bg-neutral-50">
              <tr className="text-left text-[13px] text-neutral-600">
                <th className="py-4 pl-6 font-dm">Capability</th>
                <th className="py-4 font-dm text-center">Patchwork Stack</th>
                <th className="py-4 pr-6 text-center font-dm">DexKor Suite</th>
              </tr>
            </thead>

            <tbody>
              {rows.map(([cap, patch, dex]) => (
                <tr key={cap} className="border-t border-neutral-200 font-dm text-center">
                  <td className="py-5 pl-6 text-left text-[14px] text-neutral-700 font-dm">{cap}</td>
                  <td className="py-5"><PatchworkCell state={patch} /></td>
                  <td className="py-5 bg-[#F4FFF7]"><DexkorCell state={dex} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center">
          <button
            type="button"
            onClick={handleClick}
            aria-label="See DexKor in Action"
            className="group relative isolate overflow-hidden inline-flex items-center justify-center rounded-full px-8 sm:px-10 py-3.5 text-[14px] sm:text-[20px] font-extrabold text-white bg-[#0B50C9] shadow-[0_12px_36px_rgba(11,80,201,0.35)] hover:shadow-[0_16px_56px_rgba(11,80,201,0.45)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B50C9]"
          >
            <span className="relative z-10 font-dm">Stop Tool Sprawl - Get Your Time Back →</span>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 -left-[60%] w-[50%] h-full bg-white/40 transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)] group-hover:left-[120%] group-hover:opacity-0"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </button>

          <p className="mt-6 text-[12px] lg:text-sm mb-4 text-center lg:text-left">
  {`Your competitors saved 15+ hours/week already. ${new Date().toLocaleString("default", { month: "long" })} access closes Friday.`}
</p>


          <div className="mt-0  flex justify-center">
            <Animation />
          </div>
        </div>
      </div>
    </section>
  );
}
