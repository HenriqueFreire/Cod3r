function retorneNumeros(arrayParams) {
  return arrayParams.filter(function (item) {
    return typeof item === 'number';
  });
};

console.log(retorneNumeros([1, 'a', 2, 'b', 3, 'c'])); // [1, 2, 3]