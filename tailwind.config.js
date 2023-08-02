/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    // fontSize:{
    //   "2xl":"1.82rem"
    // },
    extend: {},
  },
  plugins: [
  ],
}

