const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://TesteLIT:TesteLIT@lit.4vusp.mongodb.net/LIT?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'API ok!' });
});

app.use(routes);

app.listen(3333, () => {
  console.log('API running on port 3333');
});
