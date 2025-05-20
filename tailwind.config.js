/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d8edff',
          200: '#b8dfff',
          300: '#86caff',
          400: '#4cacff',
          500: '#2189ff', // Main primary color
          600: '#1070e0',
          700: '#0c59c0',
          800: '#104a9c',
          900: '#124078',
          950: '#0c2a4f',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#cdfaf1',
          200: '#9af3e4',
          300: '#60e7d1',
          400: '#31d0bb',
          500: '#14b8a6', // Main secondary color
          600: '#0a907f',
          700: '#0a7363',
          800: '#0b5b4e',
          900: '#0c4a41',
          950: '#05312b',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffd9a8',
          300: '#ffbe71',
          400: '#fd9c36',
          500: '#f97316', // Main accent color
          600: '#ea5c0b',
          700: '#c2450a',
          800: '#9a3910',
          900: '#7c3112',
          950: '#431606',
        },
        dark: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};