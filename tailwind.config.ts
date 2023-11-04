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
        'forestbw': "url('../images/forest-bg-bw-dark.jpg')",
        'pebblebeach': "url('../images/pebble.jpg')",
        'tahoe': "url('../images/tahoe.jpg')"
      },
      boxShadow: {
        'glass': '0 4px 30px black',
        'btn-outer': '.3rem .3rem .6rem rgba(20, 20, 20), -.1rem -.1rem .6rem rgba(145, 145, 145)',
        'btn-inner': 'inset .3rem .3rem .6rem rgba(20, 20, 20) , inset -.1rem -.1rem .6rem rgba(145, 145, 145)',
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
export default config
