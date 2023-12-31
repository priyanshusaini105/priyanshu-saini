import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius:{
        "4xl":'4rem'
      },
      color:{
        accent:'#8330C2',
        primary:'#fafafa',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
        fontFamily: {
          yatra: ['var(--font-yatra)'],
          mont:['var(--font-montserrat)'],
          varela:['var(--font-varela-round)']
      },
    },
  },
  plugins: [],
}
export default config
