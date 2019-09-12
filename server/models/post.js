const { Schema, model } = require('mongoose');


const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categoryID: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
  dislikes: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
  comments: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
});

module.exports = model('Post', postSchema);
