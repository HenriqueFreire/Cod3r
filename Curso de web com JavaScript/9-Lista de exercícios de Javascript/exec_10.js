function returnarPrimeiroEUltimoElemento(array) {
  let arrayRetorno = [];
  arrayRetorno.push(array[0]);
  arrayRetorno.push(array[array.length - 1]);
  return arrayRetorno;  
};

console.log(returnarPrimeiroEUltimoElemento([1, 2, 3, 4, 5])); // [1, 5]