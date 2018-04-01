import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import {
  price,
  tagContent,
} from '../../util/BusinessInfoUtil';

const ReviewFormCore = ({
  formType,
  business,
  review,
  handleReviewRatingChange,
  handleReviewBodyChange,
  handleDelete,
  handleSubmit,
}) => {
  let {
    rating = 0,
    body = '', // takes care of undefined
  } = review;
  body = body || ''; // body can be null, convert to ''
  const titleText =
    formType === 'createReview' ?
      <h3>Write a Review</h3> :
      <h3>Edit Your Review</h3>;

  const businessLink = `/businesses/${business.id}`;
  const cancelButton = (
    <Link to={businessLink}>Cancel</Link>
  );

  const deleteButton =
    formType === 'createReview' ?
      null :
      (<div className="input-wrapper-narrow">
        <button onClick={handleDelete} >Delete Review</button>
       </div>);

  const ratingTooltip = ({
    0: 'Select your rating.',
    1: 'Eek! Methinks not.',
    2: 'Meh. I\'ve experinced better.',
    3: 'A-OK.',
    4: 'Yay! I\'m a fan.',
    5: 'Woohoo! As good as it gets!',
  });

  const handleRate = (rate) => {
    let tooltip = '';
    switch (rate) {
      case 1:
        tooltip = 'Eek! Methinks not.';
        break;
      case 2:
        tooltip = 'Meh. I\'ve experinced better.';
        break;
      case 3:
        tooltip = 'A-OK.';
        break;
      case 4:
        tooltip = 'Yay! I\'m a fan.';
        break;
      case 5:
        tooltip = 'Woohoo! As good as it gets!';
        break;
      default:
        tooltip = ratingTooltip[review.rating] || 'Select your rating.';
    }
    document.getElementById('rating-tooltip')
      .innerHTML = tooltip;
  };

  return (
    <div className="flex-left">
      <div className="review-form-col-1">
        {titleText}
        <ReviewFormBusienssShow business={business} />
        <div className="label">Your Review</div>
        <form onSubmit={handleSubmit}>
          <div className="review-form-input">
            <div className="star-line">
              <label
                htmlFor="review-rating"
                className="hidden"
              >
                Review Rating
              </label>
              <span className="rating-star">
                <Rating
                  id="review-rating"
                  className="rating"
                  empty="fa fa-star-o fa-lg"
                  full="fa fa-star fa-lg"
                  initialRate={rating}
                  onChange={handleReviewRatingChange}
                  onRate={handleRate}
                />
              </span>
              <div id="rating-tooltip">
                Select your rating.
              </div>
            </div>

            <label
              htmlFor="review-body"
              className="hidden"
            >
              Review Body
            </label>
            <textarea
              id="review-body"
              type="text"
              value={body}
              onChange={handleReviewBodyChange}
              placeholder="Your review helps others learn about
              great local businesses.
              Please don't review this business if you received
              a freebie for writing this review, or if you're
              connected in any way to the owner or employees."
            />
          </div>
          <div className="flex-left-center">
            <div className="input-wrapper-narrow">
              <button type="submit" >Post Review</button>
            </div>
            {deleteButton}
            {cancelButton}
          </div>

          <p className="subtle-text-left">
            * You can always edit or remove reviews later.
          </p>
        </form>
      </div>
      <ReviewFormReviewIndex business={business} />
    </div>
  );
};

export default ReviewFormCore;

const ReviewFormBusienssShow = ({
  business,
}) => (
  <div className="flex-left review-form-business">
    <Link to={`/businesses/${business.id}`}>
      <img src={business.image_url} />
    </Link>
    <div>
      <Link className="business-name-link" to={`/businesses/${business.id}`}>
        {business.name}
      </Link><br />
      {price[business.price]}{tagContent(business)}<br />
      {business.address}<br />
      {`${business.city}, ${business.state} ${business.zipcode}`}
    </div>
  </div>
);
const ReviewFormReviewIndex = ({
  business,
}) => {
  const reviews = business.reviews.slice(0, 5);
  // if business has less than 5 reviews,
  // it will take whatever is in the array
  const reviewsEntries = reviews.length > 0 ? (
    reviews.map(review => (
      <ReviewFormReviewIndexItem
        key={review.id}
        review={review}
      />
    ))
  ) : (
    <div className="review-form-review-placehoder">
      No review for this business yet.
    </div>
  );
  return (
    <div className="review-form-col-2">
      <h3>
        Reviews for {business.name}
      </h3>
      <ul>
        { reviewsEntries }
      </ul>
    </div>
  );
};

const ReviewFormReviewIndexItem = ({
  review,
}) => (
  <div className="review-form-index-item">
    <div className="flex-left">
      <img src={review.author.avatar_url} />
      {review.author.username}
    </div>
    <Rating
      className="rating"
      empty="fa fa-star-o fa-lg"
      full="fa fa-star fa-lg"
      initialRate={review.rating}
      readonly
    />
    <div>{review.body}</div>
  </div>
);
