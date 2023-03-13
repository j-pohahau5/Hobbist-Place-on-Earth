import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';
// import HobbyList from '../components/HobbyList';
// import HobbyForm from '../components/HobbyForm';

import { QUERY_CATEGORY } from '../utils/queries';

const SingleCategory = () => {
  const { categoryId } = useParams();

  const { loading, data } = useQuery(QUERY_CATEGORY, {
    variables: { categoryId: categoryId },
  });

  const category = data?.category || {};

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

        </blockquote>
      </div>

    </div>
  );
};

export default SingleCategory;