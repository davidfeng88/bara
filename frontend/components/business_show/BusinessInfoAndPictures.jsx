import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import {
  reviewNumber,
  price,
  tagContent,
} from '../../util/BusinessInfoUtil';

import ShowMap from './ShowMap';

const BusinessInfoAndPictures = ({
  business,
  reviewId,
}) => (
  <div className="business-show-title">
    <div className="center">
      <BusinessShowTitle
        business={business}
        reviewId={reviewId}
      />
      <BusinessInfo
        business={business}
      />
    </div>
  </div>
);

export default BusinessInfoAndPictures;

const BusinessShowTitle = ({
  business,
  reviewId,
}) => {
  let reviewButton = null;
  if (reviewId) {
    const editReviewLink =
      `/reviews/${reviewId}/edit`;
    reviewButton = (
      <div className="add-review-link business-show-title-col">
        <Link to={editReviewLink}>
          <i className="fa fa-star fa-lg" aria-hidden="true" />
          &nbsp;Edit My Review
        </Link>
      </div>
    );
  } else {
    const newReviewLink =
      `/businesses/${business.id}/reviews/new`;
    reviewButton = (
      <div className="add-review-link business-show-title-col">
        <Link to={newReviewLink}>
          <i className="fa fa-star fa-lg" aria-hidden="true" />
          &nbsp;Write a Review
        </Link>
      </div>
    );
  }

  return (
    <div className="business-show-title-row1">
      <div className="business-show-title-col">
        <h1>{business.name}</h1>
        <Rating
          className="rating"
          empty="fa fa-star-o fa-lg"
          full="fa fa-star fa-lg"
          initialRate={parseFloat(business.average_rating)}
          fractions={1}
          readonly
        />
        {reviewNumber(business)}<br />
        {price[business.price]}{tagContent(business)}
      </div>
      {reviewButton}
    </div>
  );
};

const BusinessInfo = ({
  business,
}) => (
  <div className="business-show-title-row2">
    <div className="info">
      {/* <ShowMap business={business} /> */}
      <BusinessTextInfo
        business={business}
      />
    </div>
    <BusinessPictures
      business={business}
    />
  </div>
);


const BusinessTextInfo = ({
  business,
}) => {
  const {
    address,
    city,
    state,
    zipcode,
  } = business;
  const editBusinessLink = `/businesses/${business.id}/edit`;
  const addressLine = (
    <div className="address-info">
      <div className="addresss-info-col1">
        <strong>
          <i className="fa fa-map-marker" aria-hidden="true" />
          &nbsp;&nbsp;&nbsp;{address}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`${city}, ${state} ${zipcode}`}
        </strong>
      </div>
      <div className="address-info-col2">
        <i className="fa fa-pencil" aria-hidden="true" />&nbsp;
        <Link to={editBusinessLink}>Edit</Link>
      </div>
    </div>);
  const phoneLine = business.phone ? (
    <div>
      <i className="fa fa-phone" aria-hidden="true" />
      &nbsp;&nbsp;{business.phone}
    </div>
  ) : null;
  const urlLine = business.url ? (
    <div>
      <i className="fa fa-external-link" aria-hidden="true" />
      &nbsp;<a href={`http://${business.url}`} target="_blank">
        {business.url}
      </a>
    </div>
  ) : null;
  return (
    <div className="text-info">
      {addressLine}
      {phoneLine}
      {urlLine}
    </div>
  );
};

const BusinessPictures = ({
  business,
}) => (
  <div className="pictures">
    <img alt="" src={window.staticImages.businessDefault1} />
    <img alt="" src={business.image_url} />
    <img alt="" src={window.staticImages.businessDefault2} />
  </div>
);
