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
      'exs': '240px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding:{
      exs:"10px",
      sm:"30px",
      lg:"50px",
      md:"5px"
      }
    }
  },
  plugins: [],
}

