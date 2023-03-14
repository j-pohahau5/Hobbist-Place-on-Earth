import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query users{
    user {
      _id
      username
      email
      categories {
        _id
        title
        description
        hobbies {
          _id
          title
          description
        }
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
      hobbies{
        _id
        title
        description
      }

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
      user {
        username
      }
      hobby { category }
    }
  }
`;



export const QUERY_ALL_HOBBIES = gql`
 query hobbies{
    hobbies {
      _id
      title
      categories {
        title
      }
    }
  }
`;

export const QUERY_SINGLE_HOBBY = gql`
  query hobby($hobbyId: ID!) {
    hobby(hobbyId: $hobbyId) {
      _id
      title
      categories {
        title
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      categories {
        _id
        title
        hobby {
          _id
          title
          description
        }
      }
    }
  }
`;
