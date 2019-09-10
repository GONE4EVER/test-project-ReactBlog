const graphql = require('graphql');
// const _ = require('lodash');


const posts = require('../../frontend/resources/posts.json')
  .map(({ id, title, categoryId }) => ({ id, title, category: categoryId }));


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
} = graphql;

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    category: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const { id } = args;

        // code to get data from db / other source
        return posts.find((item) => item.id === id);
      },
    },
  },
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});
