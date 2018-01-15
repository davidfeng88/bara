import React from 'react';
import {
  Link
} from 'react-router-dom';

const Categories = () => {
  const categoriesTitle = <h2>Browse Businesses by Category</h2>;
  return (
    <div className='center home-categories'>
      {categoriesTitle}
      <CategoryCards />
    </div>
  );
};

const CategoryCards = () => (
  <div className='category-cards'>
    <RestaurantCategory />
    <NightlifeCategory />
  </div>
);

const RestaurantCategory = () => (
  <Link className='category-card'
    to="/businesses/?name=&location=New%20York">
    <img src={window.staticImages.restaurants} />
    <p>Restaurants</p>
  </Link>
);

const NightlifeCategory = () => (
  <Link className='category-card'
    to="/businesses/?name=&location=New%20York&tag=nightlife">
    <img src={window.staticImages.nightlife} />
    <p>Nightlife</p>
  </Link>
);

export default Categories;