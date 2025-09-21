/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000", //para textos e contrastes fortes
        blackForest: "#0B0F0C", //alternativa para preto
        white: {
          100: "#ffffff",
          200: "#f8f8ff ",
        }, //para fundos e respiros
        pink: {
          100: "#E91E63", //para botoes e destaques
          200: "#F06292", // para hover e variações suaves
        },
        rose: {
          100: "#F8E1E7", // fundos suaves
          200: "#E8B7C8", // para detalhes, bordas ou ícones
          500: "#F43B5E",
        },
        gray: {
          100: "#4A4A4A", // texto secundário
          200: "#E0E0E0", // linhas/divisores
        },
      },
    },
  },
  plugins: [],
};
