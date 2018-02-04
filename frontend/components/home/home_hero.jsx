import React from 'react';
import PropTypes from 'prop-types';
import HomeHeaderContainer from './home_header_container';
import SearchBar from '../header/search_bar';
import HomeLinks from './home_links';

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
  showDefaultBackground,
}) => {
  const homeHeroBackgroundCSSClassName =
    showDefaultBackground ?
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
  showDefaultBackground: PropTypes.bool.isRequired,
};

export default HomeHero;
