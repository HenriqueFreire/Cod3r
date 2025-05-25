function gerarNumeros (min, max, numerosProibidos) {
  return new Promise((resolve, reject) => {
    if (min > max) {
      [max, min] = [min, max];
    };

    const fator = max - min + 1;
    const numero = Math.floor(Math.random() * fator) + min;
      
    if (numerosProibidos.includes(numero)) {
      reject(`Número repetido: ${numero}`);
    }else {
      resolve(numero);
    };
  });
};

async function gerarMegaSena(quantidadeDeNumeros) {
  const numerosSorteados = [];
  for (let i = 0; i < quantidadeDeNumeros; i++) {
    try {
      const numero = await gerarNumeros(1, 60, numerosSorteados);
      numerosSorteados.push(numero);
    } catch (e) {
      i--; // Retry if a duplicate number is generated
    };
  };
  return numerosSorteados.sort((a, b) => a - b);
};

// Generate 6 random numbers for a Mega Sena lottery
gerarMegaSena(6)
  .then(console.log)
  .catch(console.error);
