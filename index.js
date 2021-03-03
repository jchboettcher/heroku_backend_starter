// const express = require('express');
// const bodyParser = require('body-parser');
// const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
// const { makeExecutableSchema } = require('graphql-tools');
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./src/graphql/typeDefs')
const resolvers = require('./src/graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: true,
    credentials: true,
  }
});

// The `listen` method launches a web server.
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
// Put together a schema
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// // Initialize the app
// const app = express();

// // The GraphQL endpoint
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// // GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// const port = process.env.PORT || "4000";

// // Start the server
// app.listen(port, () => {
//   console.log('Go to http://localhost:4000/graphiql to run queries!');
// });