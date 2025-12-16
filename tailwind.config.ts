import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        konpaktOrange: '#FF6200',  // your brand orange — tweak hex if needed
        konpaktBlack: '#000000',
      },
    },
  },
  plugins: [],
}
export default config
