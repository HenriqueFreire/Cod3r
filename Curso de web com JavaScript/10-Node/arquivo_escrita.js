const fs = require('fs');

const Produto = {
  nome: 'Produto Exemplo',
  descricao: 'Descrição do produto exemplo',
  preco: 10.99,
  estoque: 100
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(Produto), (error) => {
  console.log(error || 'Arquivo gerado com sucesso');
})