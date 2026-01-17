// src/components/CtaBlock.jsx
import React from "react";
import Animation from "./Animation";

export default function CtaBlock({
  openPopup,              // function to open your modal/popup
  href,                   // optional: when provided, we render <a>
  target = "_blank",
  type = "button",        // used only when rendering <button>
  label = "Claim Your Spot Before Slots Fill (Only 3 Left)",
  subtitle = "The 8 largest SaaS companies just locked theirs. Your turn before they're gone.",
  size = "md",
  fullWidth = false,
  className = "",
  ...rest
}) {
  const sizeMap = {
    sm: "px-6 sm:px-8 py-3 sm:py-4 text-[12px] sm:text-[14px]",
    md: "px-10 sm:px-20 py-5 sm:py-6 text-[14px] sm:text-[18px]",
    lg: "px-16 sm:px-24 py-6 sm:py-7 text-[16px] sm:text-[22px]",
  };

  // If href exists we render <a>, otherwise <button>
  const Element = href ? "a" : "button";

  const handleClick = (e) => {
    if (typeof openPopup === "function") {
      // prevent navigation if it's an <a>
      e.preventDefault();
      openPopup();
    }
  };

  return (
    <div
      className={`mt-10 flex flex-col items-center justify-center text-center ${className}`}
      {...rest}
    >
      <Element
        onClick={handleClick}
        {...(href ? { href, target, rel: "noopener noreferrer" } : { type })}
        aria-label={label}
        className={`group relative isolate overflow-hidden inline-flex items-center justify-center rounded-full
          ${sizeMap[size]}
          ${fullWidth ? "w-full" : "w-auto"}
          font-extrabold text-white tracking-wide
          bg-[#0039A4]
          shadow-[0_10px_40px_rgba(0,57,164,0.55)]
          hover:shadow-[0_22px_70px_rgba(0,57,164,0.55)]
          transition-transform duration-300 hover:-translate-y-1`}
      >
        <span className="relative z-10 font-dm text-[12px] lg:text-[20px]" >{label}</span>

        {/* sweeping shine */}
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
      </Element>

      {subtitle && (
        <p className="mt-4 text-[10px] sm:text-base text-neutral-600 font-dm whitespace-normal sm:whitespace-nowrap">
          {subtitle}
        </p>
      )}

      <div className="mt-2 w-full flex justify-center">
        <Animation />
      </div>
    </div>
  );
}
