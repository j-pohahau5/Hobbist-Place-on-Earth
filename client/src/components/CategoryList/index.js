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
            <Link
              key={category._id}
              className="a"
              to={`/categories/${category._id}`}
            >

          <div key={category._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
            </h4>
            <div className="card-body bg-light p-2">
              <p>{category.title}</p>
              <p>{category.description}</p>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-danger btn-block btn-squared"
                onClick={() => onDelete(category._id)}
              >
                Delete
              </button>
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/categories/${category._id}`}
              >
                Join the discussion on this category.
              </Link>
            </div>

          </div>

 </Link>
        ))}
    </div>
  );
};

export default CategoryList;
