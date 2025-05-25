// Spread para espalhar elementos de um array ou objeto
// Rest para coletar elementos de um array ou objeto
// Rest para coletar parâmetros de uma função

// usar o spread com objetos
const pessoa = {
  nome: 'Henrique',
  idade: 30,
  cidade: 'São Paulo'
};

const clone = {
  ...pessoa,
  profissao: 'Desenvolvedor'
}

// usar o spread com arrays
const grupoA = ['Ana', 'Bruna', 'Carla'];
const grupoFinal = ['Diana', ...grupoA,];
console.log(grupoFinal); // ['Diana', 'Ana', 'Bruna', 'Carla']