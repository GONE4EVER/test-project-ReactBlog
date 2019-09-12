const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

const schema = buildASTSchema(gql`
  #Queries
  type Query {
    posts: [Post]
    post(id: ID): Post
    categories: [Category]
    category(id: ID): Category
  }

  type Post {
    _id: ID!
    title: String!
    categoryID: String!
    createdAt: String!
    text: String!
    likes: [ID!]!
    dislikes: [ID!]!
    comments: [ID!]!
  }
  
  input PostInput {
    title: String!
    categoryID: String!
    createdAt: String!
    text: String!
    likes: [ID!]!
    dislikes: [ID!]!
    comments: [ID!]!
  }
`);
