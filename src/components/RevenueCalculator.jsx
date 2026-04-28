// Caminho relativo: src/components/RevenueCalculator.jsx
// Este componente calcula o faturamento dos produtos com base nos preços e quantidades.

// Componente que calcula o faturamento dos produtos com base nos preços e quantidades.
// Função que retorna o JSX da seção de cálculo de faturamento.
export default function RevenueCalculator() {
  // Estrutura de dados com preços e quantidade vendida para cada produto.
  // Array de objetos, cada um representando um produto com nome, preços por dia, quantidades por dia e cor para estilização.
  const salesData = [
    {
      // Objeto para o produto Salgado.
      name: 'Salgado',
      // Objeto com preços por dia (Segunda e Terça).
      prices: { Segunda: 5, Terça: 5 },
      // Objeto com quantidades vendidas por dia.
      quantities: { Segunda: 30, Terça: 25 },
      // Cor usada para destacar o produto na tabela.
      color: '#ffb347'
    },
    {
      // Objeto para o produto Refrigerante.
      name: 'Refrigerante',
      prices: { Segunda: 3, Terça: 3 },
      quantities: { Segunda: 20, Terça: 22 },
      color: '#7fc6ff'
    },
    {
      // Objeto para o produto Suco.
      name: 'Suco',
      prices: { Segunda: 4, Terça: 4 },
      quantities: { Segunda: 15, Terça: 18 },
      color: '#7dff9a'
    }
  ]

  // Dias de análise usados nas tabelas e nos cálculos.
  // Array com os dias da semana considerados na análise.
  const days = ['Segunda', 'Terça']

  // Função que retorna o faturamento de um produto para um dia específico.
  // Recebe preço e quantidade como parâmetros e retorna o produto deles.
  const computeRevenue = (price, quantity) => price * quantity

  // Calcula o total de faturamento por dia para todos os produtos.
  // Usa reduce para somar o faturamento de todos os produtos por dia.
  const totalsByDay = days.reduce((acc, day) => {
    // Para cada dia, calcula o total somando o faturamento de cada produto.
    acc[day] = salesData.reduce(
      (sum, item) => sum + computeRevenue(item.prices[day], item.quantities[day]),
      0
    )
    // Retorna o acumulador atualizado.
    return acc
  }, {}) // Inicia com um objeto vazio.

  // Retorna o JSX da seção.
  return (
    <section className="section-card">
      {/* Cabeçalho da seção com título. */}
      <header>
        <h2>Etapa 3 – Fazer os cálculos</h2>
      </header>
      {/* Parágrafo explicando a fórmula usada. */}
      <p>
        Usamos a fórmula do faturamento para cada produto: <strong>Preço × Quantidade</strong>.
      </p>

      {/* Div com classe 'revenue-table' contendo a tabela de faturamento. */}
      <div className="revenue-table">
        {/* Elemento table para exibir os dados em formato tabular. */}
        <table>
          {/* Cabeçalho da tabela com th para cada coluna. */}
          <thead>
            <tr>
              {/* Coluna para o nome do produto. */}
              <th>Produto</th>
              {/* Coluna para o preço (único, já que é o mesmo). */}
              <th>Preço</th>
              {/* Coluna para quantidade na segunda-feira. */}
              <th>Quantidade (Segunda)</th>
              {/* Coluna para faturamento na segunda-feira. */}
              <th>Faturamento (Segunda)</th>
              {/* Coluna para quantidade na terça-feira. */}
              <th>Quantidade (Terça)</th>
              {/* Coluna para faturamento na terça-feira. */}
              <th>Faturamento (Terça)</th>
            </tr>
          </thead>
          {/* Corpo da tabela com linhas para cada produto. */}
          <tbody>
            {/* Mapeia cada item de salesData para uma linha da tabela. */}
            {salesData.map((item) => (
              // Linha da tabela com chave única baseada no nome do produto.
              <tr key={item.name} style={{ backgroundColor: item.color + '22' }}>
                {/* Célula com o nome do produto. */}
                <td>{item.name}</td>
                {/* Célula com o preço (usando o de segunda, já que é igual). */}
                <td>R$ {item.prices.Segunda.toFixed(2)}</td>
                {/* Célula com a quantidade de segunda. */}
                <td>{item.quantities.Segunda}</td>
                {/* Célula com o faturamento calculado para segunda. */}
                <td>R$ {computeRevenue(item.prices.Segunda, item.quantities.Segunda)}</td>
                {/* Célula com a quantidade de terça. */}
                <td>{item.quantities.Terça}</td>
                {/* Célula com o faturamento calculado para terça. */}
                <td>R$ {computeRevenue(item.prices.Terça, item.quantities.Terça)}</td>
              </tr>
            ))}
          </tbody>
          {/* Rodapé da tabela com totais por dia. */}
          <tfoot>
            {/* Linha de resumo com totais. */}
            <tr className="summary-row">
              {/* Células mescladas para o texto "Total por dia". */}
              <td colSpan="3">Total por dia</td>
              {/* Célula com total de segunda. */}
              <td>R$ {totalsByDay.Segunda}</td>
              {/* Célula vazia para alinhamento. */}
              <td></td>
              {/* Célula com total de terça. */}
              <td>R$ {totalsByDay.Terça}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Parágrafo com nota informativa sobre os valores. */}
      <p className="info-note">
        Os valores apresentados são um exemplo de cálculo com base em uma cantina escolar que precisa
        entender o faturamento diário.
      </p>
    </section>
  )
}
