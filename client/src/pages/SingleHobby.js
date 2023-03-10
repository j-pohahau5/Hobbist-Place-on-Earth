import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_HOBBY } from '../utils/queries';

const SingleHobby = () => {
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
      </h3>
      <div className="bg-secondary py-4">
        <p className="p-4 text-light" style={{ fontSize: '1.5rem', lineHeight: '1.5' }}>
          {hobby.description}
        </p>
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {hobby.title} Hobby's Comments:
        </blockquote>
      </div>
      <div className='my-5'>
          <CommentList comments={hobby.comments} />
      </div>
      <div className="m-3 p-4 bg-light" style={{ border: '1px solid #ccc' }}>
        <h4 className="mb-3">Add a comment</h4>
        <CommentForm hobbyId={hobby._id} />
      </div>
    </div>
  );
};

export default SingleHobby;