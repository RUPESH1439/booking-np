import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00308F',
        primaryLight: '#007FFF',
      },
      fontFamily: {
        davidLibre: ['David Libre', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
