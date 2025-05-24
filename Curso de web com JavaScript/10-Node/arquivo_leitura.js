const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// leitura do arquivo de forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// leitura do arquivo de forma assíncrona
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}: ${config.db.port}`);  
})

// Válido para arquivos .json
const config = require('./arquivo.json');
console.log(config.db);

fs.readdir(__dirname, (erro, arquivos) => {
  console.log('Conteúdo da pasta...');
  console.log(arquivos);
})