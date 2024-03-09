/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
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
        whats: "#26BF60",
        phone: "#CF8B01",
      },
      width: {
        Square: "36.92px",
        icon: "72.82px",
        logo: "75px",
        fixedIcon: "64px",
      },
      height: {
        Square: "36.92px",
        icon: "72.82px",
        fixedIcon: "64px",

      },
      fontSize: {
        H2: "40px",
        H4: "18px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
