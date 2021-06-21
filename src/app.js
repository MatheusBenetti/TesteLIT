const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const connect = require('./models/index');
const classRouter = require('./routes/class');

const app = express();
connect();

app.use(express.json());

const aula1 = [
  { id: 1, aula: '01 - Introdução' },
  { id: 2, aula: '02 - Primeiro Function Components' },
  { id: 3, aula: '03 - Formas de criar componentes' },
  { id: 4, aula: '04 - Facilitando a prototipação' },
  { id: 5, aula: '05 - Faça como eu fiz na aula' },
  { id: 6, aula: '06 - O que aprendemos?' },
];

app.get('/', (req, res) => {
  return res.json({
    message: 'API ok',
  });
});

app.get('/aula1', (req, res) => {
  return res.json(aula1);
});

app.get('/aula1/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const aula = aula1.find((item) => item.id === id);
  const status = aula ? 200 : 404;

  return res.status(status).json(aula);
});

app.use('/', classRouter);

app.listen(3000, () => {
  console.log('API running on port 3000');
});
