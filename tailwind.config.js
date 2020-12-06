module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/ui")],
  theme: {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
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
