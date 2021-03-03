// const { gql } = require('apollo-boost')

module.exports = `
  type Mutation {
    addUser(input: AddUser!): Int!
    updateScore(id: ID!, newScore: Int!): User
  }

  type Query {
    allUsers: [User!]!
    userByName(displayName: String!): User
  }

  type User {
    id: ID!
    displayName: String!
    score: Int!
    rank: Int!
    createdAt: String!
    updatedAt: String!
  }

  input AddUser {
    displayName: String!
  }
`