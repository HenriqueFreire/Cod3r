const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination:(req, file, callback) => {
   callback(null, './uploads');
  },
  filename:(req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  }
})

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      return res.end('Erro ao fazer upload do arquivo.');
    };

    res.send('Arquivo enviado com sucesso!');
  });
});

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 1
  });
});

app.get('/parOuImpar', (req, res) => {
  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? 'par' : 'ímpar'
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});