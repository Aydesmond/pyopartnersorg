module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        primaryGreen: "#1bb66e",
        lightMilk: "#f3efe4",
        darkGray: "#1A1A1B",
        lightGray: "#FFFFFF",
      },

      fontFamily: {
        Rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};
