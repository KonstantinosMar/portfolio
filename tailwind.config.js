/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#232323',
        'light-grey': '#e6e6e6',
        'off-white': '#EEF0F2',
        'orange': '#C84630',
        'dark': '#141204',
        'light': '#bebebe',
        'yellow': '#CBA135',
      },
      transitionProperty: {
        'width': 'width',
        'left': 'left',
      },
      boxShadow: {
          'card': '8px 10px 16px -5px rgba(200,70,48,1)',
      }
    },
  },
  plugins: [],
}