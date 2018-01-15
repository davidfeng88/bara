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

  render() {
    return (
      <div>
        <HomeHero
          handleHomeLogoClick={this.handleHomeLogoClick}
          defaultBackground={this.state.defaultBackground}
        />
        <FeaturedBusinesses
          businesses={this.state.businesses}
          loading = {this.state.loading}
        />;
        <Categories />
      </div>
    );
  }
}