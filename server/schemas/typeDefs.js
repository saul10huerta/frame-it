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
    firstName: String
    lastName: String
    email: String
    
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