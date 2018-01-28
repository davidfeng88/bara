import React from 'react';
import {
  fetchFeaturedBusinesses
} from '../../util/business_api_util';
import HomeHero from './home_hero';
import FeaturedBusinesses from './featured_businesses';
import Categories from './categories';

export default class Home extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      showDefaultBackground: true,
      loading: true,
      featuredBusinesses: [],
    };

    this.handleHomeLogoClick = this.handleHomeLogoClick.bind( this );
    this.saveFeaturedBusinesses = this.saveFeaturedBusinesses.bind( this );
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
      .then( featuredBusinesses => {
        this.saveFeaturedBusinesses( featuredBusinesses );
      } );
  }

  saveFeaturedBusinesses( featuredBusinesses ) {
    this.setState( {
      loading: false,
      featuredBusinesses,
    } );
  }

  updateHomeHeroBackground() {
    this.setState( prevState => ( {
      showDefaultBackground: !prevState.showDefaultBackground
    } ) );
  }

  render() {
    return (
      <div>
        <HomeHero
          handleHomeLogoClick={this.handleHomeLogoClick}
          showDefaultBackground={this.state.showDefaultBackground}
        />
        <FeaturedBusinesses
          businesses={this.state.featuredBusinesses}
          loading = {this.state.loading}
        />;
        <Categories />
      </div>
    );
  }
}