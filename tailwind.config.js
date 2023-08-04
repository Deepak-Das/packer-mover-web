/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important:true,
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
      'local': "url('assets/image/local.png')",
      'long': "url('assets/image/long_move.jpg')",
      'package': "url('assets/image/packing.jpg')",
      'residential': "url('assets/image/residentail_moving.png')",
      'commercial': "url('assets/image/commercial_move.jpg')",
      'icon-quote': "url('assets/icons/quote.png')",
      'icon-whatsapp': "url('assets/icons/whatsapp.png')",
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

