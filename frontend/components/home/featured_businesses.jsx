import React from 'react';
import {
  Link
} from 'react-router-dom';
import Rating from 'react-rating';
import {
  reviewNumber,
  price,
  tagContent,
} from '../../util/business_info_util';

const LoadingSpinner = () => (
  <div className='center'>
    <img className='spinner' src={window.staticImages.spinner} />
  </div>
);

const FeaturedBusinesses = ( {
  businesses,
  loading,
} ) => {
  if ( loading ) {
    return <LoadingSpinner />;
  } else {
    const title = <h2>Featured Businesses</h2>;
    return (
      <div className='center home-businesses'>
        {title}
        <FeaturedBusinessesList businesses={businesses} />
      </div>
    );
  }
};

const FeaturedBusinessesList = ( {
  businesses
} ) => (
  <div className='home-businesses-list'>
    {businesses.map( business =>
      <FeaturedBusinessListItem key={business.id} business={business} />
    )}
  </div>
);

const FeaturedBusinessListItem = ( {
  business
} ) => (
  <div className='home-business-item'>
    <Pic business = {business} />
    <FeatureTextInfo business = {business} />
  </div>
);

const Pic = ( {
  business
} ) => (
  <Link to={`/businesses/${business.id}`}>
    <img src={business.image_url} />
  </Link>
);

const FeatureTextInfo = ( {
  business
} ) => (
  <div className='card-content'>
    <BusinessNameLink business={business} />
    <RatingInfo business={business} />
    {price[business.price]}
    {tagContent(business)}
  </div>
);

const BusinessNameLink = ( {
  business
} ) => (
  <Link to={`/businesses/${business.id}`}>
    <strong>{business.name}</strong>
  </Link>
);

const RatingInfo = ( {
  business
} ) => (
  <div>
    <Rating className='rating'
      empty="fa fa-star-o fa-lg"
      full="fa fa-star fa-lg"
      initialRate={parseFloat(business.average_rating)}
      readonly
    />
    {reviewNumber(business)}
  </div>
);

export default FeaturedBusinesses;