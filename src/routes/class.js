const express = require('express');
const Classes = require('../models/Classes');
const router = express.Router();

router.get('/aula', async (req, res) => {
  const criteria = {
    limit: 10,
    q: 'Introdução',
  };

  const result = await Classes.find(criteria);

  return res.json({ data: result });
});

module.exports = router;
