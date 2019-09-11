const {
  GraphQLID,
  GraphQLList,
} = require('graphql');

const CategoryType = require('../types/Category');

const { categories } = require('../../temp');

const CategoryQuery = {
  getById() {
    return {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const { id } = args;

        // code to get data from db / other source
        return categories.find((item) => item.id === id);
      },
    };
  },
  getAll() {
    return {
      type: new GraphQLList(CategoryType),
      args: { id: { type: GraphQLID } },
      resolve() {
        // code to get data from db / other source
        return categories;
      },
    };
  },
};

/* const postsByCategory = {
  type: new GraphQLList(PostType),
  resolve(category) {
    return posts.filter((item) => item.categoryId === category.id);
  },
}; */


module.exports = CategoryQuery;
