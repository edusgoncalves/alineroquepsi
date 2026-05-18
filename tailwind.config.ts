import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        psi: {
          lavender: '#D1B5E8', // Fundo geral
          surface: '#FFFFFF',  // Card branco
          main: '#005C61',     // Texto de destaque (Verde escuro)
          teal: '#2E797E',     // Ícones e detalhes
          dark: '#4D0000',     // Nome e handle (Marrom/Borgonha)
        }
      },
      borderRadius: {
        'psi': '24px',         // Arredondamento idêntico ao do post
      },
    },
  },
  plugins: [],
};
export default config;