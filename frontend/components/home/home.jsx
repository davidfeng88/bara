import React from 'react';
import {
  fetchFeaturedBusinesses
} from '../../util/business_api_util';

import HomeHeaderContainer from '../header/home_header_container';
import SearchBar from '../header/search_bar';
import HomeLinks from './home_links';
import {
  FeaturedBusinesses,
  Categories
} from './home_util';

export default class Home extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      defaultBackground: true,
      loading: true,
      businesses: [],
    };

    this.handleClick = this.handleClick.bind( this );
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    fetchFeaturedBusinesses()
      .then( ( businesses ) => {
        this.setState( prevState => ( {
          loading: false,
          businesses,
          defaultBackground: !prevState.defaultBackground
        } ) );
      } );
  }

  homeHero() {
    let homeHeroContent = (
      <div>
        <HomeHeaderContainer />
        <div className='logo' onClick={this.handleClick}>
          <img src={window.staticImages.homeLogo} />
        </div>
        <div className='home-search'>
          <SearchBar />
        </div>
        <HomeLinks />
      </div>
    );
    let backgroundCSSClassName =
      this.state.defaultBackground ?
      'home-hero-bg-1' :
      'home-hero-bg-2';
    return (
      <div className={backgroundCSSClassName}>
        {homeHeroContent}
      </div>
    );
  }

  featuredBusinesses() {
    return this.state.loading ?
      <img className='spinner' src={window.staticImages.spinner} /> :
      <FeaturedBusinesses businesses={this.state.businesses} />;
  }

  render() {
    return (
      <div>
        {this.homeHero()}
        <div className='center'>
          {this.featuredBusinesses()}
        </div>
          <Categories />
      </div>
    );
  }
}