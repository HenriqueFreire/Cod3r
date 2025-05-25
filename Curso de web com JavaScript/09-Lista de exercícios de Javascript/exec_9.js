function simboloMais(vezes) {
  let resultado = '';
  
  for (let i = 0; i < vezes; i++) {
    resultado += '+';
  };

  return resultado;  
};

console.log(simboloMais(2)); // '++' 