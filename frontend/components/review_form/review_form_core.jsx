import React from 'react';
import Rating from 'react-rating';
import {
  Link
} from 'react-router-dom';
import {
  price,
  tagContent
} from '../../util/business_info_util';

const ReviewFormCore = ( {
  formType,
  business,
  review,
  handleChange,
  handleDelete,
  handleSubmit,
} ) => {

  const titleText =
    formType === 'createReview' ?
    <h3>Write a Review</h3> :
    <h3>Edit Your Review</h3>;

  const deleteButton =
    formType === 'createReview' ?
    null :
    <div className='input-wrapper'>
      <button onClick={handleDelete} >Delete Review</button>
    </div>;

  return (
    <div className='flex-left'>
      <div className='review-form-col-1'>
        {titleText}
        <ReviewFormBusienssShow business={business} />
      </div>
      <ReviewFormReviewIndex business={business}/>
    </div>
  );
};

export default ReviewFormCore;

const ReviewFormBusienssShow = ( {
  business
} ) => (
  <div className='flex-left review-form-business'>
    <img src={business.image_url} />
    <div>
      <Link className='business-name-link' to={`/businesses/${business.id}`}>
        {business.name}
      </Link><br />
      {price[business.price]}{tagContent(business)}<br />
      {business.address}<br/>
      {`${business.city}, ${business.state} ${business.zipcode}`}
    </div>
  </div>
);
const ReviewFormReviewIndex = ( {
  business
} ) => {
  let reviews = business.reviews.slice( 0, 5 );
  // if business has less than 5 reviews,
  // it will take whatever is in the array
  let reviewsEntries = reviews.length > 0 ? (
    reviews.map( review => (
      <ReviewFormReviewIndexItem
        key={ review.id }
        review={ review }
      />
    ) )
  ) : (
    <div className='review-placehoder'>
      No review for this business yet.
    </div>
  );
  return (
    <div className='review-form-col-2'>
      <h3>
        Reviews for {business.name}
      </h3>
      <ul>
        { reviewsEntries }
      </ul>
    </div>
  );
};

const ReviewFormReviewIndexItem = ( {
  review
} ) => (
  <div className='review-form-index-item'>
    <div className='flex-left'>
      <img src={review.author.avatar_url} />
      {review.author.username}
    </div>
    <Rating className='rating'
      empty="fa fa-star-o fa-lg"
      full="fa fa-star fa-lg"
      initialRate={review.rating}
      readonly
    />
    <div>{review.body}</div>
  </div>
);

/* <div className='center flex-box'>
  <div className='col-1-2'>
    <div className="business-form-container">
      <form onSubmit={this.handleSubmit} className="business-form-box">
        <h2>{this.titleText()}</h2>
        <div className="business-form">
          <label htmlFor='rating'>Your Rating</label>
          <select className='input-wrapper'
            id="rating" value={this.state.rating}
            onChange={this.update('rating')} >
            <option value='1' >
              ☆ - Eek! Methinks not.</option>
            <option value='2' >
              ☆☆ - Meh. I've experinced better.</option>
            <option value='3' >
              ☆☆☆ - A-OK.</option>
            <option value='4' >
              ☆☆☆☆ - Yay! I'm a fan.</option>
            <option value='5' >
              ☆☆☆☆☆ - Woohoo! As good as it gets!</option>
          </select>
          <br />
          <div className='input-wrapper'>
            <textarea type="text"
              id="body"
              onChange={this.update('body')}
              className="login-input"
              placeholder="Your review helps others learn about great
              local businesses.

              Please don't review this business if you received a
              freebie for writing this review, or if you're connected
              in any way to the owner or employees."
              value={this.state.body} />
          </div>
          <div className='input-wrapper'>
            <button type="submit" >Post Review</button>
          </div>
          {this.deleteButton()}
        </div>
      </form>
    </div>
  </div>
</div>
</div> */
