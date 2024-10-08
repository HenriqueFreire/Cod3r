const alunos = [
  { nome: 'Joana', nota: 7.3, bolsista: false }, 
  { nome: 'Maria', nota: 9.2, bolsista: true }, 
  { nome: 'Pietra', nota: 9.8, bolsista: false }, 
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)); // false

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)); // true