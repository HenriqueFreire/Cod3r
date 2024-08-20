const quaseArray = { 0: 'Rafaela', 1: 'Ana', 2: 'Bruna' };
console.log(quaseArray); // { '0': 'Rafaela', '1': 'Ana', '2': 'Bruna' }

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
});

console.log(quaseArray[0]); // Rafaela