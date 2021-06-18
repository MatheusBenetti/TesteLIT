const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'API ok',
  });
});

app.get('/aula1', (req, res) => {
  return res.json({
    message: 'Colocar arquivo JSON com as aulas aqui',
  });
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});
