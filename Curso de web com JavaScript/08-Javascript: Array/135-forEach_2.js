Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    };
};

const aprovados = ['Agatha', 'Amélia', 'Daniela', 'Raquel'];

aprovados.forEach(function(nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`)
  console.log(array);
});