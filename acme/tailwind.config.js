/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Headings':['Epilogue', 'sans-serif'],
        'body-text':['Barlow', 'sans-serif']
      },
      backgroundColor:{
        'background': '#131313',
      },
      colors:{
        'body-text': '#898989'
      },
      textColor:{
        'body-text': '#898989'
      }
    },
  },
  plugins: [],
}

