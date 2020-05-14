import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const ReviewIndexItem = ({
  currentUser,
  review,
}) => {
  const editReviewString = `/reviews/${review.id}/edit`;
  const editLink = (currentUser && currentUser.id === review.author_id) ?
    <Link to={editReviewString}>Edit Review</Link> :
    null;
  return (
    <div className="review-index-item">
      <div className="review-index-left" >
        <div className="review-index-pic">
          <img src={review.author.avatar_url} />
        </div>
        <div className="review-index-col2">
          <div className="review-author">{review.author.username}</div>
          {editLink}
        </div>
      </div>
      <div className="review-index-right">
        <Rating
          className="rating"
          emptySymbol="fa fa-star-o fa-lg"
          fullSymbol="fa fa-star fa-lg"
          initialRating={review.rating}
          readonly
        />
        <div> {review.body} </div>
      </div>
    </div>
  );
};

export default ReviewIndexItem;
