/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      rotate: {
        '0': '0deg',
        '180': '180deg',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}