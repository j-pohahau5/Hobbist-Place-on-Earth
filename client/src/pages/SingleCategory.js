import React from 'react';
import { Link } from 'react-router-dom';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import HobbyList from '../components/HobbyList';
import HobbyForm from '../components/HobbyForm'
import { QUERY_SINGLE_CATEGORY, QUERY_ALL_HOBBIES } from '../utils/queries';

const SingleCategory = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  // When the user clicks on the link inside our app or enters the page's URL in the browser, we want only the associated tech friend's information to display on the page.
  // To do this, we first grab the needed profile id from the URL's parameter using the useParams() Hook:
  //  
  // const { hobbies } = useQuery(QUERY_ALL_HOBBIES);
  // console.log(hobbies);
  const singleCategory  = useParams();

  // Then, we use that profile id to query our data and return the associated tech friend's information:
  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, {
    // pass URL parameter
    variables: { categoryId: singleCategory.id },
  });
//   console.log(data.category.hobbies[0])

  const category = data?.category || {};

//   console.log(singleCategory);
//   console.log(category.hobbies);asdggwrbv

 const hobbies = category.hobbies;
 console.log(hobbies);

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
            <HobbyForm category={category.title} categoryId={category._id} />
            {/* <HobbyList hobbies={singleCategory.hobbies} /> */}
            <h2>Hobbies:</h2>
            {hobbies.map((hobby) => (
              <div key={hobby._id}>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
              <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/hobbies/${hobby._id}`}
              >
              Join the discussion on this hobby.
            </Link>
            </div>
        ))}
          </div>
          <div>
          </div>
    </div>
  );
};

export default SingleCategory;