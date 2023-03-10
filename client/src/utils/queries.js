import { gql } from '@apollo/client';



export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
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

export const QUERY_CATEGORY = gql`
  query getCategory($category: ID) {
    products(category: $category) {
      _id
      title
      description
      hobbies
    }
  }
`;

export const QUERY_ALL_COMMENTS = gql`
  {
    products {
      _id
      content
      user {
        firstname
      }
      hobby { category }
    }
  }
`;



export const QUERY_ALL_HOBBIES = gql`
  {
    products {
      _id
      title
      category {
        title
      }
    }
  }
`;