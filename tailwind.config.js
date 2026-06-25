/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0E14',
          900: '#0D1219',
          800: '#111722',
          700: '#1A222F',
          600: '#1F2733',
        },
        mist: {
          400: '#8B98A9',
          200: '#C3CCD6',
          100: '#E6EDF3',
        },
        signal: {
          DEFAULT: '#3DDC97',
          dim: '#2BAF79',
          glow: '#6FF0B9',
        },
        scan: {
          DEFAULT: '#5AC8FA',
          dim: '#3FA0CC',
        },
        alert: '#FF6B6B',
        light: {
          bg: '#F4F6F8',
          surface: '#FFFFFF',
          border: '#DDE3E9',
          text: '#10151C',
          muted: '#5B6573',
        }
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(61, 220, 151, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(61, 220, 151, 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '36px 36px',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(61, 220, 151, 0.4)' },
          '100%': { boxShadow: '0 0 0 12px rgba(61, 220, 151, 0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 6s linear infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        pulseRing: 'pulseRing 2s ease-out infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('light-mode', 'body.light-mode &');
    }),
  ],
}
