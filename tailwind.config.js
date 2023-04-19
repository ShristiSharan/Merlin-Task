/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage:{
        '3D-background': "url('../public/3DBg.png)",

      }
    },
  },
  plugins: [],
}
