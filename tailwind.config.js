/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#373F67',
        secondary: '#5A85EE',
        tertiary: '#719CF7',
        contents: '#9DA1B4',
        contentsSecondary: '#919191',
        negative: '#E11900',
      },
    },
  },
  plugins: [],
};
