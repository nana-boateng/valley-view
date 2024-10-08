/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: {
        '50': '#f2f4f4',
        '100': '#e6e8e9',
        '200': '#bfc6c8',
        '300': '#99a3a7',
        '400': '#4d5f65',
        '500': '#001a23',
        '600': '#001720',
        '700': '#00141a',
        '800': '#001015',
        '900': '#000d11'
      },
      white: {
        '50': '#fefefe',
        '100': '#fdfefe',
        '200': '#f9fcfc',
        '300': '#f6f9fa',
        '400': '#eff5f6',
        '500': '#e8f1f2',
        '600': '#d1d9da',
        '700': '#aeb5b6',
        '800': '#8b9191',
        '900': '#727677'
      },
      'watermelon': {
        '50': '#fff8f8',
        '100': '#fff0f2',
        '200': '#ffdadd',
        '300': '#ffc3c9',
        '400': '#ff96a1',
        '500': '#ff6978',
        '600': '#e65f6c',
        '700': '#bf4f5a',
        '800': '#993f48',
        '900': '#7d333b'
      },
      'salad': {
        '50': '#f6faf6',
        '100': '#eef5ee',
        '200': '#d4e6d3',
        '300': '#b9d7b9',
        '400': '#85b985',
        '500': '#519b50',
        '600': '#498c48',
        '700': '#3d743c',
        '800': '#315d30',
        '900': '#284c27'
      },
      'blue': {
        '50': '#f5fafb',
        '100': '#ebf4f6',
        '200': '#cde4e9',
        '300': '#afd3db',
        '400': '#74b2c1',
        '500': '#3891a6',
        '600': '#328395',
        '700': '#2a6d7d',
        '800': '#225764',
        '900': '#1b4751'
      },
      'siren': {
        '50': '#f9f2f5',
        '100': '#f3e6ec',
        '200': '#e2c0cf',
        '300': '#d09bb1',
        '400': '#ac4f77',
        '500': '#89043d',
        '600': '#7b0437',
        '700': '#67032e',
        '800': '#520225',
        '900': '#43021e'
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
