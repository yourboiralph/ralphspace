/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFA0C2',
        'secondary': '#F9F5CE',
        'tertiary': '#DEEEEE',
        'tertiary-two': '#E3CE8B',
      }
    },
  },
  plugins: [],
}

