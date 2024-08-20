function repetir(valor, vezes) {
  let resultado = [];

  for (var i = 0; i < vezes; i++) {
    resultado.push(valor);
  };

  return resultado;  
};

console.log(repetir('código', 2)); // ['código', 'código']
console.log(repetir(7, 3)); // [7, 7, 7]