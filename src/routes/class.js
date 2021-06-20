const express = require('express');
const Classes = require('../models/Classes');
const router = express.Router();

router.get('/', async (req, res) => {
  const criteria = {
    limit: 10,
    fields: 'title',
    q: '',
  };

  const result = await Classes.find(criteria);

  return res.json({ message: 'Aulas ok', data: result });
});

module.exports = router;
