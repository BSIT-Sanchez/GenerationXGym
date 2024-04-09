/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '1xs': '200px',
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1280px',
      '2xl': '1536px'
    },
    colors: {
      'bgFooter': '#141b23',
      'fontColor': '#ffffff',
      'bgHeader': '#f5f5fa',
      'bgButton': '#34d399'
    },
    extend: {},
  },
  plugins: [],
}

