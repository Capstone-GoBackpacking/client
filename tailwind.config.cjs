/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        "gray-primary": "#F2F2F2",
        enable: "#70FF76",
        disable: "#FF7070",
        pending: "#E2ED66",
        "gray-primary": "#EDF1F7",
        "gray-secondary": "#F7F9FC",
        "gray-thirt": "#C5CEE0",
        "typera-primary": "#170247",
        "typera-secondary": "#2E3A59",
        active: "#3300CC",
      },
      width: {
        "44p": "44px",
        68: "284px",
        "255p": "255px",
      },
      height: {
        "44p": "44px",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      fontWeight: {
        extramedium: "560",
      },
    },
  },
  important: true,
  plugins: [],
};
