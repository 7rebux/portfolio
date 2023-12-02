/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    hljs: {
      theme: 'github-dark',
      custom: {
        base: {
          borderRadius: '.5rem'
        }
      }
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: null,
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
            code: {
              background: 'rgba(0, 0, 0, 0.1)',
              paddingInline: '4px',
              borderRadius: '4px',
            }
          },
        },
      }),
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
  safelist: [{
    pattern: /hljs+/,
  }],
  plugins: [require('@tailwindcss/typography'), require('tailwind-highlightjs')],
};
