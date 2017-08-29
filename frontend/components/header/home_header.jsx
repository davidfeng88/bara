import React from 'react';
import HomeBarContainer from './home_bar_container';
import SearchBar from './search_bar';
import HomeLinks from './home_links';

export default class HomeHeader extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {defaultBackground: true};
  }

  handleClick(e) {
    e.preventDefault();
    this.setState( prevState => ({
      defaultBackground: !prevState.defaultBackground
    }));
  }

  render() {
    let homeBarContent = (
      <div>
        <HomeBarContainer />
        <div className='logo' onClick={this.handleClick}>
          <img src={window.staticImages.homeLogo} />
        </div>
        <div className='home-search'>
          <SearchBar />
        </div>
        <HomeLinks />
      </div>
    );
    return this.state.defaultBackground ? (
        <div className='home-header-1'>
          {homeBarContent}
        </div>
      ) : (
        <div className='home-header-2'>
          {homeBarContent}
        </div>
      );
  }
}
