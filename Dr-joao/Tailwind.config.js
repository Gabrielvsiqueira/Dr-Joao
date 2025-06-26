// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.html", // Adiciona todos os arquivos HTML dentro da pasta src e subpastas
  ],
  theme: {
    extend: {
      colors: { 
        'golden': '#FFFBDE',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'], 
      },
    },
  },
  plugins: [],
}