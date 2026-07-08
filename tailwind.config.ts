import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        heading: ['Playfair Display', 'serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#3A7A1A',
          dark: '#2D5E12',
          light: '#4E9E24',
        },
        secondary: {
          DEFAULT: '#8A9BA8',
          light: '#C0C8CC',
        },
        accent: {
          DEFAULT: '#B8A882',
          gold: '#D4A574',
        },
        charcoal: {
          DEFAULT: '#1E3028',
          dark: '#192A22',
          light: '#2A4035',
        },
        silver: {
          DEFAULT: '#8A9BA8',
          light: '#C0C8CC',
          dark: '#6B7A85',
        },
        offwhite: '#F4F1EC',
      },
    },
  },
  plugins: [],
} satisfies Config