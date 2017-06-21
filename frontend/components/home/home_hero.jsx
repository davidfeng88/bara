import React from 'react';
import { Link } from 'react-router-dom';

import HomeHeaderContainer from './home_header_container';
import HomeSearchContainer from './home_search_container';

const HomeHero = () => {
  return(
    <div className='home-hero'>
      <HomeHeaderContainer />
      <div className='logo'>
        <Link to="/">
          <img src={window.staticImages.homeLogo} />
        </Link>
      </div>
      <HomeSearchContainer />

    </div>
  );
};

export default HomeHero;


// sesarch bar<>
// links
