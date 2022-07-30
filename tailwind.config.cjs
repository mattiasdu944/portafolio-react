/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {

      'mob': '346px',
      // => @media (min-width: 640px) { ... }

      'tab': '526px',
      // => @media (min-width: 640px) { ... }

      'lap': '920px',
      // => @media (min-width: 1024px) { ... }

      'desk': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}