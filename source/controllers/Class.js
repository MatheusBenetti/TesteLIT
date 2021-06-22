const Class = require('../models/Class');

module.exports = {
  async index(req, res) {
    const { name } = req.headers;

    const classes = await Class.findById(name);

    return res.json(classes);
  },
};
