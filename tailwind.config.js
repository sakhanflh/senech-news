/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": '"Roboto Slab", serif',
        "open-sans": '"Open Sans", sans-serif',
      },
      colors: {
        'primary': '#333333',
        'secondary': '#FF5722',
        'accent': '#F1F1F1',
        'highlight': '#007BFF',
      }
    },
  },
  plugins: [],
}

