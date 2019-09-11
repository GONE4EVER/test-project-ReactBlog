const {
  GraphQLID,
  GraphQLList,
} = require('graphql');

const PostType = require('../types/Post');

const { posts } = require('../../temp');


const PostQuery = {
  getById() {
    return {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const { id } = args;

        // code to get data from db / other source
        return posts.find((item) => item.id === id);
      },
    };
  },
  getAll() {
    return {
      type: new GraphQLList(PostType),
      args: { id: { type: GraphQLID } },
      resolve() {
        // code to get data from db / other source
        return posts;
      },
    };
  },

};


module.exports = PostQuery;
