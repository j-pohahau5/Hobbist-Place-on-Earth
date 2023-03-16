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

export const REMOVE_CATEGORY = gql`
  mutation removeCategory($categoryId: ID!) {
    removeCategory(categoryId: $categoryId) {
      _id
    }
    
  }
`;

export const DELETE_HOBBY = gql`
  mutation removeHobby($hobbyId: ID!, $categoryId: ID!) {
    removeHobby(hobbyId: $hobbyId, categoryId: $categoryId) {
      _id
    }
    
  }
`;

export const DELETE_COMMENT = gql`
  mutation removeComment($hobbyId: ID!, $commentId: ID!) {
    removeComment(hobbyId: $hobbyId, commentId: $commentId) {
      _id
    }
    
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory ( $title: String!, $description: String!){
    addCategory ( title: $title, description: $description) {

      title
      description

    }
  }
`;

export const ADD_HOBBY = gql`

mutation addHobby ($categories: ID!, $title: String!, $description: String!){
  addHobby ( categories: $categories, title: $title, description: $description) {

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
mutation addComment ( $hobbies: ID!, $content: String! ){
  addComment ( hobbies: $hobbies, content: $content ) {
    content
    hobbies {
      _id
      title
    } 
    users {
      username
    }
    
  }
  
}
`;
// users {
//       _id
//     }
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
