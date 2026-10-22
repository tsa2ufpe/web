// Projeto: Cardápio Digital · Desenvolvimento de Sistemas Web · IFPE Palmares
// Dupla: ____________________ e ____________________
//
// Regras: nada de innerHTML com dado digitado pelo usuário (vale -1 ponto).
// Teste ao fim de cada etapa, com o console aberto (F12).

const texto = `[
  {"id": 1, "nome": "Coxinha", "preco": 5, "categoria": "salgado"},
  {"id": 2, "nome": "Pastel de queijo", "preco": 8, "categoria": "salgado"},
  {"id": 3, "nome": "Esfirra de carne", "preco": 6, "categoria": "salgado"},
  {"id": 4, "nome": "Cuscuz com ovo", "preco": 9, "categoria": "salgado"},
  {"id": 5, "nome": "Açaí 500 ml", "preco": 18, "categoria": "doce"},
  {"id": 6, "nome": "Bolo de rolo", "preco": 7, "categoria": "doce"},
  {"id": 7, "nome": "Tapioca de coco", "preco": 8, "categoria": "doce"},
  {"id": 8, "nome": "Suco de caju", "preco": 6, "categoria": "bebida"},
  {"id": 9, "nome": "Caldo de cana", "preco": 5, "categoria": "bebida"},
  {"id": 10, "nome": "Café com leite", "preco": 4, "categoria": "bebida"}
]`

// ── ETAPA 1 · Dados e renderização ──────────────────────────────────────
// Converta o texto em array de objetos e mostre cada item na lista #cardapio:
// nome, preço com 2 casas e um botão "Adicionar" (crie com createElement).
// Dica: guarde o id no botão com botao.dataset.id = item.id
const cardapio = JSON.parse(texto)
const lista = document.querySelector('#cardapio')

function renderizar(itens) {
  // sua vez!
}

renderizar(cardapio)

// ── ETAPA 2 · Busca ─────────────────────────────────────────────────────
// A cada tecla no campo #busca (evento input), monte uma lista só com os itens
// cujo nome contém o texto digitado (for...of + if + push) e chame renderizar.
// Ignore maiúsculas e minúsculas.

// ── ETAPA 3 · Carrinho ──────────────────────────────────────────────────
// Um único listener na lista #cardapio (delegação) adiciona o item clicado.
// Mostre o carrinho em #carrinho, com um botão "Remover" em cada item
// (outro listener, também com delegação), e o total em #total, somando os
// preços com um laço (let soma = 0 e +=).
// Lembre: dataset devolve texto. Converta com Number() antes de comparar.
let carrinho = []

// ── ETAPA 4 · Salvar ────────────────────────────────────────────────────
// Salve o carrinho no localStorage a cada mudança (JSON.stringify) e carregue
// ao abrir a página (JSON.parse dentro de try/catch, com ?? [] para o vazio).

// ── ETAPA 5 · Pedido ────────────────────────────────────────────────────
// No submit do formulário #pedido: preventDefault, valide nome e WhatsApp
// (aria-invalid e mensagem no span de erro de cada campo, foco no primeiro
// erro) e, com o carrinho não vazio, mostre em #mensagem o pedido pronto
// com template literal: nome, itens, total e WhatsApp.
