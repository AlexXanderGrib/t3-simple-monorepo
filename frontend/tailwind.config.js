const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");
const aspectRatio = require("@tailwindcss/aspect-ratio");

const utils = plugin(({ addUtilities }) => {
  addUtilities({
    ".clickable": {
      "touch-action": "manipulation",
      "-webkit-tap-highlight-color": "transparent",
      "user-select": "none",
      cursor: "pointer",
    },
    ".placeholder-select-none::placeholder": {
      "user-select": "none",
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        smooth: "0px 4px 32px rgba(0, 0, 0, 0.07);",
      },
      colors: {
        primary: colors.indigo,
        secondary: colors.zinc,
        danger: colors.rose,
        commerce: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [forms, aspectRatio, typography, utils],
};
