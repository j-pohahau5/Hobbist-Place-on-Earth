const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    hobbyId: [Hobby]!
    comments: [Comment]!
    categories: [Category]!
  }

  type Category {
    _id: ID
    title: String
    description: String
    hobbies: [Hobby]!
    users: [User]!
  }

  type Comment {
    _id: ID
    content: String
    userId: [User]!
    HobbyId:[Hobby]!
  }

  type Hobby {
    _id: ID
    title: String
    description: String

    comments: [Comment]!
    categories: [Category]!

    users: [User]!
    comments: [Comment]!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    categories: [Category]
    category(categoryId: ID!): Category
    hobbies: [Hobby]
    hobby(hobbyId: ID!): Hobby
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logoutUser: logoutMessage
    addCategory(title: String!, description: String!): Category
    addHobby(categoryId: ID!, title: String!, description: String!): Hobby
    addComment(hobbyId: ID!, content: String!): Hobby
    removeCategory(categoryId: ID!): Category
    removeHobby(hobbyId: ID!, categoryId: ID!): Hobby
    removeComment(hobbyId: ID!, commentId: ID!): Comment
  }

  type logoutMessage {
    message: String!
  }
`;
// 
module.exports = typeDefs;
