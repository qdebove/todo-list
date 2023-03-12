/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e1f1fc",
          100: "#b3d4f9",
          200: "#81b9f2",
          300: "#4f9fe8",
          400: "#2682d8",
          500: "#0070ad",
          600: "#00649e",
          700: "#00568c",
          800: "#00446b",
        },
        secondary: {
          50: "#fff7e6",
          100: "#ffe0b3",
          200: "#ffcc80",
          300: "#ffb366",
          400: "#ffa64d",
          500: "#ad7000",
          600: "#9c6400",
          700: "#855300",
          800: "#663d00",
        },
        tertiary: {
          50: "#fce1f1",
          100: "#f9b3d4",
          200: "#f281b9",
          300: "#e84fa0",
          400: "#d82682",
          500: "#ad0070",
          600: "#9e0064",
          700: "#8c0056",
          800: "#6b0044",
        },
      },
      fontFamily: {
        base: ["var(--font-base)"],
      },
    },
  },
  plugins: [],
};
