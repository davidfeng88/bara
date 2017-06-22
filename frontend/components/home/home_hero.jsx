import React from 'react';
import { Link } from 'react-router-dom';

import HomeHeaderContainer from './home_header_container';
import SearchContainer from '../search/search_container';
import LinksContainer from '../link/link_container';

const HomeHero = () => {
  return(
    <div className='home-hero'>
      <HomeHeaderContainer />
      <div className='logo'>
        <Link to="/">
          <img src={window.staticImages.homeLogo} />
        </Link>
      </div>

      <div className='home-search'>
        <SearchContainer />
      </div>

      <div className='home-hero-links'>
        <LinksContainer />
      </div>

    </div>
  );
};

export default HomeHero;


// sesarch bar<>
// links
