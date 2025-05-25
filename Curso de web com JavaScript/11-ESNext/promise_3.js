function gerarNumeros (min, max) {
  return new Promise((resolve, reject) => {
    if (min > max) {
      [max, min] = [min, max];
    };

    const fator = max - min + 1;
    const numero = Math.floor(Math.random() * fator) + min;
    resolve(numero);
  });
};

gerarNumeros(1, 10)
  .then((numero) => {
    console.log(`Gerou o número ${numero}`);
    return gerarNumeros(1, 10);
  })
  .then(numero => console.log(`Gerou o número ${numero}`))
