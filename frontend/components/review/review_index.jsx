import React from 'react';
import { Link } from 'react-router-dom';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  render() {
    debugger
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
                <ol className="review-index">
                  { reviewsEntries }
                </ol>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default ReviewIndex;
