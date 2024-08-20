function objetoParaArray(objeto) {
  let array = [];
  for (let key in objeto) {
    array.push([key, objeto[key]]);
  };

  return array;
};

console.log(objetoParaArray(
  {
     nome: "Helena", 
    profissao: "Desenvolvedora de software" 
  }
)); // [ [ 'nome', 'Helena' ], [ 'profissao', 'Desenvolvedora de software' ] ]