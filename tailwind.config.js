/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF1493",
          secondary: "#f6d860",
          accent: "#27285C",
          neutral: "#27284C",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
};
