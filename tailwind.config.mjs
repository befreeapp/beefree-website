/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // BeFree brand palette — exact hex from the brand system.
        cream: '#FBF6EC', // page background
        forest: '#0F3D39', // primary / dark sections / headings
        teal: '#1C6B63', // accent
        sage: '#7FA99B', // muted accent / soft text
        mist: '#E7EFE9', // pale green panel
        coral: '#E8744F',
        terracotta: '#D85E36', // signature accent — the logo full-stop dot
        amber: '#F0A93B',
        ink: '#1D2B2B', // body text
        soft: '#6B817C', // secondary text
        hairline: '#E3DDD0', // borders
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk Variable"', '"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(15, 61, 57, 0.18)',
        card: '0 6px 24px -14px rgba(15, 61, 57, 0.22)',
      },
      maxWidth: {
        content: '64rem',
      },
    },
  },
  plugins: [],
};
