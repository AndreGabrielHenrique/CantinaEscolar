// Caminho relativo: vite.config.js
// Este arquivo configura o Vite, o bundler usado para desenvolvimento e build do projeto React.

// Importa a função defineConfig do módulo 'vite', que permite definir configurações de forma tipada e segura.
import { defineConfig } from 'vite'

// Importa o plugin React do Vite, que habilita o suporte a JSX e transforma componentes React durante o build.
import react from '@vitejs/plugin-react'

// Configuração do Vite para usar React e JSX.
// Exporta a configuração padrão do Vite como uma função que retorna um objeto de configuração.
export default defineConfig({
  // Propriedade 'plugins': array de plugins que o Vite deve usar.
  // Aqui, adiciona o plugin React para processar arquivos .jsx e .tsx.
  plugins: [react()]
})
