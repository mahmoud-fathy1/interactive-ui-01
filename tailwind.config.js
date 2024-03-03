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
        secondaryColor: "#F5F3F3",
        footerColor1: "#434343",
        footerColor2: "#25272A",
      },
      width: {
        Square: "36.92px",
        icon: "72.82px",
        logo:"75px"
      },
      height: {
        Square: "36.92px",
        icon: "72.82px",
      },
      fontSize: {
        H2: "40px",
        H4: "18px",
      },
    },
  },
  plugins: [],
};
