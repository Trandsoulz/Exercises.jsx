/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        leftArrow: "url('./assets/icons/left-arrow.png')",
      },
    },
  },
  plugins: [],
};
