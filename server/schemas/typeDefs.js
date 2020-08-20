const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Item {
    title: String
    image: String
    price: Float
    quantity: Int
    status: String
    likes: Int
    dislikes: Int
  }

  type User {
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
  }
  `;

module.exports = typeDefs;