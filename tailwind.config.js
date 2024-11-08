/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        textfadin:{
          from :{
            opacity: 0
          },
          to :{
            opacity: 1
          }
        },
        textslideup:{
          from :{
            opacity: 0,
            transform:'translateY(20px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
        
      },
      animation: {
        slidein300: "slidein 1s ease  forwards",
        slidein500: "slidein 2s ease forwards",
        slidein700: "slidein 3s ease  forwards",
        slide: 'slide 10s linear infinite',
        fadein:'textfadin 1s ease-in forwards' ,
        slideup:'textslideup 1s ease-out forwards'
      },
    },
  },
  plugins: [require("tailwindcss-animated")], autoprefixer: {},
}

