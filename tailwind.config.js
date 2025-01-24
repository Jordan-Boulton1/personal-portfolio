/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'meteor': 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': {
            transform: 'rotate(35deg) translateX(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'rotate(35deg) translateX(-1000px)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}

