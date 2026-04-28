// Caminho relativo: src/App.jsx
// Este arquivo define o componente principal da aplicação, que organiza e renderiza todos os componentes da página.

// Importa o componente Header, que exibe o título e a missão da cantina.
import Header from './components/Header.jsx'

// Importa o componente ProblemSection, que descreve os problemas da cantina.
import ProblemSection from './components/ProblemSection.jsx'

// Importa o componente RevenueCalculator, que calcula e exibe o faturamento dos produtos.
import RevenueCalculator from './components/RevenueCalculator.jsx'

// Importa o componente AnalysisSection, que analisa os dados de vendas e responde perguntas estratégicas.
import AnalysisSection from './components/AnalysisSection.jsx'

// Importa os estilos específicos da aplicação.
import './styles/app.sass'

// Componente principal da aplicação. Ele organiza as seções do site.
// Função que retorna o JSX da aplicação, estruturando os componentes em uma div container.
export default function App() {
  // Retorna o JSX: uma div com classe 'app-container' que contém todos os componentes da página.
  return (
    <div className="app-container">
      {/* Renderiza o componente Header no topo da página. */}
      <Header />
      {/* Renderiza a seção que explica o problema da cantina. */}
      <ProblemSection />
      {/* Renderiza o componente que calcula o faturamento. */}
      <RevenueCalculator />
      {/* Renderiza a seção de análise dos dados. */}
      <AnalysisSection />
    </div>
  )
}
