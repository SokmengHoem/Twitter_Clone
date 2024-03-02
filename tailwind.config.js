/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Lora"', 'sans-serif']
    },
   
    extend: {
      width: {
        430: "430px",
        600: "600px",
      },
      screens: {
        'tablet': '450px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1016px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors:{
        'bgcontent': '#e5e7eb',
        'black-rgba': 'rgb(225, 225, 225,0.90)',
      },
    },
  },
  plugins: [],
}
// theme: {
//   extend: {
//     colors: {
//       dim: {
//         50: "#5F99F7",  rgba(0, 0, 0, 0.00);
//         100: "#5F99F7",
//         200: "#38444d",
//         300: "#202e3a",
//         400: "#253341",
//         500: "#5F99F7",
//         600: "#5F99F7",
//         700: "#192734",
//         800: "#162d40",
//         900: "#15202b",
//       },
//     },
//   },
// },  

