import React from 'react';
import ReviewIndexItem from './review_index_item';

const ReviewIndex = ({ currentUser, reviews }) => {
  let reviewsEntries = reviews.length > 0 ? (
    reviews.map( review => (
      <ReviewIndexItem key={ review.id }
        review={ review } currentUser={ currentUser } />
    ))
  ) : (
    <div className='review-placehoder'>
      No review for this business yet.
    </div>
  );
  return(
    <ul className="review-index">
      { reviewsEntries }
    </ul>
  );
};

export default ReviewIndex;
