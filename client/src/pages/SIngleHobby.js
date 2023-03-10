import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_HOBBY } from '../utils/queries';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:thoughtId`
  const { hobbyId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_HOBBY, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { hobbyId: hobbyId },
  });

  const hobby = data?.hobby || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {hobby.title} <br />
        <span style={{ fontSize: '1rem' }}>
          One of my hobby is {hobby.title}
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

export default SingleThought;