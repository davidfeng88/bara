import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { review } = this.props;
    const editReviewLink = `/reviews/${review.id}/edit`;

    return (
      <div>
        <div>Author: {review.author.username}</div>
        <div> <img src={review.author.avatar_url} /></div>
        <Link to={editReviewLink}>Edit Review</Link>
        <div> Rating: {review.rating} </div>
        <div> {review.body} </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
