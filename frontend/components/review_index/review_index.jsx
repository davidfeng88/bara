import React from 'react';
import { Link } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  render() {
    let reviewsEntries;
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
  }

}

export default ReviewIndex;
