const categories = require('../../frontend/resources/categories.json');

const posts = require('../../frontend/resources/posts.json')
  .map(({ id, title, categoryId }) => ({ id, title, categoryId }));

module.exports = {
  categories,
  posts,
};
