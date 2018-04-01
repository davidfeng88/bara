import React from 'react';
import { fetchFeaturedBusinesses } from '../../util/BusinessAPIUtil';
import HomeHero from './HomeHero';
import FeaturedBusinesses from './FeaturedBusinesses';
import Categories from './Categories';

export default class Home extends React.Component {
  state = {
    showDefaultBackground: true,
    loading: true,
    featuredBusinesses: [],
  };

  componentDidMount = () => {
    this.fetchAndSaveFeaturedBusinesses();
  };

  fetchAndSaveFeaturedBusinesses = () => {
    fetchFeaturedBusinesses()
      .then(this.saveFeaturedBusinesses);
  };

  saveFeaturedBusinesses = (featuredBusinesses) => {
    this.setState({
      loading: false,
      featuredBusinesses,
    });
  };

  handleHomeLogoClick = () => {
    this.fetchAndSaveFeaturedBusinesses();
    this.updateHomeHeroBackground();
  };

  updateHomeHeroBackground = () => {
    this.setState(prevState => ({
      showDefaultBackground: !prevState.showDefaultBackground,
    }));
  };

  render = () => (
    <div>
      <HomeHero
        handleHomeLogoClick={this.handleHomeLogoClick}
        showDefaultBackground={this.state.showDefaultBackground}
      />
      <FeaturedBusinesses
        businesses={this.state.featuredBusinesses}
        loading={this.state.loading}
      />
      <Categories />
    </div>
  );
}
