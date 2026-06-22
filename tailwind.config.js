/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          abyss:  '#07111f',
          deep:   '#0b1929',
          mid:    '#0f2140',
          border: '#1e3a5f',
          surface:'#0ea5e9',
          foam:   '#38bdf8',
          wave:   '#7dd3fc',
          coral:  '#f97316',
          sand:   '#fbbf24',
          text:   '#e2e8f0',
          muted:  '#94a3b8',
          dim:    '#0ea5e920',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Courier New', 'monospace'],
        orb:  ['"Orbitron"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        wave: {
          '0%,100%': { transform: 'translateX(0)' },
          '50%':     { transform: 'translateX(-25%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideRight: {
          from: { transform: 'scaleX(0)' },
          to:   { transform: 'scaleX(1)' },
        },
      },
      animation: {
        fadeUp:    'fadeUp 0.6s ease forwards',
        fadeIn:    'fadeIn 0.8s ease forwards',
        blink:     'blink 1s step-end infinite',
        wave:      'wave 12s ease-in-out infinite',
        float:     'float 4s ease-in-out infinite',
        shimmer:   'shimmer 3s linear infinite',
        slideRight:'slideRight 0.4s ease forwards',
      },
    },
  },
  plugins: [],
}
