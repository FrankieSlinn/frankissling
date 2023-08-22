/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        keyframes: {
          slideDown: {
              '0%': {
                transform: 'translateY(-90vh)'
              },

          },
      },
      animation: {
          'slideDown': 'slideDown 4s',
      },
  },
      },
    
  plugins: [],
  darkMode: "class",
  fontFamily: {
    'allura': ['Allura'],
    'handjet': ['Handjet']
  },
};

