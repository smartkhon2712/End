/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      cream: "#EEEEEE",
      dark: "#212529",
      "light-dark": "rgba(33,37,41,50%)",
      green: "#74C69D",
    },
  },
  plugins: [],
};
