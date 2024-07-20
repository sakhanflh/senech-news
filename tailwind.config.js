/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": '"Jost", sans-serif',
      },
      colors: {
        'primary': '#FFA301',
        'secondary': '#504BDC',
        'third': '#999999'
      }
    },
  },
  plugins: [],
}

