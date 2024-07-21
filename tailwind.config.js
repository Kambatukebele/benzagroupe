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
        "custom-bg": "url(./assets/images/bg.png)",
        "bg-longue": "url(./assets/images/bg_longue.png)",
      },
      keyframes: {
        upAndDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        upAndDown: "upAndDown 3s infinite",
        slowRotate: "rotate 100s linear infinite",
        slide: "slide 10s linear infinite",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, Opera */,
        },
      });
    },
  ],
};
