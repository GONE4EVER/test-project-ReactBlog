const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));


module.exports = app;
