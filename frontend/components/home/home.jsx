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

    this.handleHomeLogoClick = this.handleHomeLogoClick.bind( this );
    this.updateFeaturedBusinessesInState = this.updateFeaturedBusinessesInState.bind( this );
    this.updateHomeHeroBackground = this.updateHomeHeroBackground.bind( this );
  }

  componentDidMount() {
    this.configureFeaturedBusinesses();
  }

  handleHomeLogoClick() {
    this.configureFeaturedBusinesses();
    this.updateHomeHeroBackground();
  }

  configureFeaturedBusinesses() {
    fetchFeaturedBusinesses()
      .then( businesses => {
        this.updateFeaturedBusinessesInState( businesses );
      } );
  }

  updateFeaturedBusinessesInState( businesses ) {
    this.setState( {
      loading: false,
      businesses,
    } );
  }

  updateHomeHeroBackground() {
    this.setState( prevState => ( {
      defaultBackground: !prevState.defaultBackground
    } ) );
  }

  showHomeLogo() {
    return (
      <div className='logo' onClick={this.handleHomeLogoClick}>
        <img src={window.staticImages.homeLogo} />
      </div>
    );
  }

  showHomeSearch() {
    return (
      <div className='home-search'>
        <SearchBar />
      </div>
    );
  }

  getHomeHeroBackgroundCSSClassName() {
    return this.state.defaultBackground ?
      'home-hero-bg-1' :
      'home-hero-bg-2';
  }

  showHomeHero() {
    const homeLogo = this.showHomeLogo();
    const homeSearch = this.showHomeSearch();
    let homeHeroBackgroundCSSClassName = this.getHomeHeroBackgroundCSSClassName();
    return (
      <div className={homeHeroBackgroundCSSClassName}>
        <HomeHeaderContainer />
        {homeLogo}
        {homeSearch}
        <HomeLinks />
      </div>
    );
  }

  showFeaturedBusinesses() {
    let featuredBusinesses = this.state.loading ?
      <img className='spinner' src={window.staticImages.spinner} /> :
      <FeaturedBusinesses businesses={this.state.businesses} />;
    return (
      <div className='center'>
        {featuredBusinesses}
      </div>
    );
  }

  render() {
    const homeHero = this.showHomeHero();
    const featuredBusinesses = this.showFeaturedBusinesses();
    return (
      <div>
        {homeHero}
        {featuredBusinesses}
        <Categories />
      </div>
    );
  }
}