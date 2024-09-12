/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      "./web/static/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

