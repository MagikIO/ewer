/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#231942",
        "secondary": "#5e548e",
        "tertiary": "#9f86c0",
        "quaternary": "#be95c4",
        "quinary": "#e0b1cb",
      },
      fontFamily: {
        "code": ["FiraCode-Proportional"],
      },
    }
  },
  plugins: []
};
