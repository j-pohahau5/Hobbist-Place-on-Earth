import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import HobbyList from '../components/HobbyList';
import HobbyForm from '../components/HobbyForm';
import { QUERY_SINGLE_CATEGORY, QUERY_ALL_HOBBIES } from '../utils/queries';

const SingleCategory = () => {
  const { id } = useParams();
  
  const { loading: loadingCategory, data: categoryData } = useQuery(QUERY_SINGLE_CATEGORY, {
    variables: { categoryId: id },
  });

  const { loading: loadingHobbies, data: hobbiesData } = useQuery(QUERY_ALL_HOBBIES, {
    variables: { categories: id },
  });

  if (loadingCategory || loadingHobbies) {
    return <div>loading...</div>;
  }

  const category = categoryData.category;
  const hobbies = hobbiesData.hobbies;

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {category.title} <br />
        <span style={{ fontSize: '1rem' }}>
          One of my category is {category.title}

        </span>
      </h3>
      <div className="bg-light-profile-cat py-4">
        <blockquote
          className="p-4-profile-cat"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            lineHeight: '1.5',
          }}
        >
          {category.description}
        </blockquote>
      </div>
          <div className='my-6'>
            <HobbyForm category={category.title} categoryId={category._id} />
            {/* <HobbyList hobbies={singleCategory.hobbies} /> */}
            <br></br>
            <br></br>
            <h2>Hobbies:</h2>
            <br></br>
            {hobbies.map((hobby) => (
              <div key={hobby._id}>
              <h3>{hobby.title}</h3>
              <p className="profile-hobby-cont">{hobby.description}</p>
              <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/hobbies/${hobby._id}`}
            >
              Join the discussion on this hobby.
            </Link>
            <br></br>
            </div>
        ))}
          </div>
          <div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;