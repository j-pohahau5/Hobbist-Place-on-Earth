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
    hobbies {
      _id
      title
      description
      hobbies
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
    category {
      _id
      title
      description
    }
  }
`;

export const QUERY_ALL_COMMENTS = gql`
  {
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
  {
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
  query getSingleHobby($hobbyId: ID!) {
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