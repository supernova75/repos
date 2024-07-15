/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width'
      }
    },
    colors: {
      'primary-pantone5255c': '#1D1B34',
      'primary-pantone-032c': '#E73743',
      'secondary-violetc': '#3F2683',
      'seconday-7739c': '#289A43',
      'seconday-272c': '#7173B5',
      'seconday-360C': '#6EB74C',
      'seconday-715c': '#F28B2D',
      'seconday-7687c': '#154388',
      'seconday-1255c': '#FDC646',
      'seconday-284c': '#6AA9DD',
      'dark-blue': '#302D54',
      'light-grey': '#f8fafc',
      'medium-grey': '#EFEFEF',
      'light-yellow': '#FFF06E',
      white: '#FFFFFF',
      'light-red': '#FF4C57'
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
