/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: token("ink"),
        paper: token("paper"),
        platform: token("platform"),
        enamel: token("enamel"),
        "on-enamel": token("on-enamel"),
      },
    },
  },
  plugins: [],
};
