console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bota'
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome
}

const obj2 = new Obj('carteira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)