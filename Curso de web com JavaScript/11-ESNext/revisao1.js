// let e const
// let e const são palavras reservadas para declarar variáveis
// let é uma variável que pode ser alterada
// const é uma variável que não pode ser alterada
// let e const são variáveis de escopo de bloco
// var é uma variável que pode ser alterada e tem escopo global
{
  var a = 2;
  let b = 3;
}

console.log(a); // 2
// console.log(b); // ReferenceError: b is not defined

// Template strings
// Template strings são strings que podem ter variáveis dentro delas
// Template strings são delimitadas por crase `
// Template strings podem ter quebras de linha
// Template strings podem ter expressões dentro delas
const nome = 'Henrique';
const idade = 30;
const frase = `Meu nome é ${nome} e eu tenho ${idade} anos`;

// Destructuring
// Destructuring é uma forma de extrair valores de arrays ou objetos
// Destructuring de arrays
const numeros = [1, 2, 3, 4, 5];
const [um, dois, tres] = numeros;
console.log(um); // 1
console.log(dois); // 2
console.log(tres); // 3
// Destructuring de objetos
const pessoa = {
  nome: 'Henrique',
  idade: 30,
  cidade: 'São Paulo',
};
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa); // Henrique
console.log(idadePessoa); // 30

// Rest operator
// O rest operator é usado para agrupar valores em um array
// O rest operator é representado por três pontos ...
const numerosRest = [1, 2, 3, ...numeros];
console.log(numerosRest); // [1, 2, 3, 1, 2, 3, 4, 5]

// Spread operator
// O spread operator é usado para espalhar valores de um array ou objeto
// O spread operator é representado por três pontos ...
const numerosSpread = [1, 2, 3, ...numeros];
console.log(numerosSpread); // [1, 2, 3, 1, 2, 3, 4, 5]

// O spread operator pode ser usado para copiar objetos
const pessoaSpread = { ...pessoa };
console.log(pessoaSpread); // { nome: 'Henrique', idade: 30, cidade: 'São Paulo' }

// O spread operator pode ser usado para copiar arrays
const numerosSpread2 = [...numeros];
console.log(numerosSpread2); // [1, 2, 3, 4, 5]

// O spread operator pode ser usado para concatenar arrays
const numerosConcatenados = [0, ...numeros, 6];
console.log(numerosConcatenados); // [0, 1, 2, 3, 4, 5, 6]