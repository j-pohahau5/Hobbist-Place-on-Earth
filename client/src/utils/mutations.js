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

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory ( $title: $title, $description: $description){
    addCategory ( $title: $title, $description: $description) {
      _id
      title
      description
      hobby {
        _id
        title
      }
      user {
        _id
        firstname
      }
    }
    
  }
`;

export const ADD_HOBBY = gql`
mutation addHobby ( $title: $title, $description: $description){
  addHobby ( $title: $title, $description: $description) {
    title
    description
    category {
      _id
      title
    }
    user {
      _id
      firstname
    }
  }
  
}
`;