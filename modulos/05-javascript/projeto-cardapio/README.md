# Projeto avaliativo · Cardápio Digital

**Desenvolvimento de Sistemas Web · ADS 3º período · IFPE Campus Palmares · Prof. Thiago Araújo**

A lanchonete do campus quer um cardápio digital. O cliente busca um item, adiciona ao carrinho, vê o
total, fecha a página e volta sem perder o carrinho, e faz o pedido informando nome e WhatsApp. No fim,
a página mostra a mensagem do pedido pronta para enviar.

O projeto junta tudo o que vimos de JavaScript: dados (objetos, JSON, localStorage), a página (DOM),
interação (eventos e delegação) e formulários acessíveis.

## Como fazer

- **Em duplas.** Os dois precisam saber explicar qualquer parte do código.
- **Comece pelo projeto inicial** desta pasta: `index.html` e `style.css` já estão prontos; você escreve
  o `app.js`. Pode mudar o HTML e o CSS, desde que a acessibilidade não piore.
- **Siga as etapas** marcadas no `app.js`, na ordem. Teste ao fim de cada uma, com o console aberto (F12).
- Abra com a extensão Live Server do VS Code.

## Rubrica (10 pontos)

| Critério | O que precisa funcionar | Pontos |
|---|---|---|
| Dados | `JSON.parse` do cardápio, com os 10 itens | 1,0 |
| Renderizar | lista feita com `createElement` e `textContent`; preço com 2 casas | 2,0 |
| Busca | filtra pelo nome a cada tecla (laço com `if`, ou `filter`), sem diferenciar maiúsculas | 1,5 |
| Carrinho | adicionar e remover com **delegação de eventos**; total somado com um laço (ou `reduce`) | 2,0 |
| Salvar | o carrinho volta depois de recarregar a página (localStorage + JSON) | 1,0 |
| Pedido | `submit` sem recarregar, nome e WhatsApp validados, mensagem do pedido com template literal | 1,5 |
| Acessível | botões de verdade com nome descritivo (ex.: "Adicionar Coxinha"), total e avisos no `role="status"`, erros com `aria-invalid` | 1,0 |

**Bônus (até +1, sem passar de 10):** classe `Carrinho` com métodos; busca que ignora acentos; filtro
por categoria; botão "Enviar no WhatsApp".

**Desconto:** −1 se usar `innerHTML` com dado digitado pelo usuário (falha de XSS).

Em todos os critérios: funciona, sem erro no console, e a dupla sabe explicar.

## Uso de IA

Pode usar assistentes de IA para tirar dúvida e entender um erro, como faria com um colega ou com a MDN.
Código que a dupla não consegue explicar na defesa não conta ponto.

## Entrega e defesa

- **Prazo:** 04/11, 23h59, pelo Classroom.
- **O que entregar:** um `.zip` com `index.html`, `style.css` e `app.js`, com os nomes da dupla no topo do `app.js`.
- **Defesa:** na aula seguinte à entrega, 3 minutos por dupla. O professor aponta um trecho do código e
  pergunta o que ele faz e por quê.

## Onde rever cada parte

| Etapa | Aula |
|---|---|
| Dados e JSON | 21/10 (bloco 1) e 14/10 (arrays) |
| Renderizar | 21/10 (blocos 2 e 3) |
| Busca e carrinho | 21/10 (bloco 4), 07/10 (laços e funções) e, para quem quiser, 14/10 (`filter`, `find`, `reduce`) |
| Salvar | 21/10 (bloco 1) |
| Pedido | 21/10 (bloco 5) e 30/09 (template literals) |
