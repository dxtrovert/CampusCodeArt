/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F7F4',
        ink: '#111111',
        purple: '#7665FF',
        lime: '#A8E62E',
        'lime-deep': '#82B91A',
        line: '#DEDED8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
