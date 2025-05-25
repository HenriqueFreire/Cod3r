function retornarSomenteParesDeNumerosPares(arrayParams) {
  return arrayParams.filter((item, index) => {
    return item % 2 === 0 && index % 2 === 0;  
  });
};

console.log(retornarSomenteParesDeNumerosPares([1, 2, 4, 7, 0, 7, 8, 9, 6])); // [2, 6, 10]