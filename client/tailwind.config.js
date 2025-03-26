/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '18px',
        md: '24px',
        lg: '16px',
        xl: '30px',
        '2xl': '40px',
      },
    },
    colors: {
      'main-color': '#1c1f35',
    },
  },
  plugins: [],
};
