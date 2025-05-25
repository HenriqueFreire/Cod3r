function funcionarOuNao(valor, chanceDeErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceDeErro) {
      reject('Ocorreu um erro!');
    } else {
      resolve(valor);
    };
  });
};

funcionarOuNao('Testando...', 0.1)
  .then(valor => console.log(valor))
  .catch(error => console.log('Erro: ' + error));