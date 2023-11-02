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
        'glass': '0 4px 30px rgba(73, 78, 78)',
        'btn-outer': '.3rem .3rem .6rem rgba(36, 38, 39), -.2rem -.2rem .5rem rgba(166, 183, 183 )',
        'btn-inner': 'inset .3rem .3rem .6rem rgba(36, 38, 39) , inset -.2rem -.2rem .5rem rgba(166, 183, 183 )',
      },
    },
  },
  plugins: [],
}
export default config
