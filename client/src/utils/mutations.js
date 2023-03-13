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
mutation addHobby ( $categoryId: ID!, $title: String!, $description: String!){
  addHobby ( categoryId: $categoryId, title: $title, description: $description) {
    title
    description
    categories {
      _id
      title
    }
    users {
      _id
    }
  }
  
}
`;

export const ADD_COMMENT = gql`
mutation addComment ( $content: String! ){
  addComment ( content: $content ) {
    content
    hobbies {
      _id
      title
    }
    users {
      _id
    }
  }
  
}
`;

export const ADD_HOBBY_LIKE = gql`
mutation addHobbyLike ($_id: String!, $likes: Int!){
  addHobbyLike ( likes: $likes ) {
    likes
  }
}
`;

export const ADD_COMMENT_LIKE = gql`
mutation addCommentLike ($_id: String!, $likes: Int!){
  addCommentLike ( likes: $likes ) {
    likes
  }
}
`;

export const ADD_HOBBY_DISLIKE = gql`
mutation addHobbyDislike ($_id: String!, $dislikes: Int!){
  addHobbyLike ( dislikes: $dislikes ) {
    dislikes
  }
  
}
`;

export const ADD_COMMENT_DISLIKE = gql`
mutation addCommentDislike ($_id: String!, $dislikes: Int!){
  addCommentLike ( dislikes: $dislikes ) {
    dislikes
  }
  
}
`;

