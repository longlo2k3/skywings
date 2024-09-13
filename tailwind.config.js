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
    },
  },
  plugins: [],
}

