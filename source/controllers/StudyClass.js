const StudyClass = require('../models/StudyClass');

module.exports = {
  async index(req, res) {
    const { id } = req.params;

    const classId = await StudyClass.findOne({ id });

    return res.json(classId);
  },

  async classWatched(req, res) {
    const { id } = req.params;

    const classWatched = await StudyClass.findOneAndUpdate(
      { id },
      { watched: true }
    );

    return res.json(classWatched);
  },

  async classNotWatched(req, res) {
    const { id } = req.params;

    const classWatched = await StudyClass.findOneAndUpdate(
      { id },
      { watched: false }
    );

    return res.json(classWatched);
  },
};
