removerPropriedade = function(obj, prop) {
    const novoObj = { ...obj };
    delete novoObj[prop];
    return novoObj;
};

let pessoa = { nome: 'Jenifer', idade: 20 };

console.log(removerPropriedade(pessoa, 'idade')); // { nome: 'Jenifer' }
console.log(Object.is(removerPropriedade(pessoa, 'idade'), pessoa)); // false)