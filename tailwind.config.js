/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: 'rgb(var(--app-gray-default) / <alpha-value>)',
          50: 'rgb(var(--app-gray-50) / <alpha-value>)',
          100: 'rgb(var(--app-gray-100) / <alpha-value>)',
          200: 'rgb(var(--app-gray-200) / <alpha-value>)',
          300: 'rgb(var(--app-gray-300) / <alpha-value>)',
          400: 'rgb(var(--app-gray-400) / <alpha-value>)',
          500: 'rgb(var(--app-gray-500) / <alpha-value>)',
          600: 'rgb(var(--app-gray-600) / <alpha-value>)',
          700: 'rgb(var(--app-gray-700) / <alpha-value>)',
          800: 'rgb(var(--app-gray-800) / <alpha-value>)',
          900: 'rgb(var(--app-gray-900) / <alpha-value>)',
          950: 'rgb(var(--app-gray-950) / <alpha-value>)',
        },
        accent: {
          DEFAULT: '#6366f1',
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
        'gradient-accent-hover': 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #8b5cf6 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(240,100%,75%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(280,100%,76%,0.10) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220,100%,77%,0.10) 0px, transparent 50%)',
      },
      keyframes: {
        open: {
          '0%': { opacity: 1, transform: 'translateX(100%)' },
        },
        close: {
          to: { opacity: 0, transform: 'translateX(100%)' },
        },
        waving: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px 2px rgba(99,102,241,0.3)' },
          '50%': { boxShadow: '0 0 40px 8px rgba(139,92,246,0.5)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        'drawer-open': 'open 0.3s ease-in-out',
        'drawer-close': 'close 0.3s ease-in-out',
        'waving-hand': 'waving 2s linear 3',
        float: 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        blob: 'blob 7s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-outfit)', 'var(--font-inter)', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};

// Ref :: https://twitter.com/steventey/status/1677339375645126659
// Ref :: https://tailwindcss.com/docs/customizing-colors#using-css-variables
