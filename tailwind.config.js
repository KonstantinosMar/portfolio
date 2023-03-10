/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'off-white': '#EEF0F2',
        'orange': '#C84630',
        'dark': '#141204',
        'yellow': '#CBA135',
        // 'yellow': '#FFF8DC',
        // 'dark-grey': '#D4D4D4',
        // 'off-white': '#FFFFFF',
        // 'orange': '#FFA07A',
        // 'dark': '#8B8378',
      },
      transitionProperty: {
        'width': 'width',
        'left': 'left',
      }
    },
  },
  plugins: [],
}