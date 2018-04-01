import React from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import {
  nReviewsString,
  priceToDollarSign,
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
}) => {
  const {
    id,
    imageUrl,
    name,
    averageRating,
    numberOfReviews,
    price,
    tags,
  } = business;
  return (
    <div className="home-business-item">
      <Pic
        id={id}
        imageUrl={imageUrl}
      />
      <FeatureTextInfo
        id={id}
        name={name}
        averageRating={averageRating}
        numberOfReviews={numberOfReviews}
        price={price}
        tags={tags}
      />
    </div>
  );
};

FeaturedBusinessListItem.propTypes = {
  business: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    averageRating: PropTypes.string,
    numberOfReviews: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

const Pic = ({
  id,
  imageUrl,
}) => (
  <a href={`#/businesses/${id}`}>
    <img alt="" src={imageUrl} />
  </a>
);

Pic.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const FeatureTextInfo = ({
  id,
  name,
  averageRating,
  numberOfReviews,
  price,
  tags,
}) => (
  <div className="card-content">
    <BusinessNameLink
      id={id}
      name={name}
    />
    <RatingInfo
      averageRating={averageRating}
      numberOfReviews={numberOfReviews}
    />
    {priceToDollarSign[price]}
    {tagContent(tags)}
  </div>
);

FeatureTextInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  averageRating: PropTypes.string.isRequired,
  numberOfReviews: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object),
};

FeatureTextInfo.defaultProps = {
  tags: null,
};

const BusinessNameLink = ({
  id,
  name,
}) => (
  <a href={`#/businesses/${id}`}>
    <strong>{name}</strong>
  </a>
);

BusinessNameLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

const RatingInfo = ({
  averageRating,
  numberOfReviews,
}) => (
  <div>
    <Rating
      className="rating"
      empty="fa fa-star-o fa-lg"
      full="fa fa-star fa-lg"
      initialRate={parseFloat(averageRating)}
      readonly
    />
    {nReviewsString(numberOfReviews)}
  </div>
);

RatingInfo.propTypes = {
  averageRating: PropTypes.string.isRequired,
  numberOfReviews: PropTypes.number.isRequired,
};
