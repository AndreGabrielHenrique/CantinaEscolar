// Caminho relativo: src/components/ProblemSection.jsx
// Este componente descreve os pontos-chave do problema apresentado no PDF.

// Componente que descreve os pontos-chave do problema apresentado no PDF.
// Função que retorna o JSX da seção de problemas.
export default function ProblemSection() {
  // Retorna o JSX: uma seção com classe 'section-card' contendo o cabeçalho e o conteúdo sobre o problema.
  return (
    <section className="section-card">
      {/* Elemento header para o título da seção. */}
      <header>
        {/* Título h2 indicando a etapa do processo. */}
        <h2>Etapa 1 – Entender o problema</h2>
      </header>
      {/* Parágrafo explicando a necessidade de diagnóstico na cantina. */}
      <p>
        A cantina precisa de um diagnóstico claro para evitar prejuízos e reduzir desperdício.
        O principal desafio é descobrir o que vende mais e o que está gerando menos retorno.
      </p>

      {/* Lista não ordenada com classe 'problem-list' listando os problemas específicos. */}
      <ul className="problem-list">
        {/* Item da lista: problema de não saber o que vende mais. */}
        <li>Não sabe o que vende mais.</li>
        {/* Item da lista: problema de estar perdendo dinheiro. */}
        <li>Está perdendo dinheiro.</li>
        {/* Item da lista: problema de desperdício de alimentos. */}
        <li>Há desperdício de alimentos.</li>
      </ul>

      {/* Parágrafo final explicando o objetivo da análise. */}
      <p>
        Com base nesses pontos, podemos criar uma análise de faturamento e descobrir quais itens
        merecem mais atenção na cantina escolar.
      </p>
    </section>
  )
}
