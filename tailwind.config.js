/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        howWeWork_1: "url('/src/assets/images/benzaBiz.jpeg')",
        howWeWork_2: "url('/src/assets/images/benzaBiz2.jpeg')",
        howWeWork_3: "url('/src/assets/images/benzaBiz3.jpeg')",
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
  },
  plugins: [],
};
