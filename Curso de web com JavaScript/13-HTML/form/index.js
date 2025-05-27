const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  res.send(`<h1>Parabéns, ${name}!</h1>`);
});

app.post('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(req.params);
  res.send(`<h1>Parabéns, ${name}! Dados alterados com sucesso.</h1>`);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));