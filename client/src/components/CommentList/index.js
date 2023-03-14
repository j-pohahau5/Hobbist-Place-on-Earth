import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT_LIKE, ADD_COMMENT_DISLIKE } from '../utils/queries';

const CommentList = ({ comments = [] }) => {
  const commentCount = comments.length;
  const [addCommentLike] = useMutation(ADD_COMMENT_LIKE);
  const [addCommentDislike] = useMutation(ADD_COMMENT_DISLIKE);

  const handleLike = async (commentId, likes) => {
    await addCommentLike ({
      variables: { _id: commentId, likes: likes},
    });
  };

  const handleDislike = async (commentId, disLikes) => {
    await addCommentDislike({
      variable: { _id: commentId, dislikes: disLikes},
    });
  };

  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments ({commentCount})
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {/* Number of Likes */}
                  {comment.likes > 0 && `(${comment.likes} likes)`}{' '}
                  {/* Number of disLikes */}
                  {comment.disLikes > 0 && `(${comment.disLikes} dislikes)`}{' '}
                  {/* commented <span style={{ fontSize: '0.825rem' }}>on {comment.createdAt}</span> */}
                  <div>
                    <button onClick={() => handleLike(comment._id, comment.likes + 1)}>
                      Like
                    </button>
                    <button onClick={() => handleDislike(comment._id, comment.disLikes + 1)}>
                      Dislike
                    </button>
                  </div>
                </h5>
                {/* Display the comment content */}
                <p className="card-body">{comment.content}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
