export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b3a3a3', // darker glass shadow
          light: '#d4c1c1',   // original default
          dark: '#968787',    // even darker glass
        },
        secondary: {
          DEFAULT: '#6e2828', // darker burgundy
          light: '#8b3232',   // original default
          dark: '#561e1e',    // deeper burgundy
        },
        accent: {
          DEFAULT: '#c4a88c', // darker warm glow
          light: '#e6c7a3',   // original default
          dark: '#9e876f',    // richer warm tone
        },
        surface: {
          DEFAULT: '#0c0909', // pure dark
          light: '#1a1616',   // original default
          dark: '#050303',    // almost black
        },
        content: {
          DEFAULT: '#f5f0f0', // off-white text
          muted: '#a39999',   // muted text
          subtle: '#665e5e',  // subtle text
        }
      },
      screens:{
        "nav":"950px"
      }
    },
  },
  plugins: [],
};
