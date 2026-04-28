// Caminho relativo: src/components/Header.jsx
// Este componente exibe o título principal do projeto e a missão da cantina.

// Componente que exibe o título principal do projeto e a missão da cantina.
// Função que retorna o JSX do cabeçalho da página.
export default function Header() {
  // Retorna o JSX: uma seção com classe 'section-card hero' contendo o conteúdo do cabeçalho.
  return (
    <section className="section-card hero">
      {/* Div com classe 'hero-copy' que agrupa o texto do cabeçalho. */}
      <div className="hero-copy">
        {/* Span com classe 'eyebrow' para o texto secundário, indicando o tipo de projeto. */}
        <span className="eyebrow">Projeto Temático: Cantina Escolar</span>
        {/* Elemento h1 com classe 'hero-title' para o título principal da página. */}
        <h1 className="hero-title">Análise de vendas e melhoria de resultados</h1>
        {/* Parágrafo com classe 'hero-subtitle' descrevendo brevemente o projeto. */}
        <p className="hero-subtitle">
          Este site apresenta uma visão de uma cantina escolar com problemas reais de gestão:
          falta de controle de venda, possíveis prejuízos e desperdício de alimentos.
        </p>
      </div>
    </section>
  )
}
