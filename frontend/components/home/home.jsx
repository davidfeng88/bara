import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { reviewNumber, price, tagContent } from '../../util/business_info_util';

const Categories = () => (
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
    this.state = {loaded: false};
  }

  componentDidMount() {
    this.props.updateFilter({})
    .then( () => {
      this.setState({loaded: true});
      }
    );
  }

  newBusinesses(businesses) {
    return this.state.loaded ? (
      <div className='home-businesses'>
        <h3>Hot & New Businesses</h3>
        <div className='home-businesses-list'>
        {businesses.slice(0, 3).map( business =>
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
        <div className='center'>
          {this.newBusinesses(businesses)}
          <Categories />
        </div>
      </div>
    );
  }
}
