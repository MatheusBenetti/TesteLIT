const { Schema, model } = require('mongoose');

const classSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { collection: 'LIT', strict: false }
);

const Class = model('Class', classSchema);

module.exports = {
  find: (criteria) => {
    const { q, limit } = criteria;
    const query = Class.find();
    if (q) {
      const regex = new RegExp(`.*${q}.*`, 'i');
      const searchQuery = { title: regex };
      query.find(searchQuery);
    }
    if (limit) query.limit(limit);

    return query.exec();
  },
};
