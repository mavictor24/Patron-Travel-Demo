import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        teal: {
          50: '#EAFBF8',
          100: '#CDF5EE',
          200: '#9CEBDE',
          300: '#66DBCA',
          400: '#3DCDBC',
          500: '#2DC6BB',
          600: '#1FA69B',
          700: '#1C847C',
          800: '#1A6963',
          900: '#195752',
        },
        ink: {
          50: '#EFF3F4',
          100: '#D6E1E4',
          200: '#ADC3C9',
          300: '#7FA0A9',
          400: '#4F7B85',
          500: '#2F5D68',
          600: '#1C4753',
          700: '#153744',
          800: '#0F2732',
          900: '#081A22',
          950: '#041016',
        },
        sand: {
          50: '#FCFAF6',
          100: '#F7F2E9',
          200: '#EFE7D6',
          300: '#E2D6BC',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(8, 26, 34, 0.18)',
        card: '0 8px 30px -10px rgba(8, 26, 34, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 40s linear infinite',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
