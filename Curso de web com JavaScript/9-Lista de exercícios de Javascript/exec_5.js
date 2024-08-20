function verificarNumeros(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 >= num2;
  };
  return false;
};

console.log(verificarNumeros(2, 7)); // false