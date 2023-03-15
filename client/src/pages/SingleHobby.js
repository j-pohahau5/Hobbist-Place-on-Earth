import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_HOBBY, QUERY_COMMENTS } from '../utils/queries';
import CommentForm from '../components/CommentForm';

const SingleHobby = () => {
  const { hobbyId } = useParams();
  const { loading: loadingHobbies, data: hobbiesData } = useQuery(QUERY_SINGLE_HOBBY, {
    variables: { hobbyId: hobbyId },
  });
  const { loading: loadingComments, data: commentsData } = useQuery(QUERY_COMMENTS, {
    variables: { hobbies: hobbyId },
  });

  if (loadingHobbies || loadingComments) {
    return <div>Loading...</div>;
  }

  const hobby = hobbiesData?.hobby || {};
  const comments = commentsData?.comments || [];

  console.log("comments:", comments);

  return (
    <div>
      <div className='my-6'>
        <h1>{hobby.title}</h1>
        <p>{hobby.description}</p>
      </div>
      <div className='my-6'>
        <h2>Comments:</h2>  
      </div>
      {comments.map(comment => (
        <div key={comment._id} className='my-6'>
          {comment.users.map(user => (
              <p key={user._id}>
                Commented by: {user.username}
              </p>
            ))}

          <p>Content: {comment.content}</p>
        </div>
      ))}
      <div className='my-6'>
        <CommentForm hobbies={hobbyId} />
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default SingleHobby;
