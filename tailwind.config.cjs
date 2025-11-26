/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tenor Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        cream: '#FFF8F5',
        plum: {
          DEFAULT: '#4A192C',
          light: '#7D2E4A',
          dark: '#2D0D19',
        },
        mauve: '#9E3865',
        darkbg: '#18050E',
      }
    },
  },
  plugins: [],
}