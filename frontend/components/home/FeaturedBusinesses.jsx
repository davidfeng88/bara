import React from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import {
  reviewNumber,
  price,
  tagContent,
} from '../../util/BusinessInfoUtil';

const LoadingSpinner = () => (
  <div className="center">
    <img alt="" className="spinner" src={window.staticImages.spinner} />
  </div>
);

const FeaturedBusinesses = ({
  featuredBusinesses,
  isLoading,
}) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const title = <h2>Featured Businesses</h2>;
  return (
    <div className="center home-businesses">
      {title}
      <FeaturedBusinessesList featuredBusinesses={featuredBusinesses} />
    </div>
  );
};

export default FeaturedBusinesses;

FeaturedBusinesses.propTypes = {
  featuredBusinesses: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const FeaturedBusinessesList = ({
  featuredBusinesses,
}) => (
  <div className="home-businesses-list">
    {featuredBusinesses.map(business =>
      (<FeaturedBusinessListItem
        key={business.id}
        business={business}
      />))
    }
  </div>
);

FeaturedBusinessesList.propTypes = {
  featuredBusinesses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const FeaturedBusinessListItem = ({
  business,
}) => (
  <div className="home-business-item">
    <Pic business={business} />
    <FeatureTextInfo business={business} />
  </div>
);

FeaturedBusinessListItem.propTypes = {
  business: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Pic = ({
  business,
}) => (
  <a href={`#/businesses/${business.id}`}>
    <img alt="" src={business.image_url} />
  </a>
);

const FeatureTextInfo = ({
  business,
}) => (
  <div className="card-content">
    <BusinessNameLink business={business} />
    <RatingInfo business={business} />
    {price[business.price]}
    {tagContent(business)}
  </div>
);

const BusinessNameLink = ({
  business,
}) => (
  <a href={`#/businesses/${business.id}`}>
    <strong>{business.name}</strong>
  </a>
);

const RatingInfo = ({
  business,
}) => (
  <div>
    <Rating
      className="rating"
      empty="fa fa-star-o fa-lg"
      full="fa fa-star fa-lg"
      initialRate={parseFloat(business.average_rating)}
      readonly
    />
    {reviewNumber(business)}
  </div>
);
