/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
      },
      colors: {
        primary: '#00A3B1',
        secondary: '#1C81C1',
      }
    },
  },
  plugins: [],
}

