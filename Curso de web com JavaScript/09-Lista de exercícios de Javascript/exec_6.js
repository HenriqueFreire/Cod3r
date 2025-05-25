function retornaInverso(params) {
  if (typeof params === 'number') {
    return -params;    
  };
  if (typeof params === 'boolean') {
    return !params;
  };
  return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof params}`;
};

console.log(retornaInverso(true)); // false
console.log(retornaInverso(2)); // -2
console.log(retornaInverso('2')); // booleano ou número esperados, mas o parâmetro é do tipo string