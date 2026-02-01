/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: '#7DCBE6',
          light: '#A8E0F0',
          dark: '#5BA9C7',
        },
        grass: {
          DEFAULT: '#A8D86E',
          light: '#C5E89D',
          dark: '#8BC24A',
        },
        sand: {
          DEFAULT: '#F4E4C1',
          light: '#FFF8E7',
          dark: '#D4C4A1',
        },
        earth: {
          DEFAULT: '#8B6F47',
          light: '#A88A65',
          dark: '#6B5237',
        },
        sunset: {
          DEFAULT: '#FFA500',
          light: '#FFB733',
          dark: '#CC8400',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

