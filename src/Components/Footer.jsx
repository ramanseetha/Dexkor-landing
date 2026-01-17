// Footer.jsx
import React from "react";
import dexkorLogo from "../Footer.png"; // <-- replace with your logo file

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200  pb-[14rem] lg:pb-[135px]">
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        {/* Logo */}
        <img
          src={dexkorLogo}
          alt="Dexkor"
          className="h-10 w-auto mx-auto select-none"
          loading="lazy"
        />

        {/* Rights line */}
        <p className="mt-4 text-[12px] sm:text-sm  font-dm">
          All Rights Reserved © 2025 Getnso Pvt. Ltd.
        </p>

        {/* Disclaimer */}
        <p className="mt-2 text-[11px] sm:text-xs  max-w-3xl mx-auto leading-relaxed font-dm">
          Disclaimer: All data current as of February 2025 unless otherwise stated.
          See <a href="#terms" className="underline underline-offset-2 decoration-neutral-400 hover:text-neutral-700">Terms</a> and{" "}
          <a href="#privacy" className="underline underline-offset-2 decoration-neutral-400 hover:text-neutral-700">Privacy Policy</a> for details.
        </p>
      </div>
    </footer>
  );
}
