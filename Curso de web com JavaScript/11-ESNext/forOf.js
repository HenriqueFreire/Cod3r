for (letra of 'Cod3r'){
  console.log(letra);
};

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma){
  console.log(i); // imprime o índice
};

for (let assunto of assuntosEcma){
  console.log(assunto); // imprime o valor
};

const assuntosMap = new Map([
  [ 'Map', { abordado: true } ],
  [ 'Set', { abordado: true } ],
  [ 'Promise', { abordado: false } ]
]);

for (let assunto of assuntosMap){
  console.log(assunto); // imprime o valor
};

for (let assunto of assuntosMap.keys()){
  console.log(assunto); // imprime o valor
};

for (let assunto of assuntosMap.values()){
  console.log(assunto); // imprime o valor
};

for (let [chave, valor] of assuntosMap.entries()){
  console.log(chave, valor); // imprime chave e valor
};

const s = new Set(['a', 'b', 'c']);
for (let letra of s){
  console.log(letra); // imprime o valor
};
