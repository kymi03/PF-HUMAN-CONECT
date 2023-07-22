/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.jsx", "./src/views/**/*.jsx"],
  theme: {
    extend: {colors:{
      grey: '#e8e5de',
      vividGreen: '#2f8e37',
      backgroundImage: {'image': "url('./src/assets/BACKGOUDN IMAGE_LANDING.png')"}
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']},
    },
  },
  plugins: [ require('flowbite/plugin')],
}

