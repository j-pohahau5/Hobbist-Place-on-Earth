import React from 'react';
import { useQuery } from '@apollo/client';


// import { QUERY_CATEGORY } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_CATEGORY);
  // const category = data?.categories || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >

        </div>
        <div>testing</div>
        <div className="col-12 col-md-8 mb-3">

            <div>Loading...</div>

            />
          
        </div>
      </div>
    </main>
  );
};

export default Home;