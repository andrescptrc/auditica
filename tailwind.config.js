const Color = require('color')

const lighten = (color, value) => Color(color).lighten(value).hex().toString()
const darken = (color, value) => Color(color).darken(value).hex().toString()

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}'
  ],
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem'
        }
      },
      colors: {
        black: '#010101',
        white: '#fffffe',
        'red-salsa': {
          light: lighten('#EE4950', 0.08),
          DEFAULT: '#EE4950',
          dark: darken('#EE4950', 0.08)
        },
        'eerie-black': {
          light: lighten('#16161a', 0.08),
          DEFAULT: '#16161a',
          dark: darken('#16161a', 0.08)
        },
        'raisin-black': {
          light: lighten('#242629', 0.08),
          DEFAULT: '#242629',
          dark: darken('#242629', 0.08)
        },
        'spanish-gray': {
          light: lighten('#959D99', 0.08),
          DEFAULT: '#959D99',
          dark: darken('#959D99', 0.08)
        },
        'sonic-silver': {
          light: lighten('#72757e', 0.08),
          DEFAULT: '#72757e',
          dark: darken('#72757e', 0.08)
        },
        'space-cadet': {
          light: lighten('#2E3A59', 0.08),
          DEFAULT: '#2E3A59',
          dark: darken('#2E3A59', 0.08)
        }
      },
      fontFamily: {
        display: ['Inter', 'monospace']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
