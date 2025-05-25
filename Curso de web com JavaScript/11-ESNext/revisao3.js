// Object.values e Object.entries
const obj = {
  nome: 'Lucas',
  idade: 25,
  cidade: 'São Paulo',
  profissao: 'Desenvolvedor'
};
// Object.values retorna um array com os valores do objeto
const valores = Object.values(obj);
console.log(valores); // ['Lucas', 25, 'São Paulo', 'Desenvolvedor']

// Object.entries retorna um array com os pares chave-valor do objeto
const entradas = Object.entries(obj);
console.log(entradas); // [['nome', 'Lucas'], ['idade', 25], ['cidade', 'São Paulo'], ['profissao', 'Desenvolvedor']]

// Melhorias na notação literal de objetos
const nome = 'Lucas';
const idade = 25;
const cidade = 'São Paulo';
const profissao = 'Desenvolvedor';

const pessoaMelhorado = {
  nome,
  idade,
  cidade,
  profissao,
  
  ola() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

pessoaMelhorado.ola(); // Olá, meu nome é Lucas

// Class
class Animal {}

class Cachorro extends Animal {
  falar() {
    return 'Au au!';
  }
}

console.log(new Cachorro().falar()); // Au au!