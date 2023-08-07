/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#20A9C7',
        background: {
          light: '#F2F2F2',
          dark: '#222222',
        },
        surface: {
          light: '#f7f8fa',
          dark: '#2E2E2E',
        },
      },
    },
  },
  plugins: [],
};
