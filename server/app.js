const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const graphqlHTTP = require('express-graphql');

const PORT = process.env.PORT || 4000;

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@myprettycluster-xizbr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;


const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/graphql', graphqlHTTP({
  schema: {},
  rootValue: {},
  graphiql: true,
}));


mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running a GraphQL API server at localhost:${PORT}`);
    });
  })
  .catch(console.error);
