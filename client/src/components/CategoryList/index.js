import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({
  categories,
  title,
  description,
//   showTitle = true,
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

          
           
          </div>

 </Link>
        ))}
    </div>
  );
};

export default CategoryList;
