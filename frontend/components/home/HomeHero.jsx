import React from 'react';
import PropTypes from 'prop-types';
import HomeHeaderContainer from './HomeHeaderContainer';
import SearchBar from '../header/SearchBar';
import HomeLinks from './HomeLinks';

const HomeLogo = ({
  handleHomeLogoClick,
}) => (
  <div
    className="logo"
    onClick={handleHomeLogoClick}
    onKeyPress={handleHomeLogoClick}
    role="button"
    tabIndex={0}
  >
    <img alt="home logo" src={window.staticImages.homeLogo} />
  </div>
);

HomeLogo.propTypes = {
  handleHomeLogoClick: PropTypes.func.isRequired,
};

const HomeSearch = () => (
  <div className="home-search">
    <SearchBar />
  </div>
);

const HomeHero = ({
  handleHomeLogoClick,
  hasDefaultBackground,
}) => {
  const homeHeroBackgroundCSSClassName =
    hasDefaultBackground ?
      'home-hero-bg-1' :
      'home-hero-bg-2';
  return (
    <div className={homeHeroBackgroundCSSClassName}>
      <HomeHeaderContainer />
      <HomeLogo handleHomeLogoClick={handleHomeLogoClick} />
      <HomeSearch />
      <HomeLinks />
    </div>
  );
};

HomeHero.propTypes = {
  handleHomeLogoClick: PropTypes.func.isRequired,
  hasDefaultBackground: PropTypes.bool.isRequired,
};

export default HomeHero;
