/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#06091A',
        'black': '#131313',
        'tiya': '#E7FE29',
      },

      boxShadow: {
        'custom-inset': 'inset 4px 4px 20px 0px rgba(19, 19, 19, 0.30)',
      },

      backgroundImage: {
        'bg-shadow': "url('/src/assets/images/bg-shadow.png')",
      },


      
    },
  },
  plugins: [],
}