const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const PostType = require('./Post');

/* const { posts } = require('../../temp'); */


const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLString },
    name: { type: GraphQLString },
    posts: {
      type: new GraphQLList(PostType),
    },
  }),
});

module.exports = CategoryType;
