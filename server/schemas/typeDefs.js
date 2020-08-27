const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    title: String
    image: String
    price: Float
    quantity: Int
    status: String
    likes: Int
  }
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    items: [Item]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    user: User
    users: [User]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
  }
  `;

module.exports = typeDefs;