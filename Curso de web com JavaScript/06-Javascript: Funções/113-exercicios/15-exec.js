function escolherCaroo(modelo) {
  switch (modelo) {
    case 'hatch': return 'Compra efetuada com sucesso.'
    case 'sedan': 
    case 'motocicleta':
    case 'caminhonete': return 'Tem certeza que não prefere este modelo?'
    default: return 'Não trabalhamos com este tipo de automóvel aqui.'
  }
}

console.log(escolherCaroo('hatch'))
console.log(escolherCaroo('motocicleta'))
console.log(escolherCaroo('sedan'))
console.log(escolherCaroo('caminhonate'))
console.log(escolherCaroo('jetski'))