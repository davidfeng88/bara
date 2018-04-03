import React from 'react';

const Categories = () => {
  const categoriesTitle = <h2>Browse Businesses by Category</h2>;
  return (
    <div className="center home-categories">
      {categoriesTitle}
      <CategoryCards />
    </div>
  );
};

const CategoryCards = () => (
  <div className="category-cards">
    <RestaurantCategory />
    <NightlifeCategory />
  </div>
);

const RestaurantCategory = () => (
  <a
    className="category-card"
    href="#/businesses/?name=&location=New%20York"
  >
    <img alt="" src={window.staticImages.restaurants} />
    <p>Restaurants</p>
  </a>
);

const NightlifeCategory = () => (
  <a
    className="category-card"
    href="#/businesses/?name=&location=New%20York&tag=nightlife"
  >
    <img alt="" src={window.staticImages.nightlife} />
    <p>Nightlife</p>
  </a>
);

export default Categories;
