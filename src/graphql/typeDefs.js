// const { gql } = require('apollo-boost')

module.exports = `
  type Mutation {
    addUser(input: AddUser!): User
    updateScore(id: ID!): User!
  }

  type Query {
    allUsers: [User!]!
    userByName(displayName: String!, password: String!): User
  }

  type User {
    id: ID!
    displayName: String!
    email: String!
    password: String!
    score: Int!
    rank: Int!
    createdAt: String!
    updatedAt: String!
  }

  input AddUser {
    displayName: String!
    password: String!
  }
`