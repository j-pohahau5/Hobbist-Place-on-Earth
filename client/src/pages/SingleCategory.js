import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import HobbyList from '../components/HobbyList';
import HobbyForm from '../components/HobbyForm'
import { QUERY_SINGLE_CATEGORY } from '../utils/queries';

const SingleCategory = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  // When the user clicks on the link inside our app or enters the page's URL in the browser, we want only the associated tech friend's information to display on the page.
  // To do this, we first grab the needed profile id from the URL's parameter using the useParams() Hook:
  const singleCategory  = useParams();

  // Then, we use that profile id to query our data and return the associated tech friend's information:
  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, {
    // pass URL parameter
    variables: { categoryId: singleCategory.id },
  });

  const category = data?.category || {};

  console.log(singleCategory);
  console.log(category);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {category.title} <br />
        <span style={{ fontSize: '1rem' }}>
          One of my category is {category.title}

        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {category.description}
        </blockquote>
      </div>
          <div className='my-5'>
            <HobbyList hobbies={category.hobbies} />
          </div>
          <div>
            <HobbyForm category={category.title} categoryId={category._id} />
          </div>
    </div>
  );
};

export default SingleCategory;