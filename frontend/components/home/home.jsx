import React from 'react';
import { fetchFeaturedBusinesses } from '../../util/business_api_util';

import HomeBarContainer from './home_bar_container';
import SearchBar from '../header/search_bar';
import HomeLinks from './home_links';
import { FeaturedBusinesses, Categories } from './home_util';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultBackground: true,
      loaded: false,
      businesses: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    fetchFeaturedBusinesses()
    .then( (businesses) => {
      this.setState( prevState => ({
          loaded: true,
          businesses,
          defaultBackground: !prevState.defaultBackground
        }));
      }
    );
  }

  homeHeader() {
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

  featuredBusinesses() {
    return this.state.loaded ?
      <FeaturedBusinesses businesses={this.state.businesses} />
    :
      <img className='spinner' src={window.staticImages.spinner} />
    ;
  }

  render() {
    return(
      <div>
        {this.homeHeader()}
        <div className='center'>
          {this.featuredBusinesses()}
        </div>
          <Categories />
      </div>
    );
  }
}
