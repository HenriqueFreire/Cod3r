const alunos = [
  { nome: 'Joana', nota: 7.3, bolsista: false }, 
  { nome: 'Maria', nota: 9.2, bolsista: true }, 
  { nome: 'Pietra', nota: 9.8, bolsista: false }, 
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  console.log(acumulador, atual);
  return acumulador + atual;
});

console.log(resultado); // 35