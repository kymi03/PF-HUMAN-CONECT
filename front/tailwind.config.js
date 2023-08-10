/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.jsx", "./src/views/**/*.jsx" ,"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {colors:{
      grey: '#e8e5de',
      vividGreen: '#2f8e37',
      corn: '#eec207',
      keppel: '#2DA5AB',
      keppel600: '#298791',
      keppel700: '#276e77',
      blueGrey: "#C0C5C8"
    },
    fontFamily: {
      'gilroy': ['Gilroy', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'gobold': ['Gobold', 'sans-serif'],
    },
    },
  },
  plugins: [ require('flowbite/plugin')],
}

