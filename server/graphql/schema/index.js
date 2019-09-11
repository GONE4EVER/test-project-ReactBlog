const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');

const { schemas: { categoryById } } = require('./category');
const { schemas: { postById } } = require('./post');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    postById,
    categoryById,
  },
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});
