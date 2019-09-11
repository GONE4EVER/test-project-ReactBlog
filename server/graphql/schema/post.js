const {
  GraphQLID,
} = require('graphql');

const PostType = require('../type/post');
const { posts } = require('../../temp');


const postById = {
  type: PostType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    const { id } = args;

    // code to get data from db / other source
    return posts.find((item) => item.id === id);
  },
};


module.exports = {
  type: PostType,
  schemas: {
    postById,
  },
};
