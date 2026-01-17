/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nacky: ['"Nacky Sans"', "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};
