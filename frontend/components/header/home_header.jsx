import React from 'react';
import { Link } from 'react-router-dom';

import HomeBarContainer from './home_bar_container';
import SearchBar from './search_bar';
import Links from './links';

const HomeHeader = () => {
  return(
    <div className='home-header'>
      <HomeBarContainer />
      <div className='logo'>
        <Link to="/">
          <img src={window.staticImages.homeLogo} />
        </Link>
      </div>



      <div className='home-header-links'>
        <Links />
      </div>

    </div>
  );
};

export default HomeHeader;

// insert into line 17 when ready
// <div className='home-search'>
//   <SearchBar />
// </div>
