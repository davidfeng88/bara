import React from 'react';
import HomeHeaderContainer from '../header/home_header_container';
import SearchBar from '../header/search_bar';
import HomeLinks from './home_links';

const HomeLogo = ( {
  handleHomeLogoClick
} ) => (
  <div className='logo' onClick={handleHomeLogoClick}>
    <img src={window.staticImages.homeLogo} />
  </div>
);

const HomeSearch = () => (
  <div className='home-search'>
    <SearchBar />
  </div>
);

const HomeHero = ( {
  handleHomeLogoClick,
  defaultBackground
} ) => {
  const homeHeroBackgroundCSSClassName =
    defaultBackground ?
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

export default HomeHero;