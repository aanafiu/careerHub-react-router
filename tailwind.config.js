/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        all : "linear-gradient(180deg, rgba(126,144,254,1) 0%, rgba(152,115,255,1) 100%)",
      },
      colors: {
        allP: "#757575",
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
},
}

