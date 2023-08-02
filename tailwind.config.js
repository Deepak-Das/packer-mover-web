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
    backgroundImage:{
      'feature-1': "url('assets/image/feature_1.jpg')",
      'icon-quote': "url('assets/icons/quote.png')",
      'icon-mover': "url('assets/icons/mover.png')",
      'icon-compare': "url('assets/icons/compare.png')",
      'icon-packing': "url('assets/icons/packing.png')",
      'icon-requirement': "url('assets/icons/requirement.png')",
   

    },
    extend: {},
  },
  plugins: [
  ],
}

