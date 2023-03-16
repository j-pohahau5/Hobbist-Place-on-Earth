import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import Select from 'react-select';
import { ADD_HOBBY } from '../../utils/mutations';
import { QUERY_CATEGORIES, QUERY_SINGLE_CATEGORY } from '../../utils/queries';

import Auth from '../../utils/auth';
import { withSwal } from 'react-sweetalert2';

const HobbyForm = ({ category, swal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);
//   const HobbyFormWithSwal = withSwal(HobbyForm);
  const { loading, data } = useQuery(QUERY_CATEGORIES);

  const categories = data?.categories || [];
  
  const options = categories.map((category) => ({
    value: category._id,
    label: category.title,
  }))
  
  const [categoriesOptions, setCategoriesOptions] = useState([]);

  useEffect(() => {
    setCategoriesOptions(categories.map((category) =>({
      value: category._id,
      label: category.title,
    })))
  }, [categories]);

  useEffect(() => {
    if (category){
      const option = categoriesOptions.find((option) => option.label === category);
      if (option !== selectedCategory) {
      setSelectedCategory(option);
      }
    }  
  }, [category, categoriesOptions, selectedCategory]);

  const [addHobby, { loading: Loading, error: mutationError }] = useMutation(ADD_HOBBY, {
    update(cache, { data: { addHobby } }) {
      try{
        
        const { categories } = cache.readQuery({ query: QUERY_SINGLE_CATEGORY });
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
          categories: selectedCategory.value,
        },
      });
  
      setTitle('');
      setDescription('');
      setSelectedCategory(null);
  
      // Display success alert
      swal.fire({
        title: 'Comment added',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        window.location.reload();
      });
  
      // Refresh the page after a short delay
      setTimeout(() => window.location.reload(), 2000);
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
              {Loading ? 'Creating...' : 'Create Hobby'}
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

export default withSwal(HobbyForm);
