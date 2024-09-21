/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: "#2887ff",
        primarycolorDark: "#2476da",
        textDark: "#0a0a0a",
        textLight: "#737373",
        extraLight: "#f3f4f6",
        white: "#ffffff",
        maxWidth: "1200px",
      },
      boxShadow: {
        'lg': '6px 1px 20px rgba(0, 0, 0, 0.6)',
        'xl': '5px 5px 10px rgba(0, 0, 0, 0.25)',
        'sm': '0px 0px 20px rgba(0, 0, 0, 0.15) '
      }
    },
  },
  plugins: [],
}

