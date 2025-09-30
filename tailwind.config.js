// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 IMPORTANT for next-themes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if using App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // if using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-bg': "url('/images/business-bg.png')", // Add your image path here
      },
    },
  },
  plugins: [],
};
