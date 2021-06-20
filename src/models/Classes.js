const { Schema, model } = require('mongoose');

const classSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { collection: 'classes', strict: false }
);

const Class = model('Class', classSchema);

module.exports = {
  find: (criteria) => {
    const { q, limit, fields } = criteria;
    const query = Class.find();
    if (q) {
      const regex = new RegExp(`.*${q}.*`, 'i');
      const searchQuery = { title: regex };
      query.find(searchQuery);
    }
    if (limit) query.limit(limit);
    if (fields) query.select(fields.split(','));

    return query.exec();
  },
};
