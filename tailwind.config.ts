import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'forest': "url('../images/forest-bg.jpg')",
        'forestbw': "url('../images/forest-bg-bw-dark.jpg')",
        'pebblebeach': "url('../images/pebble.jpg')"
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(33, 35, 35)',
        'btn-outer': '.3rem .3rem .4rem rgba(36, 38, 39), -.1rem -.1rem .4rem rgba(151, 159, 159)',
        'btn-inner': 'inset .3rem .3rem .4rem rgba(62, 66, 66) , inset -.1rem -.1rem .4rem rgba(151, 159, 159)',
      },
    },
  },
  plugins: [],
}
export default config
