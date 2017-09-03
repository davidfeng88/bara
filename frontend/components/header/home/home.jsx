import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { reviewNumber, price, tagContent } from '../../../util/business_info_util';
import { fetchFeaturedBusinesses } from '../../../util/business_api_util';
import HomeHeader from './home_header';
import HomeBarContainer from './home_bar_container';
import SearchBar from '../search_bar';
import HomeLinks from './home_links';

const Categories = () => (
  <div className='center'>
    <div className='home-categories'>
      <h2>Browse Businesses by Category</h2>
      <div className='category-cards'>
        <Link className='category-card'
          to="/businesses/?name=&location=New%20York">
          <img src={window.staticImages.restaurants} />
          <p>Restaurants</p>
        </Link>
        <Link className='category-card'
          to="/businesses/?name=&location=New%20York&tag=nightlife">
          <img src={window.staticImages.nightlife} />
          <p>Nightlife</p>
        </Link>
      </div>
    </div>
  </div>
);

const HomeBusinessItem = ({ business }) => (
  <div className='home-business-item'>
    <Link to={`/businesses/${business.id}`}>
      <img src={business.image_url} />
    </Link>
    <div className='card-content'>
      <Link to={`/businesses/${business.id}`}>
        <strong>{business.name}</strong>
      </Link>
      <div>
      <Rating className='rating'
        empty="fa fa-star-o fa-lg"
        full="fa fa-star fa-lg"
        initialRate={parseFloat(business.average_rating)}
        readonly
      />
      {reviewNumber(business)}
      </div>
      {price[business.price]}{tagContent(business)}
    </div>
  </div>
);

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultBackground: true,
      loaded: false,
      businesses: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetchFeaturedBusinesses()
    .then( (businesses) => {
      this.setState({
          loaded: true,
          businesses,
        });
      }
    );
  }
  handleClick(e) {
    e.preventDefault();
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

  newBusinesses() {
    return this.state.loaded ? (
        <div className='home-businesses'>
          <h2>Featured Businesses</h2>
          <div className='home-businesses-list'>
          {this.state.businesses.map( business =>
            <HomeBusinessItem key={business.id} business={business} />
          )}
          </div>
        </div>
    ) :
      <img className='spinner' src={window.staticImages.spinner} /> ;
  }

  render() {
    let { businesses } = this.props;
    return(
      <div>
        {this.homeHeader()}
        <div className='center'>
          {this.newBusinesses()}
        </div>
          <Categories />
      </div>
    );
  }
}
