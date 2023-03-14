import React from 'react';
import { useQuery } from '@apollo/client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HobbyForm from '../components/HobbyForm';
// import { Category } from '../../../server/models';
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';
import { QUERY_CATEGORIES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          // style={{ border: '1px dotted #1a1a1a' }}
        >
          <HobbyForm />
        </div>
        <div
          className="col-12 col-md-10 mb-3 p-3"
          // style={{ border: '1px dotted #1a1a1a' }}
        >
          <CategoryForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CategoryList
            categories={categories}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;