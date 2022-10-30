/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },

      backgroundImage: {
        "pattern-bg": "url('/images/pattern-bg.png')",
        "icon-arrow": "url('/images/icon-arrow.svg')",
      },
    },
  },
  plugins: [],
};
