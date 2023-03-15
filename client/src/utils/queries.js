import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query users {
    users {
      _id
      email
      username
      hobbies{
        _id
        title
        description
      }
      comments{
        _id
        content
      }

    }
  }
`;

export const QUERY_ALL_HOBBIES = gql`
query hobbies($categories: ID! ) {
  hobbies(categories: $categories) {
    _id
    title
    description
    categories{
      _id
      title
      description
    }

  }  
}
`;

export const QUERY_SINGLE_CATEGORY = gql`
  query category($categoryId: ID! ) {
    category(categoryId: $categoryId) {
      _id
      title
      description

    }  
  }
`;

export const QUERY_CATEGORIES = gql`
  query categories {
    categories {
      _id
      title
      description
      hobbies{
        _id
        title
        description
      }
    }
  }
`;

export const QUERY_ALL_COMMENTS = gql`
  query comments{
    comments {
      _id
      content
      users {
        username
      }
      hobbies { category }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments($hobbies: ID!) {
    comments(hobbies: $hobbies) {
      _id
      content
      hobbies{
        _id
        title
        description
      }
      users {
        _id
        username
        
      }
    }
  }
`;


export const QUERY_SINGLE_HOBBY = gql`
  query hobby($hobbyId: ID!) {
    hobby(hobbyId: $hobbyId) {
      _id
      title
      description
      categories {
        title
      }
      comments {
        _id
        content
        users {
          _id
          username
          
        }
      }
      users {
        _id
        username
        
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      hobbies{
        _id
        title
        description
      }
    }
  }
`;

