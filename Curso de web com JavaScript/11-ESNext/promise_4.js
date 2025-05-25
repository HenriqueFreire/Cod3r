function gerarNumeros (min, max, tempo) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const numero = parseInt(Math.random() * fator) + min;
      resolve(numero);
    }, (tempo * 1000));
  });
};

function gerarVariosNumeros (min, max, delays) {
  return Promise.all(
    delays.map((tempo) => gerarNumeros(min, max, tempo))
  );
};

gerarVariosNumeros(1, 60, [1, 3, 2, 4, 6])
  .then((numeros) => console.log(numeros))
.catch((erro) => console.error('Erro ao gerar números:', erro));
