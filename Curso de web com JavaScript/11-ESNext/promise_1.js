let b = new Promise(cumprirPromessa => {
  cumprirPromessa('ok'); // Aceita um único parametro
});

console.log(typeof b);

b
.then(valor => console.log(valor))
.catch(erro => console.log(erro))