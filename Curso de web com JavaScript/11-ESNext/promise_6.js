const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminho, 'utf8', (erro, dados) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(dados);
      }
    });
  });
};

lerArquivo(caminho)
  .then(dados => {
    console.log(dados);
  })
  .catch(erro => {
    console.error('Erro ao ler o arquivo:', erro);
  });
// A função lerArquivo lê o conteúdo de um arquivo e retorna uma Promise.
// Se a leitura for bem-sucedida, a Promise é resolvida com os dados do arquivo.
// Se ocorrer um erro, a Promise é rejeitada com o erro.
// O método then é usado para lidar com o resultado da Promise resolvida,
// enquanto o método catch é usado para lidar com erros.