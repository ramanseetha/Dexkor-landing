import React, { useState, useEffect } from "react";
import "./Pop.css";

const Popup = ({ show, onClose }) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("https://dexkor.com/ai-revenue-suite/Php/index.php")
      .then((response) => response.json())
      .then((data) => setMsg(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        fixed inset-0 z-[99999] bg-black/50
        flex items-center justify-center
        px-3 sm:px-4
        py-6 sm:py-8 md:py-0   /* mobile has padding, desktop = centered */
      "
    >
      <div
        className="
          relative bg-white rounded-2xl shadow-2xl
          w-full max-w-3xl
          max-h-[90vh] md:max-h-[85vh]
          overflow-y-auto
          px-3 sm:px-6 py-6 sm:py-8
        "
      >
        {/* close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl leading-none text-gray-500 hover:text-gray-800"
          aria-label="Close popup"
        >
          &times;
        </button>

        <div className="text-center mb-4 mt-8 sm:mt-0">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0039A4] uppercase">
            BOOK YOUR PRIVATE 1-ON-1 DEMO WITH A DEXKOR AI SPECIALIST
          </h2>
          <p className="text-sm lg:text-[15px] sm:text-base text-gray-700 mt-2">
            Get personalized insights on ROI, workflow automation, and unified
            customer intelligence. See how DexKor AI Suite can predict churn,
            automate growth, and replace 6+ tools before you leap.
          </p>
        </div>

        {msg && <p className="api-msg text-center mb-4">{msg}</p>}

        <form
          action="https://dexkor.com/ai-revenue-suite/Php/index.php"
          method="post"
          className="space-y-4 w-full"
        >
          {/* Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name*"
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name*"
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Work Email Address*"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
          />

          {/* Phone */}
          <div className="flex flex-row items-center gap-3 w-full">
            <select
              name="country_code"
              className="w-[70px] sm:w-[80px] border border-gray-300 rounded-lg px-2 py-3
                         text-[13px] font-medium text-gray-700 bg-white
                         focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
              required
              defaultValue="+91"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+971">+971</option>
              <option value="+65">+65</option>
              <option value="+63">+63</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              required
              className="flex-grow border border-gray-300 rounded-lg px-4 py-3 text-[15px]
                         focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
            />
          </div>

          {/* Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              name="team"
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
            >
              <option value="">Role/designation?*</option>
              <option value="Customer Success">Customer Success</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Sales">Sales</option>
              <option value="Onboarding">Onboarding</option>
              <option value="People/Culture">People/Culture</option>
              <option value="Other">Other</option>
            </select>

            <select
              name="interest"
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
            >
              <option value="">Which tool they are using?*</option>
              <option value="HelpDesk">HelpDesk</option>
              <option value="AccountCare">AccountCare</option>
              <option value="OnboardHub">OnboardHub</option>
              <option value="SalesHub">SalesHub</option>
              <option value="StarBoard">StarBoard</option>
            </select>
          </div>

          {/* Challenge */}
          <select
            name="challenge"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
          >
            <option value="">Whats the biggest challenge?*</option>
            <option value="Churn">Churn</option>
            <option value="Onboarding Delays">Onboarding Delays</option>
            <option value="SLA Slippage">SLA Slippage</option>
            <option value="Forecast Accuracy">Forecast Accuracy</option>
            <option value="Engagement">Engagement</option>
            <option value="Data Fragmentation">Data Fragmentation</option>
            <option value="Other">Other</option>
          </select>

          {/* Company */}
          <input
            type="text"
            name="company_name"
            placeholder="Company Name*"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0039A4]"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#0039A4] text-white font-semibold rounded-full py-4 shadow-[0_10px_30px_rgba(0,57,164,0.55)] hover:-translate-y-1 transition-transform duration-300"
          >
            BOOK MY PRIVATE DEMO CALL
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
