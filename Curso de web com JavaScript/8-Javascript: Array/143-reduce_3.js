Array.prototype.reduce = function(callback, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1;
  let acumulador = valorInicial || this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  };
  return acumulador;
};

const soma = (total, valor) => total + valor;
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.reduce(soma, 21)); // 42