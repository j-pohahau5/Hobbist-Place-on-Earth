import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_HOBBY = gql`
  mutation AddHobby($categoryId: ID!, $title: String!, $description: String!) {
    addHobby(categoryId: $categoryId, title: $title, description: $description) {
      _id
      title
      description
      categories {
        _id
        name
      }
    }
  }
`;

export default HobbyForm;