import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const editReviewLink =
      `/reviews/${this.props.review.id}/edit`;

    return (
      <div>
        <Link to={editReviewLink}>Edit Review</Link>
        <div> Rating: {this.props.review.rating} </div>
        <div> {this.props.review.body} </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
