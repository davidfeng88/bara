import React from 'react';
import { fetchFeaturedBusinesses } from '../../util/BusinessAPIUtil';

import Home from './Home';

export default class HomeContainer extends React.Component {
  state = {
    hasDefaultBackground: true,
    isLoading: true,
    featuredBusinesses: [],
  };

  componentDidMount = () => {
    this.fetchAndSaveFeaturedBusinesses();
  };

  fetchAndSaveFeaturedBusinesses = () => {
    fetchFeaturedBusinesses()
      .then(
        this.saveFeaturedBusinesses,
        this.handleError,
      );
  };

  saveFeaturedBusinesses = (featuredBusinesses) => {
    this.setState({
      isLoading: false,
      featuredBusinesses,
    });
  };

  handleError = (e) => {
    console.log('Error in fetchFeaturedBusinesses');
    console.log(e.message);
  };

  handleHomeLogoClick = () => {
    this.fetchAndSaveFeaturedBusinesses();
    this.updateHomeHeroBackground();
  };

  updateHomeHeroBackground = () => {
    this.setState(prevState => ({
      hasDefaultBackground: !prevState.hasDefaultBackground,
    }));
  };

  render = () => {
    const {
      hasDefaultBackground,
      featuredBusinesses,
      isLoading,
    } = this.state;
    return (
      <Home
        handleHomeLogoClick={this.handleHomeLogoClick}
        hasDefaultBackground={hasDefaultBackground}
        featuredBusinesses={featuredBusinesses}
        isLoading={isLoading}
      />
    );
  };
}
