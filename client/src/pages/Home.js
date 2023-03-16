import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HobbyForm from '../components/HobbyForm';
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';
import { QUERY_CATEGORIES } from '../utils/queries';
import { REMOVE_CATEGORY } from '../utils/mutations';
import Swal from 'sweetalert2';

const Home = () => {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];

  const [removeCategory] = useMutation(REMOVE_CATEGORY, {
    update(cache, { data: { removeCategory } }) {
      cache.modify({
        fields: {
          categories(existingCategories = [], { readField }) {
            return existingCategories.filter(
              (categoryRef) => removeCategory._id !== readField('_id', categoryRef)
            );
          },
        },
      });
    },
  });

  const handleDelete = async (categoryId) => {
    try {
      await removeCategory({
        variables: { categoryId },
      });
      await Swal.fire({
        icon: 'success',
        title: 'Category deleted!',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (e) {
      console.error(e);
    }
  };
  
  // const handleDeleteCategory = (categoryId) => {
  //   // delete the category with categoryId
  // }

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3">
          <HobbyForm />
        </div>
        <div className="col-12 col-md-10 mb-3 p-3">
          <CategoryForm />
        </div>
        <div className="col-13 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CategoryList
      categories={categories}
      title="Categories"
      description="Select a category to see its hobbies"
      onDelete={handleDelete}
    />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
