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
    users: [User]! 
    hobbies: [Hobby]!

  }

  type Comment {
    _id: ID
    content: String
    likes: Int
    disLikes: Int
    users: [User]!
    hobbies:[Hobby]!
  }

  type Hobby {
    _id: ID
    title: String
    description: String
    likes: Int
    disLikes: Int

    comments: [Comment]!
    categories: [Category]!
    users: [User]!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    categories: [Category]!
    category(categoryId: ID!): Category
    hobbies(categories: ID!): [Hobby]
    hobby(hobbyId: ID!): Hobby
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCategory(title: String!, description: String!): Category
    addHobby(categoryId: ID!, title: String!, description: String!): Hobby
    addComment(hobbyId: ID!, content: String!): Comment
    addHobbyLike(_id: String!, likes: Int!): Hobby
    addCommentLike(_id: String!, likes: Int!): Comment
    addHobbyDislike(_id: String!, dislikes: Int!): Hobby
    addCommentDislike(_id: String!, dislikes: Int!): Comment
    removeCategory(categoryId: ID!): Category
    removeHobby(hobbyId: ID!): Hobby
    removeComment(hobbyId: ID!, commentId: ID!): Comment
    removeHobbyLike(_id: String!, likes: Int!): Hobby
    removeCommentLike(_id: String!, likes: Int!): Comment
    removeHobbyDislike(_id: String!, dislikes: Int!): Hobby
    removeCommentDislike(_id: String!, dislikes: Int!): Comment
  }
`;

module.exports = typeDefs;
