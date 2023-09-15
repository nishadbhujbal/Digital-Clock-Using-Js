/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'md': { 'max': '865px' },
        'xmd': { 'max': '750px' },
        'sm': { 'max': '540px' },
      },
      fontFamily: {
        orbitron: ['Orbitron'],
      }
    },
  },
  plugins: [],
}

