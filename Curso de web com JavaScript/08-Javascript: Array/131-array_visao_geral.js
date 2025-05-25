console.log(typeof Array, typeof new Array, typeof []); // function object object

let aprovados = new Array('Bianca', 'Carla', 'Mônica');
console.log(aprovados); // [ 'Bianca', 'Carla', 'Mônica' ]

aprovados = ['Bianca', 'Carla', 'Mônica'];
console.log(aprovados[0]); // Bianca
console.log(aprovados[1]); // Carla
console.log(aprovados[2]); // Mônica
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paula';
aprovados.push('Mariana');
console.log(aprovados.length); // 5
aprovados[9] = 'Rafaela';
console.log(aprovados.length); // 10
console.log(aprovados[8] === undefined); // true
console.log(aprovados); // [ 'Bianca', 'Carla', 'Mônica', 'Paula', 'Mariana', <4 empty items>, 'Rafaela' ]
aprovados.sort();
console.log(aprovados); // [ 'Bianca', 'Carla', 'Mariana', 'Mônica', 'Paula', 'Rafaela', <4 empty items> ]
delete aprovados[1]; 
console.log(aprovados[1]); // undefined
console.log(aprovados[2]); // Mariana

aprovados.splice(1, 1, 'Carla',);
console.log(aprovados); // [ 'Bianca', 'Carla', 'Mariana', 'Mônica', 'Paula', 'Rafaela', <4 empty items> ]
aprovados.splice(6, 4);
console.log(aprovados); // [ 'Bianca', 'Carla', 'Mariana', 'Mônica', 'Paula', 'Rafaela' ]
