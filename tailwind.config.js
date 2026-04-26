/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        card: "#080808",
        'card-elevated': "#0f0f0f",
        'card-border': "#1a1a1a",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(56,189,248,0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(56,189,248,0.5)' },
        },
      },
      boxShadow: {
        'sky-glow': '0 0 24px rgba(56,189,248,0.35)',
        'sky-glow-lg': '0 0 48px rgba(56,189,248,0.25)',
        'yellow-glow': '0 0 24px rgba(250,204,21,0.35)',
        'neo': '4px 4px 0px rgba(56,189,248,0.5)',
        'neo-sm': '2px 2px 0px rgba(56,189,248,0.4)',
        'neo-yellow': '4px 4px 0px rgba(250,204,21,0.5)',
        'inner-neu': 'inset 0 1px 2px rgba(255,255,255,0.05), inset 0 -1px 3px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
