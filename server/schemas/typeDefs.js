const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Item {
    _id: ID
    title: String
    image: String
    price: Int
    quantity: Int
    status: String
  }

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    items: [Item!]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(username: String!): User
    users: [User]
    me: User
    items: [Item]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    addItem(title: String!, image: String!, price: Int, quantity: Int, status: String): Item
    removeItem(_id: ID!): User
  }

  `;

module.exports = typeDefs;