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
    },
  },
  plugins: [],
}
export default config
