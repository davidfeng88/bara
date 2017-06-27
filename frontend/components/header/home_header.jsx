import React from 'react';
import { Link } from 'react-router-dom';

import HomeBarContainer from './home_bar_container';
import SearchContainer from '../search/search_bar_placeholder';
import LinksContainer from '../link/link_container';

const HomeHeader = () => {
  return(
    <div className='home-header'>
      <HomeBarContainer />
      <div className='logo'>
        <Link to="/">
          <img src={window.staticImages.homeLogo} />
        </Link>
      </div>

      <div className='home-search'>
        <SearchContainer />
      </div>

      <div className='home-header-links'>
        <LinksContainer />
      </div>

    </div>
  );
};

export default HomeHeader;
