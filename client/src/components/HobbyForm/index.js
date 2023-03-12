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

function HobbyForm(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [addHobby, { loading, error}] = useMutation(ADD_HOBBY);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addHobby({
        variables: {
          categoryId: category,
          title,
          description,
        },
      });
      
      setTitle('');
      setDescription('');
      setCategory('');

      console.log('New hobby created:', response.data.addHobby);
    } catch (error) {
      console.error('Error creating hobby:', error);
    }
  };
}
export default HobbyForm;