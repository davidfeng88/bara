import React from 'react';
import PropTypes from 'prop-types';
import ReviewIndexItemContainer from './review_index_item_container';

const ReviewIndex = ({
  reviews,
}) => {
  const reviewsEntries = reviews.length > 0 ? (
    reviews.map(review => (
      <ReviewIndexItemContainer
        key={review.id}
        review={review}
      />
    ))
  ) : (
    <div className="review-placehoder">
      No review for this business yet.
    </div>
  );
  return (
    <ul className="review-index">
      {reviewsEntries}
    </ul>
  );
};

ReviewIndex.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewIndex;
