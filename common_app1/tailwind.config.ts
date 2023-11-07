import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-img': "url('/home_page_hero_optimized.jpg')",
      },
      fontFamily:{
        'body-text':['Karla', 'sans-serif'],
      },
      colors:{
        // 'body-text': '#898989'
      },
      textColor:{
        // 'body-text': '#898989'
      }
    },
  },
  plugins: [],
}
export default config
