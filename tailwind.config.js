const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        "top-image": "#4cb2e1b5",
        momizi: "#cb566c",
        "text-color": "#112734",
        back: "#fffffe"
      },
      padding: {
        "9/16": "56.25%",
      },
      width: {
        "3/10": "30%"
      }
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover'],
    },
  },
  plugins: [],
}
