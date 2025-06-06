// com promise

const http = require('http');

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = '';
  
      res.on('data', dados => {
        resultado += dados;
      });
  
      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado));
        } catch(e) {
          reject(e);
        };
      });
    });  
  });
};

let nomes = [];

getTurma('A').then(alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
  getTurma('B').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
    getTurma('C').then(alunos => {
      nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});

Promise.all([
  getTurma('A'),
  getTurma('B'),
  getTurma('C')
]).then(turmas => {
  const nomes = [].concat(...turmas).map(aluno => aluno.nome);
  console.log(nomes);
}).catch(e => {
  console.log(e);
});