import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greyBase: '#ececec',
        orangeAccent: '#ee2a7b',
        greyAccent: '#d4d0d0',
      },
    },
  },
  plugins: [],
};
export default config;
