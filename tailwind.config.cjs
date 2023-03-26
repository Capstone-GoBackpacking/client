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
        'gray-primary': '#F2F2F2',
        'enable': '#70FF76',
        'disable': '#FF7070',
        'pending': '#E2ED66'
      },
      width: {
        '44p': '44px',
        '255p': '255px'
      },
      height: {
        '44p': '44px',
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}
