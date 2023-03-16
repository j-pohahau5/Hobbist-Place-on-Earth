import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import HobbyForm from '../components/HobbyForm';
import HobbyList from '../components/HobbyList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || {};
  console.log(user);
  const hobbies = user.hobbies;
  // navigate to personal profile page if username is yours
  //   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //     return <Navigate to="/me" />;
  //   }

  if (loading) {
    return <div>Loading...</div>;
  };

  //   if (!user?.username) {
  //     return (
  //       <h4>
  //         You need to be logged in to see this. Use the navigation links above to
  //         sign up or log in!
  //       </h4>
  //     );
  //   }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {`${user.username}'s your`} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          {/* <HobbyList
            hobbies={user.hobbies}
            title={`${user.username}'s hobbies...`}
            showTitle={false}
            showUsername={false}
          /> */}
          <h3> Hobbies:</h3>
          <div className='my-5'>
            {hobbies.map((hobby) => (
              <div key={hobby._id} >
                {/* <p>{username}</p> */}
                <p>Title: {hobby.title}</p>
                <p>Description: {hobby.description}</p>
                <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/hobbies/${hobby._id}`}
            >
              Join the discussion on this hobby.
            </Link> 
              </div>

            ))}


          </div>

        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
          // style={{ border: '1px dotted #1a1a1a' }}
          >
            <HobbyForm />
          </div>
        )}
      </div>

    </div>
  );
};

export default Profile;
