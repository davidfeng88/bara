import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndex from './ReviewIndex/ReviewIndex';

const ReviewIndexAndExtraInfo = ({
  business,
}) => (
  <div className="review-index-main">
    <div className="center index-grid show-grid">
      <div className="index-grid-col1 show-grid-col1">
        <h2>Reviews for
          <span className="normal black"> {business.name}</span>
        </h2>
        <ReviewIndex reviews={business.reviews} />
      </div>
      {extraInfo(business)}
    </div>
  </div>
);

export default ReviewIndexAndExtraInfo;

const extraInfo = (business) => {
  const editBusinessLink =
    `/businesses/${business.id}/edit`;
  return (
    <div className="show-grid-col2">
      <h3>Hours</h3>
      <table id="hours">
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
      <div className="edit-business-link">
        &nbsp;<i className="fa fa-pencil" aria-hidden="true" />&nbsp;
        <Link to={editBusinessLink}>Edit business info</Link>
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
