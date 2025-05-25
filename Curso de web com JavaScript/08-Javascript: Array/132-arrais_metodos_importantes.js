const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ]
pilotos.pop() // remove o último elemento do array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen') // adiciona um elemento no final do array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // adiciona um elemento no início do array
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

pilotos.splice(3, 1) // remove
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do índice 2
console.log(algunsPilotos1) // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) // novo array do índice 1 até o 4 (sem incluir o 4)
console.log(algunsPilotos2) // [ 'Alonso', 'Bottas', 'Raikkonen' ]