import React from 'react';
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

  fetchAndSaveFeaturedBusinesses = async () => {
    try {
      const response = await fetch('/api/businesses/feature', {
        method: 'GET',
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const featuredBusinesses = await response.json();
      this.setState({
        isLoading: false,
        featuredBusinesses,
      });
    } catch (e) {
      this.handleError(e);
    }
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
