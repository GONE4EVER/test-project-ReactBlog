const {
  GraphQLID,
} = require('graphql');

const CategoryType = require('../type/category');
const { categories } = require('../../temp');


const categoryById = {
  type: CategoryType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    const { id } = args;

    // code to get data from db / other source
    return categories.find((item) => item.id === id);
  },
};


module.exports = {
  type: CategoryType,
  schemas: {
    categoryById,
  },
};
