import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      Auth {
        token: ID!
        user: User
      }

    }
  }
`;

