import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_HOBBY, QUERY_COMMENTS } from '../utils/queries';
import CommentForm from '../components/CommentForm';
import { DELETE_COMMENT } from '../utils/mutations';
import Swal from 'sweetalert2';

const SingleHobby = () => {
  const { hobbyId } = useParams();

  const { loading: loadingHobbies, data: hobbiesData } = useQuery(QUERY_SINGLE_HOBBY, {
    variables: { hobbyId: hobbyId },
  });

  const { loading: loadingComments, data: commentsData, refetch } = useQuery(QUERY_COMMENTS, {
    variables: { hobbies: hobbyId },
  });

  const [deleteComment] = useMutation(DELETE_COMMENT);

  if (loadingHobbies || loadingComments) {
    return <div>Loading...</div>;
  }

  const hobby = hobbiesData?.hobby || {};
  const comments = commentsData?.comments || [];

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment({
        variables: { commentId, hobbyId: hobbyId },
      });
      await Swal.fire({
        icon: 'success',
        title: 'Comment deleted!',
        showConfirmButton: false,
        timer: 1500
      });
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className='my-6'>
        <h1>{hobby.title}</h1>
        <p>{hobby.description}</p>
      </div>
      <div className='my-6'>
        <h2>Comments:</h2>
      </div>
      {comments.map((comment) => (
        <div key={comment._id} className='my-6'>
          {comment.users.map((user) => (
            <p key={user._id}>Commented by: {user.username}</p>
          ))}
          <p>Content: {comment.content}</p>
          <button
            className='btn btn-danger btn-sm'
            onClick={() => handleDeleteComment(comment._id)}
          >
            Delete
          </button>
        </div>
      ))}
      <div className='my-6'>
        <CommentForm thisHobby={hobbyId} />
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default SingleHobby;
