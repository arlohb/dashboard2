/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-dracula")()],
  darkMode: "class",
};
