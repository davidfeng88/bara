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
import ShowMap from './show_map';
import ReviewIndexContainer from '../review_index/review_index_container';

const BusinessShowCore = ( {
  business,
  currentUser,
} ) => (
  <div>
    <div className='business-show-title'>
      <div className='center'>
        {businessShowTitle(business, currentUser)}
        <div className='business-show-title-row2'>
          <div className='info'>
            <ShowMap business={business} />
            {textInfo(business)}
          </div>
          <div className='pictures'>
            <img src={window.staticImages.businessDefault1} />
            <img src={business.image_url} />
            <img src={window.staticImages.businessDefault2} />
          </div>
        </div>
      </div>
    </div>
    <div className='review-index-main'>
      <div className='center index-grid show-grid'>
        <div className='index-grid-col1 show-grid-col1'>
          <h2>Reviews for
          <span className='normal black'> {business.name}</span></h2>
          <ReviewIndexContainer reviews={business.reviews} />
        </div>
        {extraInfo(business)}
      </div>
    </div>
  </div>
);

export default BusinessShowCore;

const textInfo = business => {
  let {
    address,
    city,
    state,
    zipcode
  } = business;
  const editBusinessLink = `/businesses/${business.id}/edit`;
  let addressLine = (
    <div className='address-info'>
      <div className='addresss-info-col1'>
        <strong>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          &nbsp;&nbsp;&nbsp;{address}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`${city}, ${state} ${zipcode}`}
        </strong>
      </div>
      <div className='address-info-col2'>
        <i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;
        <Link to={editBusinessLink} >Edit</Link>
      </div>
    </div> );
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
  return (
    <div className='text-info'>
      {addressLine}
      {phoneLine}
      {urlLine}
    </div>
  );
};

const businessShowTitle = ( business, currentUser ) => {
  let reviewButton = null;
  if ( currentUser.reviewed_businesses[ business.id ] ) {
    const editReviewLink =
      `/reviews/${currentUser.reviewed_businesses[business.id]}/edit`;
    reviewButton = (
      <div className='add-review-link business-show-title-col'>
        <Link to={editReviewLink}>
          <i className="fa fa-star fa-lg" aria-hidden="true"></i>
          &nbsp;Edit My Review</Link>
      </div>
    );
  } else {
    const newReviewLink =
      `/businesses/${business.id}/reviews/new`;
    reviewButton = (
      <div className='add-review-link business-show-title-col'>
        <Link to={newReviewLink}>
          <i className="fa fa-star fa-lg" aria-hidden="true"></i>
          &nbsp;Write a Review</Link>
      </div>
    );
  }

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
      {reviewButton}
    </div>
  );
};

const extraInfo = business => {
  const editBusinessLink =
    `/businesses/${business.id}/edit`;
  return (
    <div className='show-grid-col2'>
      <h3>Hours</h3>
      <table id='hours'>
        <tbody>
        <tr>
            <th>Mon</th>
            <td>Closed</td>
        </tr>
        <tr>
            <th>Tue</th>
            <td>11:30 am - 2:00 am</td>
        </tr>
        <tr>
            <th>Wed</th>
            <td>11:30 am - 2:00 am</td>
        </tr>
        <tr>
            <th>Thu</th>
            <td>11:30 am - 2:00 am</td>
        </tr>
        <tr>
            <th>Fri</th>
            <td>11:30 am - 2:00 am</td>
        </tr>
        <tr>
            <th>Sat</th>
            <td>11:30 am - 2:00 am</td>
        </tr>
        <tr>
            <th>Sun</th>
            <td>11:30 am - 2:00 am</td>
        </tr>
        </tbody>
      </table>
      <div className='edit-business-link'>
        &nbsp;<i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;
        <Link to={editBusinessLink} >Edit business info</Link>
      </div>

      <h3>More business info</h3>
      <p>Takes Reservations&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Delivery&nbsp;&nbsp;<strong>No</strong></p>
      <p>Take-out&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Accepts Credit Cards&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Accepts Apple Pay&nbsp;&nbsp;<strong>No</strong></p>
      <p>Accepts Bitcoin&nbsp;&nbsp;<strong>No</strong></p>
      <p>Good For&nbsp;&nbsp;<strong>Dinner</strong></p>
      <p>Parking&nbsp;&nbsp;<strong>Garage, Street</strong></p>
      <p>Bike Parking&nbsp;&nbsp;<strong>No</strong></p>
      <p>Wheelchair Accessible&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Good for Kids&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Good for Groups&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Attire&nbsp;&nbsp;<strong>Casual</strong></p>
      <p>Ambience&nbsp;&nbsp;<strong>Casual, Trendy</strong></p>
      <p>Noise Level&nbsp;&nbsp;<strong>Average</strong></p>
      <p>Alcohol&nbsp;&nbsp;<strong>Full Bar</strong></p>
      <p>Outdoor Seating&nbsp;&nbsp;<strong>No</strong></p>
      <p>Wi-Fi&nbsp;&nbsp;<strong>Free</strong></p>
      <p>Has TV&nbsp;&nbsp;<strong>No</strong></p>
      <p>Dogs Allowed&nbsp;&nbsp;<strong>No</strong></p>
      <p>Waiter Service&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Drive-Thru&nbsp;&nbsp;<strong>No</strong></p>
      <p>Caters&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Offers Military Discount&nbsp;&nbsp;<strong>Yes</strong></p>
      <p>Gender Neutral Restrooms&nbsp;&nbsp;<strong>Yes</strong></p>
    </div>
  );
};
