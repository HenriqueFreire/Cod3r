// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5

const dobro = a => a * 2;
console.log(dobro(4)); // 8

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});

lexico1(); // true
lexico2(); // true

// Parâmetros Default
function log(text = 'Node') {
  console.log(text);
}
log(); // Node
log('Sou mais forte'); // Sou mais forte

// Operador Rest
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => total += n);
  return total;
}
console.log(total(1, 2, 3, 4, 5)); // 15

// Spread
const numeros = [1, 2, 3, 4, 5];
const outrosNumeros = [6, 7, 8, 9, 10];
const todosNumeros = [...numeros, ...outrosNumeros];
console.log(todosNumeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
