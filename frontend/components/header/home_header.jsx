import React from 'react';
import { Link } from 'react-router-dom';

import HomeBarContainer from './home_bar_container';
import SearchContainer from '../search/search_container';
import LinksContainer from '../link/link_container';

const HomeHeader = () => {
  return(
    <div className='home-hero'>
      <HomeBarContainer />
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

export default HomeHeader;


// sesarch bar<>
// links
