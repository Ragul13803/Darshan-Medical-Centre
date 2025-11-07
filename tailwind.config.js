/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A8F5FF',   // very light aqua for backgrounds
          DEFAULT: '#5CE3F0', // main aqua blue (logo “S”)
          dark: '#00B8CC',    // darker cyan for hover or accents
        },
        accent: {
          red: '#E30613',     // logo red
          darkRed: '#B3000E', // deeper red for hover or emphasis
        },
        neutral: {
          white: '#FFFFFF',   // clean white
          gray: '#F5F5F5',    // soft light gray for sections
          dark: '#2E473B',    // dark neutral text color
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],  // modern and readable
        body: ['Open Sans', 'sans-serif'],   // professional, clean
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)', // subtle shadows for depth
      },
      backgroundImage: {
        // Soft, modern gradients — no green
        'hero-gradient': 'linear-gradient(to right, #5CE3F0, #E30613)',  // aqua → red
        'calm-gradient': 'linear-gradient(to right, #5CE3F0, #FFFFFF)', // aqua → white
        'contrast-gradient': 'linear-gradient(to right, #E30613, #2E473B)', // red → dark
      },
    },
  },
  plugins: [],
}
