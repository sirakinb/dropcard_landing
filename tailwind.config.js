/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          start: '#701AEE',
          end: '#B5179E'
        }
      },
      boxShadow: {
        'inner-soft': 'inset 0 1px 2px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
};


