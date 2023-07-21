/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/views/**/*.jsx" , "./src/components/**/*.jsx" , "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {'image': "url('./src/assets/BACKGOUDN IMAGE_LANDING.png')"}

    },
  },
  plugins: [],
}

