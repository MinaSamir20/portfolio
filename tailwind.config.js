/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A148C',
          950: '#311B92',
        },
        primary: {
          DEFAULT: '#6A0DAD',
          dark: '#5B2C6F',
          light: '#9B59B6',
          lighter: '#D7BDE2',
          darkest: '#4A235A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '4rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(106, 13, 173, 0.1)',
        'md': '0 4px 6px rgba(106, 13, 173, 0.1)',
        'lg': '0 10px 15px rgba(106, 13, 173, 0.2)',
        'xl': '0 20px 25px rgba(106, 13, 173, 0.3)',
      },
      transitionDuration: {
        'fast': '0.3s',
        'medium': '0.5s',
        'slow': '0.8s',
      },
    },
  },
  plugins: [],
}