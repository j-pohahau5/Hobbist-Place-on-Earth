import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY } from '../../utils/mutations';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { withSwal } from 'react-sweetalert2';
import Swal from 'sweetalert2';
import Auth from '../../utils/auth';

const CategoryForm = ({ swal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addCategory, { loading, error }] = useMutation(ADD_CATEGORY, {
    update(cache, { data: { addCategory } }) {
      try {
        const { categories } = cache.readQuery({ query: QUERY_CATEGORIES })
        cache.writeQuery({
          query: QUERY_CATEGORIES,
          data: { categories: [...categories, addCategory] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'description') {
      setDescription(value);
    } if (name === 'title') {
      setTitle(value);
    }

    setCharacterCount(title.length + description.length);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addCategory({
        variables: {
          title,
          description,
        },
      });

      setTitle('');
      setDescription('');
      setCharacterCount(0);

      swal.fire({
        icon: 'success',
        title: 'Category added!',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h5>Add a New Category</h5>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
              }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Title:   
            </label>
            <input
              name='title'
              value={title}
              onChange={handleChange}
            />

            <label>
              Description:
            </label>
            <input
              name='description'
              value={description}
              onChange={handleChange}
            />

            <div>
              <button type="submit" disabled={!title || !description}>
                {loading ? 'Creating...' : 'Create Category'}
              </button>
            </div>

            {error && (
              <div className='col-12 my-3 bg-danger text-white p-3'>
                Error creating Category: {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a Category. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

export default withSwal(CategoryForm, { Swal });
