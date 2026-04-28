// Caminho relativo: src/main.jsx
// Este arquivo é o ponto de entrada principal da aplicação React, responsável por renderizar o componente raiz no DOM.

// Importa React, necessário para usar JSX e funcionalidades do React.
import React from 'react'

// Importa ReactDOM, que fornece métodos para interagir com o DOM, como renderizar componentes.
import ReactDOM from 'react-dom/client'

// Importa o componente App, que é o componente raiz da aplicação.
import App from './App.jsx'

// Importa os estilos globais da aplicação, aplicados a toda a página.
import './styles/global.sass'

// Renderiza o componente principal dentro do elemento com id 'root'.
// Cria uma raiz React no elemento DOM com id 'root' e renderiza o componente App dentro de um StrictMode.
// StrictMode ajuda a identificar problemas potenciais no código React durante o desenvolvimento.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
