const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('./public/bg-hero.jpg')",
                'cta': "url('./public/bg-cta.jpg')",
            },
            colors: {
                'orange': '#f18a00',
                'gray-dark': '#575756',
                'gray': '#616160',
                'gray-light': '#efeeee',
            },
            fontFamily: {
                ptsans: ['PT Sans', 'sans-serif'],
            },
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        }
      },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}