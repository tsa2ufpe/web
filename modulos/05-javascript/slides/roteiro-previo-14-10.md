# Estudo prévio · Aula de 14/10 · Arrays e métodos

A aula de 14/10 é **invertida**: você lê antes e a aula fica para exercícios.
Reserve **40 minutos** e faça com o console do navegador aberto (F12).

No começo da aula há uma checagem rápida de 4 perguntas, **sem nota**. Ela serve para eu saber o que explicar de novo.

## 1. Leia (MDN, em português)

1. [Array: visão geral](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array): leia só a introdução e a lista de métodos. Não precisa ler tudo.
2. [map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
4. [find](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
5. [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce): o mais difícil. Se travar, tudo bem: vamos ver em aula.

Em cada página, rode os exemplos no console em vez de só ler.

## 2. Teste no console

Preveja o resultado **antes** de apertar Enter e depois confira:

```javascript
const frutas = ['maçã', 'uva', 'caju']
frutas[0]
frutas.length
frutas.at(-1)

const notas = [5, 12, 8, 20]
notas.map(n => n * 2)
notas.filter(n => n > 10)
notas.find(n => n > 10)
notas.reduce((soma, n) => soma + n, 0)
```

## 3. Traga uma dúvida

Anote **uma** coisa que você não entendeu. É por ela que a aula começa.
