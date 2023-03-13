import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({
  categories,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!categories.length) {
    return <h3>No Categories Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {categories &&
        categories.map((category) => (
          <div key={category._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${category.thoughtAuthor}`}
                >
                  {category.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this category on {category.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this category on {category.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{category.title}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/categories/${category._id}`}
            >
              Join the discussion on this category.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CategoryList;
