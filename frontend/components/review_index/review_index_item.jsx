import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  rating(number) {
    switch (number) {
      case 1:
        return '☆';
      case 2:
        return '☆☆';
      case 3:
        return '☆☆☆';
      case 4:
        return '☆☆☆☆';
      case 5:
        return '☆☆☆☆☆';
    }
  }

  render() {
    const { review } = this.props;
    const editReviewLink = `/reviews/${review.id}/edit`;

    return (
      <div className='review-index-item'>
        <div className='review-index-left' >
          <div className='review-index-pic'>
            <img src={review.author.avatar_url} />
          </div>
          <div className='review-index-col2'>
            <div className='review-author'>{review.author.username}</div>
            <Link to={editReviewLink}>Edit Review</Link>
          </div>
        </div>
        <div className='review-index-right'>
          <div className='rating'> {this.rating(review.rating)} </div>
          <div> {review.body} </div>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
