import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { reviewNumber, price, tagContent } from '../../util/business_info_util';

export const textInfo = business => {
  let {address, city, state, zipcode} = business;
  const editBusinessLink = `/businesses/${business.id}/edit`;
  let addressLine = (
    <div className='address-info'>
    <div className='addresss-info-col1'>
    <span className='bold'>
      <i className="fa fa-map-marker" aria-hidden="true"></i>
      &nbsp;&nbsp;&nbsp;{address}<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`${city}, ${state} ${zipcode}`}
    </span>
    </div>
    <div className='address-info-col2'>
      <i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;
      <Link to={editBusinessLink} >Edit</Link>
    </div>
  </div>
  );
  let phoneLine = business.phone ? (
      <div>
      <i className="fa fa-phone" aria-hidden="true"></i>
      &nbsp;&nbsp;{business.phone}
      </div>
    ) : null;
  let urlLine = business.url ? (
      <div>
      <i className="fa fa-external-link" aria-hidden="true"></i>
      &nbsp;<a href={`http://${business.url}`} target='_blank'>
        {business.url}</a>
      </div>
    ) : null;
  return(
    <div className='text-info'>
      {addressLine}
      {phoneLine}
      {urlLine}
    </div>
  );
};

export const businessShowTitle = business => {
  const newReviewLink =
    `/businesses/${business.id}/reviews/new`;
  return (
    <div className='business-show-title-row1'>
      <div className='business-show-title-col'>
        <h1>{business.name}</h1>
        <Rating className='rating'
          empty="fa fa-star-o fa-lg"
          full="fa fa-star fa-lg"
          initialRate={parseFloat(business.average_rating)}
          fractions={1}
          readonly
        />
        {reviewNumber(business)}<br/>
        {price[business.price]}{tagContent(business)}
      </div>
      <div className='add-review-link business-show-title-col'>
        <Link to={newReviewLink}>
          <i className="fa fa-star fa-lg" aria-hidden="true"></i>
          &nbsp;Write a Review</Link>
      </div>
    </div>
  );
};
