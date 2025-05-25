function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase); // aceita um único parametro
    }, segundos * 1000);
  });
};

falarDepoisDe(3, 'Que legal!')
  .then(frase => {
    console.log(frase);
  })
  .catch(erro => {
    console.log('Erro:', erro);
  });