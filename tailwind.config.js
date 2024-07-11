/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        howWeWork_1:
          "linear-gradient(90deg, rgba(5,3,21,0.4) 0%, rgba(5,3,21,0.4) 50%, rgba(5,3,21,0.4) 100%), url('/src/assets/images/benzaBiz.jpeg')",
        howWeWork_2:
          "linear-gradient(90deg, rgba(5,3,21,0.4) 0%, rgba(5,3,21,0.4) 50%, rgba(5,3,21,0.4) 100%), url('/src/assets/images/benzaBiz2.jpeg')",
        howWeWork_3:
          "linear-gradient(90deg, rgba(5,3,21,0.4) 0%, rgba(5,3,21,0.4) 50%, rgba(5,3,21,0.4) 100%), url('/src/assets/images/benzaBiz3.jpeg')",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      darkText: "#050315",
      white: "#fbfbfe",
      blue: "#2f27ce",
      blue_100: "#dedcff",
      accent: "#433bff",
      textWhite: "#ffffff",
      gray: "#EFEFF1",
      grayText: "#B8B8C0",
      red: "#CC0001",
    },
  },
  plugins: [],
};
