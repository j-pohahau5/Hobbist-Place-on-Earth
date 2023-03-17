import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
// import HobbyList from '../components/HobbyList';
import HobbyForm from '../components/HobbyForm';
import { QUERY_SINGLE_CATEGORY, QUERY_ALL_HOBBIES } from '../utils/queries';
import { DELETE_HOBBY } from '../utils/mutations';
import Swal from 'sweetalert2';

const SingleCategory = () => {
  const { id } = useParams();

  const { loading: loadingCategory, data: categoryData } = useQuery(QUERY_SINGLE_CATEGORY, {
    variables: { categoryId: id },
  });

  const { loading: loadingHobbies, data: hobbiesData, refetch } = useQuery(QUERY_ALL_HOBBIES, {
    variables: { categories: id },
  });

  const [deleteHobby] = useMutation(DELETE_HOBBY);

  if (loadingCategory || loadingHobbies) {
    console.log("hobbiesData:", hobbiesData);
    return <div>loading...</div>;
  }

  if (!hobbiesData) {
    console.error("hobbiesData is undefined");
    return <div>Error fetching hobbies data</div>;
  }
  console.log('Data:', hobbiesData);
  const category = categoryData.category;
  const hobbies = hobbiesData.hobbies;

 
  const handleDelete = async (hobbyId) => {
    try {
      await deleteHobby({
        variables: { hobbyId, categoryId: id },
      });
      await Swal.fire({
        title: 'Hobby deleted',
        text: 'The hobby has been deleted successfully.',
        icon: 'success',
      });
      refetch();
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
      <div>
        <div>
          <h2 className="card-header bg-dark text-light p-2 m-0">
            {category.title} <br />
            <span style={{ fontSize: '1rem' }}>
          One of my category is {category.title}

          </span>
        </h2>
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

      <div className="my-3 container flex-direction: row">
          

        <div className='my-5 container col-xl-8 col-md-12 mb-12 p-3'>
          <h3>Hobbies:</h3>
            {hobbies.map((hobby) => (
              <div key={hobby._id}>
                <Link className="a" to={`/hobbies/${hobby._id}`}>
                  <h4>{hobby.title}</h4>
                </Link>
              <p className="profile-hobby-cont">{hobby.description}</p>
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/hobbies/${hobby._id}`}
              >
                Join the discussion on this hobby.
              </Link>
            <br></br>
              <button
                className="btn btn-danger btn-block btn-squared"
                onClick={() => handleDelete(hobby._id)}
              >
                Delete
              </button>
              <br></br>
            </div>
          ))}
        </div>
        <div className="my-6">
          <HobbyForm category={category.title} categoryId={category._id} />
  
          <br></br>
          <br></br>
        </div>
        <div></div>
    </div>
    </div>
    </div>
  );
};  

export default SingleCategory;