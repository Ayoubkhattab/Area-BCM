/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textColor:'#1D3557', 
        primaryColor: '#467C9E' ,
        highWarning:'#F28275' ,
        normailWarning:'#6BCB77',
        meduimWarning:'#FCDA74 '
        },
    },
  },
  plugins: [],
}