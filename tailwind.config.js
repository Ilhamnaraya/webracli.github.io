module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        gambar: "url('./img/bg-home.png')",
      },
      colors: {
        primary: "#039fc6",
        secondary: "#64748b",
        merah: "#FF1F1F",
        dark: "#0E0133",
        abumuda: "#CECECE",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubblegum: "#ff77e9",
        bermuda: "#78dcca",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
