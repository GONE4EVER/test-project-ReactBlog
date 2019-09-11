const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require('graphql');
const { schemas: { categoryById } } = require('../schema/category');


const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    category: categoryById,
  }),
});

module.exports = PostType;
