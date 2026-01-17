// CustomersReportSection.jsx
import React from "react";

export default function CustomersReportSection() {
  const stats = [
    { value: "35%", caption: "Reduction in churn within 90 days" },
    { value: "50%", caption: "Faster onboarding time" },
    { value: "35%", caption: "Increase in support capacity without new hires" },
    { value: "35%", caption: "Uplift in expansion revenue" },
    { value: "35%", caption: "Team engagement scores" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
        {/* Heading */}
        <h2
          className="text-center text-2xl sm:text-4xl font-extrabold
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-[#0033A1] to-[#A68BFF]
                     font-poppins"
        >
          What Our Customers Report
        </h2>

        {/* Stats */}
        <div
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 text-left
                     justify-items-center sm:justify-items-start"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
                i === 4 ? "col-span-2 sm:col-span-1 justify-self-center" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl font-bold font-dm">{s.value}</div>
              <p className="mt-2 text-sm sm:text-base leading-relaxed font-bold max-w-[220px] font-dm">
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
