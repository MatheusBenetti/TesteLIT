const StudyClass = require('../models/StudyClass');

module.exports = {
  async index(req, res) {
    const { id } = req.params;

    //const loggedDev = await Dev.findById(user);
    //console.log(loggedDev);
    const users = await StudyClass.find();

    return res.json(users);
  },
};
