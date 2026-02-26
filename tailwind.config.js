/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#333333',
        ink: '#111827',
        muted: '#6B7280',
        gold: {
          light: '#F3C24E',
          DEFAULT: '#DDA126',
          dark: '#B87B11'
        },
        borderGray: '#EAEAEA'
      },
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
      borderRadius: {
        luxury: '12px'
      },
      boxShadow: {
        luxury: '0 4px 6px -1px rgba(221, 161, 38, 0.1), 0 2px 4px -1px rgba(221, 161, 38, 0.06)',
        luxuryHover: '0 10px 15px -3px rgba(221, 161, 38, 0.2), 0 4px 6px -2px rgba(221, 161, 38, 0.1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
        softFloat: 'softFloat 7s ease-in-out infinite',
        shimmer: 'shimmer 10s ease-in-out infinite',
      },
      backgroundImage: {
        'lux-radial': 'radial-gradient(1200px circle at 20% 10%, rgba(243, 194, 78, 0.18), transparent 55%), radial-gradient(900px circle at 85% 20%, rgba(221, 161, 38, 0.14), transparent 60%)',
        'lux-sheen': 'linear-gradient(110deg, rgba(243, 194, 78, 0.18), rgba(221, 161, 38, 0.08), rgba(243, 194, 78, 0.18))',
      }
    },
  },
  plugins: [],
}
