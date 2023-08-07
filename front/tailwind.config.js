/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.jsx", "./src/views/**/*.jsx" ,"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {colors:{
      grey: '#e8e5de',
      vividGreen: '#2f8e37',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'gobold': ['Gobold', 'sans-serif']
    },
    },
  },
  plugins: [ require('flowbite/plugin')],
}

