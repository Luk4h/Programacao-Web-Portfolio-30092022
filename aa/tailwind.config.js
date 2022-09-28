/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Work':['Work Sans'],
      'Inter':['Inter'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}