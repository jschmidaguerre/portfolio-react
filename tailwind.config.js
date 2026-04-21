/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Rajdhani', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d8eeff',
          200: '#b9e1ff',
          300: '#88cfff',
          400: '#50b3ff',
          500: '#2891ff',
          600: '#1174f5',
          700: '#0e5ddc',
          800: '#124db2',
          900: '#15448c',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        ink: {
          900: '#0b1020',
          800: '#0f172a',
          700: '#111827',
          600: '#1f2937',
          500: '#334155',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(40, 145, 255, 0.35)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.35)',
        card: '0 10px 30px -12px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(1000px 600px at 20% 10%, rgba(40,145,255,0.25), transparent 60%), radial-gradient(800px 500px at 90% 30%, rgba(34,211,238,0.2), transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slow-spin': 'spin 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
