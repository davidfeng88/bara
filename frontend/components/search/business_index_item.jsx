import React from 'react';
import Rating from 'react-rating';
import {
  Link
} from 'react-router-dom';
import {
  reviewNumber,
  price,
  tagContent
} from '../../util/business_info_util';

const topReview = business => {
  let picture = null;
  let reviewBody = 'No review for this business yet';
  if ( business.latest_review ) {
    let review = business.latest_review;
    const url = `${review.author.avatar_url}`;
    picture = <img src={url} />;
    reviewBody = review.body;
  }
  return (
    <div className='index-item-row2'>
      <div className='index-item-review-pic'>
        {picture}
      </div>
      <div className='top-review'>
        {reviewBody}
      </div>
    </div>
  );
};

const BusinessIndexItem = ( {
  business,
  highlightBusiness
} ) => (
  <div
    onMouseEnter={() =>
      highlightBusiness(business.id)}
    onMouseLeave={() =>
      highlightBusiness(-1)}
    className='index-item'>
    <div className='index-item-row1'>
      <div className='index-pic'>
        <img src={business.image_url} />
      </div>
      <div className='index-li'>
        <div className='col1'>
          <li>
            <Link to={`/businesses/${business.id}`}>{business.name}</Link>
          </li>
          <Rating className='rating'
            empty="fa fa-star-o fa-lg"
            full="fa fa-star fa-lg"
            initialRate={parseFloat(business.average_rating)}
            readonly
          />
          {reviewNumber(business)}
          <br/>
          {price[business.price]}{tagContent(business)}
        </div>
        <div className='col2'>
          {business.address}<br/>
          {`${business.city}, ${business.state} ${business.zipcode}`}<br/>
          {business.phone}<br/>
        </div>
      </div>
    </div>
    {topReview(business)}
  </div>
);

export default BusinessIndexItem;
