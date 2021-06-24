const mongoose = require('mongoose');

const StudyClassSchema = mongoose.Schema(
  {
    id: { type: Number, require: true },
    title: { type: String, require: true },
    watched: { type: Boolean, require: true },
  },
  { collection: 'Classes' }
);

module.exports = mongoose.model('StudyClass', StudyClassSchema);
