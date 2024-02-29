/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        reem: "Reem Kufi",
      },
      colors: {
        mainYellow: "#FFB31A",
      },
      width: {
        Square: "36.92px",
      },
      height: {
        Square: "36.92px",
      },
      fontSize:{
        H2 : "40px"
      }
    },
  },
  plugins: [],
};
