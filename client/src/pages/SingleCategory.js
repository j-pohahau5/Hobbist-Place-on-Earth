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
      <div className="bg-light py-4">
        
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            lineHeight: '1.5',
          }}
        >
          <div>
          {category.title}    
          </div>
          {category.description}
          
        </blockquote>
      </div>
      <div className='container flex-direction: row'>

        <aside className="container col-xl-4 col-md-12 mb-12 p-3">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >

            <HobbyForm category={category.title} categoryId={category._id} />
          </div>
        </aside>


        <div className='container col-xl-8 col-md-12 mb-12 p-3'>
          <h2>Hobbies:</h2>


          {hobbies.map((hobby) => (
            <div key={hobby._id}>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/hobbies/${hobby._id}`}
              >
                Share your comments.
              </Link>

              
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SingleCategory;