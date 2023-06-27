const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      ...colors,
      appDarkBlue1: 'rgb(var(--app-dark-blue1) / <alpha-value>)',
      appDarkBlue2: 'rgb(var(--app-dark-blue2) / <alpha-value>)',
      appDarkBlue3: 'rgb(var(--app-dark-blue3) / <alpha-value>)',
      appDarkBlue4: 'rgb(var(--app-dark-blue4) / <alpha-value>)',
      appBlue: 'rgb(var(--app-blue) / <alpha-value>)',
      appLightGrey1: 'rgb(var(--app-light-grey1) / <alpha-value>)',
      appLightGrey2: 'rgb(var(--app-light-grey2) / <alpha-value>)',
      appMediumGrey1: 'rgb(var(--app-medium-grey1) / <alpha-value>)',
      appMediumGrey2: 'rgb(var(--app-medium-grey2) / <alpha-value>)',
      appMediumGrey3: 'rgb(var(--app-medium-grey3) / <alpha-value>)',
      appVeryDarkBlue1: 'rgb(var(--app-very-dark-blue1) / <alpha-value>)',
      appVeryDarkBlue2: 'rgb(var(--app-very-dark-blue2) / <alpha-value>)',
      appVeryDarkGrey3: 'rgb(var(--app-very-dark-grey3) / <alpha-value>)',
      appVeryLightGrey1: 'rgb(var(--app-very-light-grey1) / <alpha-value>)',
      appVeryLightGrey2: 'rgb(var(--app-very-light-grey2) / <alpha-value>)',
      appVeryLightGrey3: 'rgb(var(--app-very-light-grey3) / <alpha-value>)',
      appVeryLightGrey4: 'rgb(var(--app-very-light-grey4) / <alpha-value>)',
      appVeryLightGrey5: 'rgb(var(--app-very-light-grey5) / <alpha-value>)',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      flex: {
        10: '1 0',
        '01': '0 1',
      },
      fontFamily: {
        mono: ['var(--font-inter)', ...fontFamily.mono],
        sans: ['var(--font-helvetica-neue-lt)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    }),
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-app(Blue|DarkBlue|VeryDarkBlue|VeryLightGrey|LightGrey|MediumGrey|VeryDarkGrey)\d*/,
    },
  ],
}
