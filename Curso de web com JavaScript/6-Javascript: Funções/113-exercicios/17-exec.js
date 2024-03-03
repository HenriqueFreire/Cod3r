function calculaReajuste(plano, salarioAtual) {
  switch (plano) {
    case 'A': return salarioAtual * 1.1
    case 'B': return salarioAtual * 1.15
    case 'C': return salarioAtual * 1.2
    default:  return 'Plano inválido.'
  }
}

console.log(calculaReajuste('A', 1000))
console.log(calculaReajuste('B', 1000))
console.log(calculaReajuste('C', 1000))
console.log(calculaReajuste('D', 1000))