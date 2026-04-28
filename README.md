# Cantina Escolar

Projeto de análise de vendas para uma cantina escolar usando React, Vite e SASS.

## Descrição

Este site apresenta uma análise fictícia de vendas de uma cantina escolar, baseada em um roteiro de atividade de analista de dados. Inclui cálculos de faturamento, tabelas interativas e respostas às perguntas estratégicas sobre vendas e possíveis prejuízos.

## Tecnologias Utilizadas

- **React 18**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno.
- **JavaScript**: Linguagem de programação principal.
- **SASS (sintaxe indentada)**: Pré-processador CSS para estilos avançados.
- **HTML5**: Estrutura básica da página.

## Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   O site estará disponível em `http://localhost:5173`.

3. **Build para produção**:
   ```bash
   npm run build
   ```

## Estrutura do Projeto

- `src/main.jsx`: Ponto de entrada da aplicação React.
- `src/App.jsx`: Componente principal que organiza as seções.
- `src/components/`: Componentes React individuais (Header, ProblemSection, etc.).
- `src/styles/`: Arquivos SASS para estilos globais e específicos.
- `vite.config.js`: Configurações do Vite.
- `index.html`: Arquivo HTML principal.

## Respostas às Perguntas do PDF

Com base nos dados de exemplo utilizados no site:

1. **Qual produto vendeu mais?**  
   Salgado (55 unidades no total).

2. **Qual produto gerou mais dinheiro?**  
   Salgado (R$ 275).

3. **Qual dia teve maior faturamento?**  
   Segunda-feira (R$ 270).

4. **Qual produto vendeu menos?**  
   Suco (33 unidades).

5. **Existe algum produto que pode estar dando prejuízo?**  
   Com os dados de preço e quantidade atuais, todos os produtos geraram faturamento positivo. No entanto, é necessário comparar com os custos de produção para confirmar se algum item resulta em prejuízo.

## Observações

- Os valores são exemplos didáticos baseados no roteiro da atividade.
- O design é temático para cantina escolar, com cores terrosas e layout responsivo.
- Todo o código está comentado em português para facilitar o entendimento.

## Licença

<content>Este é um projeto educacional e não possui licença específica.</content>