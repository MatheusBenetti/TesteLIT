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

  async store(req, res) {
    const { id, title } = req.headers;

    const idExists = await StudyClass.findOne({ id });

    if (idExists) {
      console.log(`Capítulo ${id} já existe!`);
      return res.json(idExists);
    }

    const newClass = await StudyClass.create({
      id,
      title,
      watched: false,
    });

    console.log(`Capítulo ${id} cadastrado!`);
    return res.json(newClass);
  },

  async delete(req, res) {
    const { id } = req.params;

    const idExists = await StudyClass.findOneAndDelete({ id });

    if (!idExists) {
      console.log(`Capítulo ${id} não encontrado!`);
    }

    console.log(`Capítulo ${id} removido!`);
    return res.json(idExists);
  },
};
