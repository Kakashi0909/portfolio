/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'float-icon': 'float-icon 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      colors: {
        slate: {
          850: '#1a202c',
          950: '#0a0e1a',
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
};