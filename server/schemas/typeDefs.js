const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    hobbies: [Hobby]!
    comments: [Comment]!
    categories: [Category]!

  }

  type Category {
    _id: ID
    title: String
    description: String
    createdAt: String
    hobbies: [Hobby]!
    users: [User]!
  }

  type Comment {
    _id: ID
    content: String
    commentAuthor: String
    createdAt: String
    userId: [User]!
    HobbyId:[Hobby]!
  }
  type Category {
    _id: ID
    title: String
    description: String
    category: [Category]!
    users: [User]!
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addComment(
      thoughtId: ID!
      commentText: String!
      commentAuthor: String!
    ): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
