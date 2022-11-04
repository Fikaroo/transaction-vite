/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27B582",

          secondary: "#1F8C65",

          accent: "#ffeecc",

          neutral: "#23202C",

          "base-100": "#F4F8F7",

          info: "#8ADAEA",

          success: "#27B582",

          warning: "#F4D848",

          error: "#EF6967",
        },
      },
    ],
  },

  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
