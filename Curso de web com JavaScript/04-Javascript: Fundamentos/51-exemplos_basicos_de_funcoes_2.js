const imprimirSoma = function (a, b = 0) {
  console.log(a + b)
}

imprimirSoma(2, 3)

const soma = (a, b = 0) => {
  return a + b
}

console.log(soma(2, 3))

const soma2 = (a, b = 0) => a + b
console.log(soma2(2, 3))