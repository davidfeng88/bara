import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { price } from '../search/business_index_item';

const HomeBusinessItem = ({ business }) => (
  <div className='home-business-item'>
    <Link to={`/businesses/${business.id}`}>
      <img src={business.image_url} />
    </Link>
    <div className='card-content'>
      <Link to={`/businesses/${business.id}`}>{business.name}</Link><br/>
      <Rating className='rating'
        empty="fa fa-star-o fa-lg"
        full="fa fa-star fa-lg"
        initialRate={parseFloat(business.average_rating)}
        readonly
      />
      {price[business.price]}<br/>
    </div>
  </div>
);

class Home extends React.Component {
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

// <BusinessIndex businesses={businesses} />
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
      <div className='center'>
        {this.newBusinesses(businesses)}
        <div>Categories are under construction!</div>
      </div>
    );
  }
}

export default Home;
