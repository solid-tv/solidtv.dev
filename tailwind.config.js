/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'solidtv': '#6F45E8',
        'solidtv-dark': '#1C64F2',
      }
    },
  },
  plugins: [],
}