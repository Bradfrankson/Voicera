/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'heading': ['DM Sans', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
        'ui': ['IBM Plex Mono', 'monospace'],
      },
      letterSpacing: {
        'tight': '-0.01em',
        'ui': '0.05em',
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.6',
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#0175C2',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-100',
    'bg-blue-600',
    'text-blue-600',
    'bg-orange-100',
    'bg-orange-500',
    'text-orange-800',
    'bg-orange-50',
    'border-orange-200',
    'bg-pink-100',
    'bg-pink-500',
    'text-pink-800',
    'bg-pink-50',
    'border-pink-200',
    'bg-green-100',
    'bg-green-500',
    'text-green-800',
    'bg-green-50',
    'border-green-200',
    'bg-purple-100',
    'bg-purple-500',
    'text-purple-800',
    'bg-purple-50',
    'border-purple-200',
    'bg-purple-600',
    'hover:bg-purple-700',
    'bg-yellow-100',
    'text-yellow-600',
    'bg-indigo-100',
    'text-indigo-600',
    'bg-gold-100',
    'text-gold-600',
  ]
};