const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        momizi: "#cb566c",
      },
      height: {
        'top-image': "35vh",
        'top-image-sp': "20vh"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
