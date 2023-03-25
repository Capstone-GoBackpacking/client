/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6C63FF',
        'gray-primary': '#F2F2F2'
      }
    },
  },
  plugins: [],
}
