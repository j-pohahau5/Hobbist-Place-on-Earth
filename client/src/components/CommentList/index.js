import React from 'react';

const CommentList = ({ comments = [] }) => {
  const commentCount = comments.length;
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
