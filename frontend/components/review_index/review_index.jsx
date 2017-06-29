import React from 'react';
import { Link } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  render() {
    if (this.props.reviews.length > 0) {
      const reviewsEntries = this.props.reviews.map(review => (
          <ReviewIndexItem key={ review.id } review={ review } />
        )
      );

      return(
        <div>
          <div className='review-index-main'>
            <div className='center index-grid'>

              <div className='index-grid-col1'>
                <h2>Reviews for
                <span className='normal black'> {this.props.business.name}</span></h2>
                <ul className="review-index">
                  { reviewsEntries }
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>No review for this business yet.</div>
      );
    }
  }

}

export default ReviewIndex;
