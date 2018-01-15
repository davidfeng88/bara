import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  fetchFeaturedBusinesses
} from '../../util/business_api_util';
import HomeHeaderContainer from '../header/home_header_container';
import SearchBar from '../header/search_bar';
import HomeLinks from './home_links';
import FeaturedBusinesses from './featured_businesses';
import Categories from './categories';

export default class Home extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      defaultBackground: true,
      loading: true,
      businesses: [],
    };

    this.handleHomeLogoClick = this.handleHomeLogoClick.bind( this );
    this.SaveFeaturedBusinesses = this.SaveFeaturedBusinesses.bind( this );
    this.updateHomeHeroBackground = this.updateHomeHeroBackground.bind( this );
  }

  componentDidMount() {
    this.fetchAndSaveFeaturedBusinesses();
  }

  handleHomeLogoClick() {
    this.fetchAndSaveFeaturedBusinesses();
    this.updateHomeHeroBackground();
  }

  fetchAndSaveFeaturedBusinesses() {
    fetchFeaturedBusinesses()
      .then( businesses => {
        this.SaveFeaturedBusinesses( businesses );
      } );
  }

  SaveFeaturedBusinesses( businesses ) {
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

  generateHomeHero() {
    const homeLogo = this.generateHomeLogo();
    const homeSearch = this.generateHomeSearch();
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

  generateHomeLogo() {
    return (
      <div className='logo' onClick={this.handleHomeLogoClick}>
        <img src={window.staticImages.homeLogo} />
      </div>
    );
  }

  generateHomeSearch() {
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

  generateFeaturedBusinesses() {
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
    const homeHero = this.generateHomeHero();
    const featuredBusinesses = this.generateFeaturedBusinesses();
    return (
      <div>
        {homeHero}
        {featuredBusinesses}
        <Categories />
      </div>
    );
  }
}