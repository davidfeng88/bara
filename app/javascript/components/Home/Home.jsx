import React from 'react';
import PropTypes from 'prop-types';
import HomeHero from './HomeHero';
import FeaturedBusinesses from './FeaturedBusinesses';
import Categories from './Categories';

const Home = ({
  handleHomeLogoClick,
  hasDefaultBackground,
  featuredBusinesses,
  isLoading,
}) => (
  <div>
    <HomeHero
      handleHomeLogoClick={handleHomeLogoClick}
      hasDefaultBackground={hasDefaultBackground}
    />
    <FeaturedBusinesses
      featuredBusinesses={featuredBusinesses}
      isLoading={isLoading}
    />
    <Categories />
  </div>
);

export default Home;

Home.propTypes = {
  handleHomeLogoClick: PropTypes.func.isRequired,
  hasDefaultBackground: PropTypes.bool.isRequired,
  featuredBusinesses: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
