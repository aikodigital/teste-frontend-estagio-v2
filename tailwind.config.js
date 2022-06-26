/** @type {import('tailwindcss').Config} */
const brandColors = {
  birdBlue: "#1d9bf0",
  platinum: "#e7e9ea",
  silver: "#71767b",
  onix: "#333639",
  richBlack: "#15202b",
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      colors: { ...brandColors}
     },
  },
  plugins: [],
}
