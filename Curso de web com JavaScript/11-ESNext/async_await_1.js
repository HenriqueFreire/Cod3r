function esperarPor (tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(('Promise resolvida')), tempo);
  });
};

esperarPor()
  .then(esperarPor())
  .then(console.log('Promise resolvida'))
  .then(esperarPor())
  .then(console.log('Promise resolvida'))

async function executar() {
  let count = 0;
  await esperarPor();
  count++;
  console.log('Async/Await: Promise resolvida', count);
  await esperarPor();
  count++;
  console.log('Async/Await: Promise resolvida', count);
};

executar();
// Async/Await é uma forma mais simples de trabalhar com Promises
// A palavra-chave 'async' transforma uma função em uma Promise
// A palavra-chave 'await' faz com que a execução espere pela Promise ser resolvida