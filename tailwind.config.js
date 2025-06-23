/** @type {import('tailwindcss').Config} */
import themes from '@cleartax/truss/theme.config.js';
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@cleartax/truss/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: themes,
  },
  plugins: [require('tailwindcss-animate')],
};
