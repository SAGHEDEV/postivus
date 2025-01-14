/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#B9FF66",
        gray: "#F3F3F3",
        dark: "#191A23",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
