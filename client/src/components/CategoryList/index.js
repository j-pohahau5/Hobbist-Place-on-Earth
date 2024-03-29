import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({
  categories,
  title,
  description,
  onDelete,
}) => {
  if (!categories.length) {
    return <h3>No Categories Yet</h3>;
  }

  return (
    <div>
      { <h3>{title}</h3> && <p>{description}</p>}
      {categories &&
        categories.map((category) => (
            

          <div key={category._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
            </h4>
            <div className="card-body bg-light p-2">
              <p>{category.title}</p>
              <p>{category.description}</p>
            </div>
            <div>
                <button
                className="btn btn-danger btn-block btn-squared"
                onClick={() => onDelete(category._id)}
              >
                Delete
              </button>
            </div>

            <div className="card-footer">
              
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/categories/${category._id}`}
              >
                Join the discussion on this category.
              </Link>
            </div>

          </div>

 
        ))}
    </div>
  );
};

export default CategoryList;
