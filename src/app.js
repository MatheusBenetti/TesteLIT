const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const connect = require('./models/index');
const classRouter = require('./routes/class');

const app = express();
connect();

app.get('/', (req, res) => {
  return res.json({
    message: 'API ok',
  });
});

app.use('/aula1', classRouter);

app.listen(3000, () => {
  console.log('API running on port 3000');
});
