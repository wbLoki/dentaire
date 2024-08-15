const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#DBEFFA",
        purple: "#583FBC",
        mauve: "#DBDEFA",
        rose: "#F6DBFA",
        peach: "#FADBE2",
        orange: "#FF8C4B",
      },
      backgroundImage: {
        "hero-image": "url('../media/cabinet/happy.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("flowbite/plugin"),
    nextui(),
  ],
};
