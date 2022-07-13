/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s infinite',
        rubber: 'rubber 1000ms infinite ease-out',
        baflg: 'baflg 10s infinite',
        baf: 'baf 10s infinite',
        bafxs: 'bafxs 10s infinite',
      },
      keyframes: {
        rubber: {
          '0%': {
            transform: 'scaleX(1)'
          },
          '40%': {
            transform: 'scaleX(1.2) scaleY(0.85)'
          },
          '55%': {
            transform: 'scaleX(0.95) scaleY(1)'
          },
          '65%': {
            transform: 'scaleX(1.19) scaleY(0.95)'
          },
          '75%': {
            transform: 'scaleX(1)  scaleY(1.1)'
          },
          '90%': {
            transform: 'scaleX(1.15) scaleY(1.05)'
          },
          '100%': {
            transform: 'scaleX(1) scaleY(1)'
          }
        },
        baflg: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0',
            transform: 'translate(-50%)'
          }
        },
        baf: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0',
            transform: 'translate(-100%)'
          }
        },
        bafxs: {
          '0%': {
            opacity: '1'
          },
          '25%': {
            opacity: '0',
            transform: 'translateY(-100%)'
          },
          '50%': {
            opacity: '0',
            transform: 'translateY(20%)'
          },
          '100%': {
            opacity: '1'
          }
        }
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}