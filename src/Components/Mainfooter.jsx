import React, { useEffect, useState } from "react";
import stopwatchIcon from "../stopwatch.png";

const Footer = ({ openPopup }) => {
  const [timeLeft, setTimeLeft] = useState(3 * 60 + 36); // 03:36
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  // ⏳ Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m} : ${s}`;
  };

  // 🟢 Popup click handler
  const handleClick = (e) => {
    e.preventDefault();
    if (typeof openPopup === "function") {
      openPopup();
    } else {
      console.warn("Footer: `openPopup` function missing");
    }
  };

  return (
    <footer
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full z-[9999]"
      aria-live="polite"
    >
      <div className="mx-auto max-w-screen-2xl px-2 sm:px-4">
        <div
          className="bg-gradient-to-r from-[#001F6B] to-[#0039A4] text-white
                     rounded-2xl shadow-2xl backdrop-blur-sm
                     px-4 py-2 sm:px-6 sm:py-5 lg:px-8 lg:py-4"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT: Timer + subtext */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                <img
                  src={stopwatchIcon}
                  alt="Stopwatch"
                  className="w-6 h-6 sm:w-12 sm:h-12"
                />
                <span className="font-extrabold text-xl sm:text-4xl lg:text-4xl leading-none">
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className="text-[13px] sm:text-[20px] text-white/90 font-semibold">
                Seats Will Run Out.
              </div>
            </div>

            {/* MIDDLE: Message */}
            <div className="text-center">
              <div className="uppercase font-bold tracking-wide text-xs sm:text-base lg:text-xl">
                ⚡ Demand Surge Alert! ⚡
              </div>
              <div className="hidden sm:block text-white/90 text-xs sm:text-sm lg:text-base mt-1">
                Last Demo Sessions for {currentMonth} - Act Now!
              </div>
            </div>

            {/* RIGHT: CTA + subtext */}
            <div className="flex flex-col items-center lg:items-center">
              <button
                onClick={handleClick}
                className="group relative isolate overflow-hidden
                           inline-flex items-center justify-center
                           rounded-full px-8 sm:px-10 lg:px-8 py-3 sm:py-4 lg:py-3
                           text-xs sm:text-lg lg:text-lg font-bold tracking-wide
                           text-[#0039A4]
                           bg-white
                           shadow-[0_8px_25px_rgba(0,57,164,0.25)]
                           hover:shadow-[0_10px_30px_rgba(0,57,164,0.35)]
                           transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Book Your Breakthrough Demo"
              >
                <span className="relative z-10">Book Your Breakthrough Demo</span>

                {/* Shine sweep */}
                <span
                  className="pointer-events-none absolute top-0 -left-[60%] w-[50%] h-full
                             bg-[#0039A4]/15
                             transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                             [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                             group-hover:left-[130%] group-hover:opacity-0"
                />

                {/* Hover overlay */}
                <span
                  className="pointer-events-none absolute inset-0 bg-[#0039A4]/10
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                />
              </button>

              <div className="mt-2 text-[12px] sm:text-[13px] text-white/80 max-w-[420px] text-center">
                See How DexKor Replaces 6+ Tools - Your Team’s Advantage Starts Here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
