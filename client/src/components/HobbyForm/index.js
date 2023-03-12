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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChnage={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChage={(e) => setDescription(e.target.value)}/>
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Hobby'}
      </button>
      {error && <p>Error creating hobby: {error.message}</p>}
    </form>
  );
}

export default HobbyForm;