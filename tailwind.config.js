/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-white":"#fff",
        "color-primary":"#01051e",
        "color-primary-light":"#020726",
        "color-primary-dark":"#010417",
        "color-secondary":"#ff7d3b",
        "color-gray":"#333",
        "color-blob":"#A427DF"
      }
    },
    screens: {
      'xs': '475px',
      'exs': '250px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding:{
      DEFAULT: "20px",
      md: "50px"
      }
    }
  },
  plugins: [],
}

