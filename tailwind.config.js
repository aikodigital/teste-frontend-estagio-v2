/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s',
      },
      backgroundImage: {
        'backgroundLogo': "url('/src/imgs/background.png')",
      },
    },
  },
  plugins: [],
}
