/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html", // Se seu HTML principal está na raiz
    "./src/**/*.{js,ts,jsx,tsx,html}", // Se você tem arquivos em src/
    // Adicione mais caminhos se seus arquivos HTML/JS/outros estiverem em outras pastas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}