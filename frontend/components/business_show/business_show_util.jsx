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

export const extraInfo = business => {
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
      <p>Takes Reservations&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Delivery&nbsp;&nbsp;<span className='bold'>No</span></p>
      <p>Take-out&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Accepts Credit Cards&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Accepts Apple Pay&nbsp;&nbsp;<span className='bold'>No</span></p>
      <p>Accepts Bitcoin&nbsp;&nbsp;<span className='bold'>No</span></p>
      <p>Good For&nbsp;&nbsp;<span className='bold'>Dinner</span></p>
      <p>Parking&nbsp;&nbsp;<span className='bold'>Garage, Street</span></p>
      <p>Bike Parking&nbsp;&nbsp;<span className='bold'>No</span></p>
      <p>Wheelchair Accessible&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Good for Kids&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Good for Groups&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Attire&nbsp;&nbsp;<span className='bold'>Casual</span></p>
      <p>Ambience&nbsp;&nbsp;<span className='bold'>Casual, Trendy</span></p>
      <p>Noise Level&nbsp;&nbsp;<span className='bold'>Average</span></p>
      <p>Alcohol&nbsp;&nbsp;<span className='bold'>Full Bar</span></p>
      <p>Outdoor Seating&nbsp;&nbsp;<span className='bold'>No</span></p>
      <p>Wi-Fi&nbsp;&nbsp;<span className='bold'>Free</span></p>
      <p>Has TV&nbsp;&nbsp;<span className='bold'>No</span></p>
      <p>Dogs Allowed&nbsp;&nbsp;<span className='bold'>No</span></p>
      <p>Waiter Service&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Drive-Thru&nbsp;&nbsp;<span className='bold'>No</span></p>
      <p>Caters&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Offers Military Discount&nbsp;&nbsp;<span className='bold'>Yes</span></p>
      <p>Gender Neutral Restrooms&nbsp;&nbsp;<span className='bold'>Yes</span></p>
    </div>
  );
};
