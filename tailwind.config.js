/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'centaur': ['Centaur', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#089cf1',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #089cf1, 0 0 20px #089cf1, 0 0 30px #089cf1' },
          '100%': { textShadow: '0 0 20px #089cf1, 0 0 30px #089cf1, 0 0 40px #089cf1' },
        }
      }
    },
  },
  plugins: [],
};