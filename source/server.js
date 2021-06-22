const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const dotenv = require('dotenv');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'API ok!' });
});

app.use(routes);

app.listen(3333, () => {
  console.log('API running on port 3333');
});
