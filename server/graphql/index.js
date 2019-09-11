const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const PostQuery = require('./queries/Post');
const CategoryQuery = require('./queries/Category');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: PostQuery.getById(),
    posts: PostQuery.getAll(),
    category: CategoryQuery.getById(),
    categories: CategoryQuery.getAll(),
  },
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});
