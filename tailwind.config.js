/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Sawarabi Gothic", "ui-sans-serif", "ui-system"],
    },

    extend: {
      colors: {
        primary: "#304057",
        black: "#151515",
        secondary: "#6D6D6D",
      },
      fontSize: {
        base: ["16px", "23.5px"],
        lg: ["18px", "26.5px"],
        xl: ["20px", "29px"],
        "2xl": ["24px", "35px"],
        22: ["22px", "32px"],
        "3xl": ["36px", "53px"],
        "5xl": ["54px", "79px"],
      },
    },
  },
  plugins: [],
};
