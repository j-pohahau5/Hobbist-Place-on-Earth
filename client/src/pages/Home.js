import React from 'react';
import { useQuery } from '@apollo/client';

// import Header from '../components/Header';
// import Footer from '../components/Footer';
import HobbyForm from '../components/HobbyForm';
// import { Category } from '../../../server/models';
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';
import { QUERY_CATEGORIES } from '../utils/queries';

// import Container from 'react-bootstrap/Container';


// tailwinds import
// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Home = () => {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];
    console.log(data)
  return (
    <div className='container flex-direction: row'>

  
          <aside className="container col-xl-4 col-md-12 mb-12 p-3">
            `<div
              className="col-12 col-md-10 mb-3 p-3"
              style={{ border: '1px dotted #1a1a1a' }}
            >
              <HobbyForm />
              `</div>
            `<div
              className="col-12 col-md-10 mb-3 p-3"
              style={{ border: '1px dotted #1a1a1a' }}
            >
              <CategoryForm />
            </div>
          </aside>



          <div className="container col-xl-8 col-md-12 mb-12 p-3">
            <div>
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
</div>


  );
};

export default Home;