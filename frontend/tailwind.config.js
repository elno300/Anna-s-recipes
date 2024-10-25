/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir Next", "sans-serif"], // 'sans-serif' som fallback
      },
      fontWeight: {
        // Lägg till vikter om du vill specificera dem
        bold: 700, // Definiera bold
        normal: 400, // Definiera normal
      },
    },
  },
  plugins: [],
};
