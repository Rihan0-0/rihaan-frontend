module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dashboardPurple: "#7C4DFF",
        dashboardOrange: "#FFD54F",
        dashboardGreen: "#26A69A",
        dashboardBlue: "#c2e2f1",
        dashboardBg: "#FFF3E0",
      },
    },
  },
  plugins: [],
};
