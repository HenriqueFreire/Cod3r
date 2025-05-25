
setTimeout(() => {
  console.log('setTimeout');

  setTimeout(() => { 
    console.log('executando callback');

    setTimeout(() => {
      console.log('executando callback de setTimeout');
    }, 2000);
  }, 2000);
}, 2000);

function esperarPor (tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolvida');
    }, tempo);
  });
}

esperarPor(3000)
  .then(esperarPor())
  .then(esperarPor())
  .then(texto => console.log(texto))