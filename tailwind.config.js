/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#E7F4FF',
          500: '#55A1DD',
        },
      },
    },
  },
  plugins: [],
};
