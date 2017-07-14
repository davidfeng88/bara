import React from 'react';
import { Link } from 'react-router-dom';

import HomeBarContainer from './home_bar_container';
import SearchBar from './search_bar';
import HomeLinks from './home_links';

class HomeHeader extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.className === 'home-header') {
      this.className = 'home-header2';
    }

  }




  render() {
    let style = {
      backgroundImage: `asset-url("home.jpeg")`,
    };
    return(
      <div style={style} className='home-header'>
        <HomeBarContainer />
        <div className='logo' onClick={this.handleClick}>
          <Link to="/">
            <img src={window.staticImages.homeLogo} />
          </Link>
        </div>
        <div className='home-search'>
          <SearchBar />
        </div>
        <HomeLinks />
      </div>
    );
  }
}

export default HomeHeader;
