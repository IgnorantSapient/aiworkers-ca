import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', './tina/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui'],
        monoHeadline: ['Sora', 'Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ink: '#050505',
        charcoal: '#101010',
        graphite: '#1b1b1d',
        silver: '#d8d8d8'
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0,0,0,.45)',
        soft: '0 20px 70px rgba(255,255,255,.06)'
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        pulseSoft: { '0%,100%': { opacity: '.55' }, '50%': { opacity: '1' } },
        shimmer: { from: { backgroundPosition: '0% 50%' }, to: { backgroundPosition: '200% 50%' } }
      }
    }
  },
  plugins: [typography]
};
