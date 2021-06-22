const { Schema, model } = require('mongoose');

const ClassSchema = new Schema({
  id: { type: Number, require: true },
  title: { type: String, require: true },
  watched: { type: Boolean, require: true },
});

module.exports = model('Class', ClassSchema);
