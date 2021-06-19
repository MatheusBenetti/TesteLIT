const { Schema, model } = require('mongoose');

const classSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    watched: Boolean,
  },
  { collection: 'classes', strict: false }
);

const Class = model('Class', classSchema);

module.exports = {
  find: (criteria) => {
    return Class.find(criteria);
  },
};
