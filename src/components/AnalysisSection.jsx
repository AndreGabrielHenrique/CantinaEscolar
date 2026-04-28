// Caminho relativo: src/components/AnalysisSection.jsx
// Este componente analisa os resultados de vendas e responde perguntas estratégicas.

// Componente que analisa os resultados de vendas e responde perguntas estratégicas.
// Função que retorna o JSX da seção de análise.
export default function AnalysisSection() {
  // Mesmos dados de vendas usados em RevenueCalculator.jsx para manter a análise consistente.
  // Array de objetos com dados de vendas por produto.
  const salesData = [
    {
      // Produto Salgado.
      name: 'Salgado',
      // Preços por dia.
      prices: { Segunda: 5, Terça: 5 },
      // Quantidades vendidas por dia.
      quantities: { Segunda: 30, Terça: 25 }
    },
    {
      // Produto Refrigerante.
      name: 'Refrigerante',
      prices: { Segunda: 3, Terça: 3 },
      quantities: { Segunda: 20, Terça: 22 }
    },
    {
      // Produto Suco.
      name: 'Suco',
      prices: { Segunda: 4, Terça: 4 },
      quantities: { Segunda: 15, Terça: 18 }
    }
  ]

  // Função que calcula o faturamento para um preço e quantidade.
  const computeRevenue = (price, quantity) => price * quantity

  // Calcula a quantidade total vendida de cada produto nos dois dias.
  // Mapeia salesData para um array com nome, total de unidades e total de receita.
  const totalQuantities = salesData.map((item) => ({
    // Nome do produto.
    name: item.name,
    // Soma das quantidades de segunda e terça.
    total: item.quantities.Segunda + item.quantities.Terça,
    // Soma dos faturamentos de segunda e terça.
    totalRevenue:
      computeRevenue(item.prices.Segunda, item.quantities.Segunda) +
      computeRevenue(item.prices.Terça, item.quantities.Terça)
  }))

  // Ordena para encontrar os maiores e menores valores.
  // Produto que vendeu mais unidades.
  const mostSold = totalQuantities.reduce((best, item) =>
    item.total > best.total ? item : best
  )
  // Produto que vendeu menos unidades.
  const leastSold = totalQuantities.reduce((worst, item) =>
    item.total < worst.total ? item : worst
  )
  // Produto que gerou mais receita.
  const topRevenue = totalQuantities.reduce((best, item) =>
    item.totalRevenue > best.totalRevenue ? item : best
  )

  // Faturamento total por dia.
  // Objeto com totais calculados para cada dia.
  const totalsByDay = {
    // Total de segunda: soma dos faturamentos de todos os produtos.
    Segunda: salesData.reduce(
      (sum, item) => sum + computeRevenue(item.prices.Segunda, item.quantities.Segunda),
      0
    ),
    // Total de terça.
    Terça: salesData.reduce(
      (sum, item) => sum + computeRevenue(item.prices.Terça, item.quantities.Terça),
      0
    )
  }

  // Dia com maior faturamento: compara os totais e escolhe o maior.
  const bestDay = totalsByDay.Segunda >= totalsByDay.Terça ? 'Segunda' : 'Terça'

  // Retorna o JSX da seção.
  return (
    <section className="section-card">
      {/* Cabeçalho com título da etapa. */}
      <header>
        <h2>Etapa 4 – Analisar os dados</h2>
      </header>
      {/* Div com classe 'analysis-grid' para organizar os artigos em grid. */}
      <div className="analysis-grid">
        {/* Artigo para a primeira pergunta: produto que vendeu mais. */}
        <article>
          <h3>1. Produto que vendeu mais</h3>
          {/* Parágrafo com resposta: nome e quantidade total. */}
          <p>{mostSold.name} ({mostSold.total} unidades)</p>
        </article>
        {/* Artigo para a segunda pergunta: produto que gerou mais dinheiro. */}
        <article>
          <h3>2. Produto que gerou mais dinheiro</h3>
          {/* Parágrafo com resposta: nome e receita total. */}
          <p> {topRevenue.name} (R$ {topRevenue.totalRevenue})</p>
        </article>
        {/* Artigo para a terceira pergunta: dia de maior faturamento. */}
        <article>
          <h3>3. Dia de maior faturamento</h3>
          {/* Parágrafo com resposta: dia e total. */}
          <p>{bestDay} (R$ {totalsByDay[bestDay]})</p>
        </article>
        {/* Artigo para a quarta pergunta: produto que vendeu menos. */}
        <article>
          <h3>4. Produto que vendeu menos</h3>
          {/* Parágrafo com resposta: nome e quantidade total. */}
          <p>{leastSold.name} ({leastSold.total} unidades)</p>
        </article>
        {/* Artigo para a quinta pergunta: possibilidade de prejuízo. */}
        <article>
          <h3>5. Pode haver prejuízo?</h3>
          {/* Parágrafo explicando que com os dados, não há prejuízo aparente, mas sugere comparar custos. */}
          <p>
            Com os dados de preço e quantidade utilizados, todos os produtos geraram faturamento.
            Ainda assim, é necessário comparar com os custos para confirmar se algum item dá prejuízo.
          </p>
        </article>
      </div>
    </section>
  )
}
