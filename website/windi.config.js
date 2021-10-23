const { defineConfig } = require('windicss/helpers')

module.exports = defineConfig({
  safelist: 'mt-20 md:mt-32 mb-8 prose mx-auto',
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#FCE8E8',
          200: '#E6E6E6',
          300: '#D6D6D6',
          400: '#B8B8B8',
          500: '#999999',
          600: '#FF4B33',
          700: '#5C5C5C',
          800: '#454545',
          900: '#B84444',
        },
        gray: {
          100: '#fafafa',
          200: '#E6E6E6',
          300: '#D6D6D6',
          400: '#B8B8B8',
          500: '#999999',
          600: '#8A8A8A',
          700: '#5C5C5C',
          800: '#454545',
          900: '#2E2E2E',
        },
      },
    },
    typography: {
      default: {
        css: {
          h1: {
            fontFamily: 'Inter',
            fontWeight: 'black',
          },
          h2: {
            fontFamily: 'Inter',
            fontWeight: 'black',
          },
        },
      },
    },
  },
  plugins: [require('windicss/plugin/typography')],
})
