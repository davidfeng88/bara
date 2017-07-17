import React from 'react';
import { Link } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  render() {
    let reviewsEntries;
    const editBusinessLink = `/businesses/${this.props.match.params.id}/edit`;
    if (this.props.reviews.length > 0) {
      reviewsEntries = this.props.reviews.map(review => (
          <ReviewIndexItem key={ review.id }
            review={ review } currentUser={this.props.currentUser} />
        )
      );
    } else {
      reviewsEntries = <div className='review-placehoder'>No review for this business yet.</div>;
    }

    return(
      <div>
        <div className='review-index-main'>
          <div className='center index-grid show-grid'>

            <div className='index-grid-col1 show-grid-col1'>
              <h2>Reviews for
              <span className='normal black'> {this.props.business.name}</span></h2>
              <ul className="review-index">
                { reviewsEntries }
              </ul>
            </div>

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
          </div>
        </div>
      </div>
    );
  }

}

export default ReviewIndex;
