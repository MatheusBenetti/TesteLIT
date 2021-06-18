const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'API ok',
  });
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});
