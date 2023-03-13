import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import Select from 'react-select';
import { ADD_HOBBY } from '../../utils/mutations';
import { QUERY_CATEGORIES, QUERY_CATEGORY } from '../../utils/queries';

import Auth from '../../utils/auth';

const HobbyForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);

  const { loading, data } = useQuery(QUERY_CATEGORIES);

  const categories = data?.categories || [];

  const [addHobby, { loading: Loading, error: mutationError }] = useMutation(ADD_HOBBY, {
    update(cache, { data: { addHobby } }) {
      try{
        
        const { categories } = cache.readQuery({ query: QUERY_CATEGORY });
        const updatedCategories = categories.map((category) => {
          if (category._id === addHobby.categories[0]._id){
            return {
              ...category,
              hobbies: [...category.hobbies, addHobby],
            };
          } else {
            return category;
          }
        });
        cache.writeQuery({
          query: QUERY_CATEGORIES,
          data: { categories: updatedCategories}
        });
      } catch (e) {
        console.error(e)
      }
    },
 });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addHobby({
        variables: {
          title,
          description,
          categoryId: selectedCategory.value,
        },
      });
      
      setTitle('');
      setDescription('');
      setSelectedCategory(null);

    } catch (error) {
      console.error('Error creating hobby:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if(name === 'description' && value.length <= 280) {
      setDescription(value);
    } else {
      setTitle(value);
    }
    setCharacterCount(title.length + description.length);
  };

  const options = categories.map((category) => ({
    value: category._id,
    label: category.title,
  }))

  return (
    <div>
      <h3>Add a New Hobby</h3>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || mutationError ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
              value={title} 
              onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <input
                name='description'
                value={description} 
                onChange={handleChange}
              />
            </label>
            <label>
              Category:
              <Select
                options={options}
                value={selectedCategory}
                onChange={setSelectedCategory}
                isClearable 
              />
            </label>
            <button type="submit" disabled={!title || !description}>
              {loading ? 'Creating...' : 'Create Hobby'}
            </button>
            {mutationError && (
              <div className='col-12 my-3 bg-danger text-white p-3'>
                Error creating hobby: {mutationError.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a Hobby. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default HobbyForm;
