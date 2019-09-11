const categories = require('../../frontend/resources/categories.json');

const posts = require('../../frontend/resources/posts.json')
  .map(({
    id, title, createdAt, text, categoryId,
  }) => ({
    id, title, createdAt, text, categoryId,
  }));

module.exports = {
  categories,
  posts,
};
