// Não aceita valores duplicados e não é indexado

const times = new Set();
times.add('Vasco');
times.add('Flamengo');
times.add('Corinthians');
times.add('Vasco'); // Não aceita valores duplicados

console.log(times); // Set(3) { 'Vasco', 'Flamengo', 'Corinthians' }
console.log(times.size); // 3
console.log(times.has('Vasco')); // true
console.log(times.has('São Paulo')); // false
console.log(times.delete('Vasco')); // true
console.log(times); // Set(2) { 'Flamengo', 'Corinthians' }
console.log(times.size); // 2

const times2 = new Set(['Vasco', 'Flamengo', 'Corinthians']);
console.log(times2); // Set(3) { 'Vasco', 'Flamengo', 'Corinthians' }
console.log(times2.size); // 3
console.log(times2.has('Vasco')); // true
console.log(times2.has('São Paulo')); // false
console.log(times2.delete('Vasco')); // true
console.log(times2); // Set(2) { 'Flamengo', 'Corinthians' }
console.log(times2.size); // 2
console.log(times2.has('Vasco')); // false