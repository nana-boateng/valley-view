/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        brandy: {
          50: "#fefcfa",
          100: "#fdf9f5",
          200: "#f9f1e6",
          300: "#f5e9d7",
          400: "#eed8ba",
          500: "#E6C79C",
          600: "#cfb38c",
          700: "#ad9575",
          800: "#8a775e",
          900: "#71624c",
        },
        mortar: {
          50: "#f7f6f7",
          100: "#eeecee",
          200: "#d5d0d5",
          300: "#bbb3bb",
          400: "#897b89",
          500: "#564256",
          600: "#4d3b4d",
          700: "#413241",
          800: "#342834",
          900: "#2a202a",
        },
        spindle: {
          50: "#fbfdfe",
          100: "#f7fbfd",
          200: "#eaf4fb",
          300: "#deedf8",
          400: "#c5e0f2",
          500: "#ACD2ED",
          600: "#9bbdd5",
          700: "#819eb2",
          800: "#677e8e",
          900: "#546774",
        },
        kobi: {
          50: "#fefbfd",
          100: "#fdf7fa",
          200: "#f9eaf3",
          300: "#f5ddeb",
          400: "#eec4dd",
          500: "#E6AACE",
          600: "#cf99b9",
          700: "#ad809b",
          800: "#8a667c",
          900: "#715365",
        },
        "fruit-salad": {
          50: "#f6faf6",
          100: "#eef5ee",
          200: "#d4e6d3",
          300: "#b9d7b9",
          400: "#85b985",
          500: "#519b50",
          600: "#498c48",
          700: "#3d743c",
          800: "#315d30",
          900: "#284c27",
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "fade-in-left": "fade-in-left 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
      },
      keyframes: (theme) => ({
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      }),
    },
  },
  plugins: [],
};
