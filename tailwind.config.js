module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  plugins: [require("@tailwindcss/ui")],
  theme: {
    extend: {
      colors: {
        primary: "#4BD6AB",
        secondary: "#90dec6",
        mainWhite: "#fff",
        mainBlack: "#333",
        mainGrey: "#686868",
        lightGrey: "#ebeff2",
        // ...
      },
    },
  },
};
