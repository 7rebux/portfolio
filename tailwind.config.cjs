/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '4xl': '1728px',
      },
      colors: {
        primary: '#20A9C7',
        background: {
          light: '#FFFFFF',
          dark: '#080808',
        },
        surface: {
          light: '#F9F9F9',
          lighter: '#fdfdfd',
          dark: '#161616',
          darker: '#0f0f0f',
        },
        border: {
          light: '#e4e4e7',
          dark: '#27272a',
        },
      },
    },
  },
  plugins: [],
};
