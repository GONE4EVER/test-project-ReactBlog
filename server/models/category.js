const { Schema, model } = require('mongoose');


const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Category', categorySchema);
