import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory ( $title: String!, $description: String!){
    addCategory ( title: $title, description: $description) {
      _id
      title
      description
      hobby {
        _id
        title
      }
      user {
        _id
      }
    }
    
  }
`;

export const ADD_HOBBY = gql`
mutation addHobby ( $title: String!, $description: String!){
  addHobby ( title: $title, description: $description) {
    title
    description
    category {
      _id
      title
    }
    user {
      _id
    }
  }
  
}
`;