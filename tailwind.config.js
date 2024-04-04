/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": '#0054a6',
        "secondary-color": '#1db2ff',
        "secondary-dark": '#1f79b8',
      }
    },
  },
  plugins: [require("daisyui")],
}

