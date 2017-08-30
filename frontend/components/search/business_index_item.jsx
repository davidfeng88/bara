import React from 'react';
import { Link } from 'react-router-dom';
import values from 'lodash/values';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    e.preventDefault();
    this.props.highlightBusiness(this.props.business.id);
  }

  handleMouseLeave(e) {
    e.preventDefault();
    this.props.highlightBusiness(-1);
  }

  price(number) {
    switch (number) {
      case 1:
        return '$';
      case 2:
        return '$$';
      case 3:
        return '$$$';
      case 4:
        return '$$$$';
    }
  }

  topReviewPicture(business) {
    if (business.reviews) {
      let reviewArray = values(business.reviews);
      const url =
      `${reviewArray[reviewArray.length - 1].author.avatar_url}`;
      return <img src={url} />;
    }
    else {
      return null;
    }
  }

  topReviewBody(business) {
    if (business.reviews) {
      let reviewArray = values(business.reviews);
      return reviewArray[reviewArray.length - 1].body;
    }

    else
      return ('No review for this business yet');
  }

  averageRating(number) {
    if (number) {
      return (
        `Average Rating: ${number.substring(0, 3)}`
      );
    } else {
      return `No reviews yet`;
    }
  }

  render() {
    const { business } = this.props;
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className='index-item'>

        <div className='index-item-row1'>

          <div className='index-pic'>
            <img src={business.image_url} />
          </div>

          <div className='index-li'>
            <div className='col1'>
              <li>
                <Link to={`/businesses/${business.id}`}>{business.name}</Link>
              </li>
              {this.averageRating(business.average_rating)}<br/>
              {this.price(business.price)}<br/>
            </div>

            <div className='col2'>
              {business.address}<br/>
              {`${business.city}, ${business.state} ${business.zipcode}`}<br/>
              {business.phone}<br/>
            </div>

          </div>

        </div>

        <div className='index-item-row2'>
          <div className='index-item-review-pic'>
            {this.topReviewPicture(business)}
          </div>

          <div className='top-review'>
            {this.topReviewBody(business)}
          </div>

        </div>
      </div>
    );

  }
}

export default BusinessIndexItem;
