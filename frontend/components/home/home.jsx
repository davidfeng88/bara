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

  generateCategories() {
    const categoriesTitle = <h2>Browse Businesses by Category</h2>;
    const categoryCards = this.generateCategoryCards();
    return (
      <div className='center home-categories'>
        {categoriesTitle}
        {categoryCards}
      </div>
    );
  }

  generateCategoryCards() {
    const restaurantCategory = this.generateRestaurantCategory();
    const nightlifeCategory = this.generateNightlifeCategory();
    return (
      <div className='category-cards'>
        {restaurantCategory}
        {nightlifeCategory}
      </div>
    );
  }

  generateRestaurantCategory() {
    return (
      <Link className='category-card'
        to="/businesses/?name=&location=New%20York">
        <img src={window.staticImages.restaurants} />
        <p>Restaurants</p>
      </Link>
    );
  }

  generateNightlifeCategory() {
    return (
      <Link className='category-card'
      to="/businesses/?name=&location=New%20York&tag=nightlife">
      <img src={window.staticImages.nightlife} />
      <p>Nightlife</p>
    </Link>
    );
  }

  render() {
    const homeHero = this.generateHomeHero();
    const featuredBusinesses = this.generateFeaturedBusinesses();
    const categories = this.generateCategories();
    return (
      <div>
        {homeHero}
        {featuredBusinesses}
        {categories}
      </div>
    );
  }
}