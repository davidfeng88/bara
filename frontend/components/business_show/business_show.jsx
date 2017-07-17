import React from 'react';
import { Link } from 'react-router-dom';

import ShowMap from './show_map';
import ReviewIndexContainer from '../review_index/review_index_container';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.id);
    window.scrollTo(0,0);
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

  averageRating(number) {
    if (number) {
      return (
        `Average Rating: ${number.substring(0, 3)}`
      );
    } else {
      return `No reviews yet`;
    }
  }

  phone(business) {
    if (business.phone) {
      return(
        <div>
        <i className="fa fa-phone" aria-hidden="true"></i>
        &nbsp;&nbsp;{business.phone}
        </div>
      );
    } else
      return null;
  }

  url(business) {
    if (business.url) {
      let href = `http://${business.url}`;
      return(
        <div>
        <i className="fa fa-external-link" aria-hidden="true"></i>
        &nbsp;&nbsp;<a href={href} target='_blank'>{business.url}</a>
        </div>
      );
    } else
      return null;
  }

  render() {
    const { business, fetchBusiness } = this.props;
    // if user go to /business/1 without go through the index page first
    // the store is empty and business will be undefined
    // we will fetch the business after it mounted and re render this
    // component
    if (business) {
      const editBusinessLink = `/businesses/${this.props.match.params.id}/edit`;
      const newReviewLink =
        `/businesses/${business.id}/reviews/new`;
      let {name, average_rating, price, address,
        city, state, zipcode, image_url } = business;
      return(
        <div>
          <div className='business-show-title'>
            <div className='center'>
              <h1>{name}</h1>
              <div className='business-show-title-row1'>

                <div className='business-show-title-col'>
                  {this.averageRating(average_rating)}<br/>
                  {this.price(price)}<br/>
                </div>

                <div className='add-review-link business-show-title-col'>
                  <Link to={newReviewLink}>☆ Write a Review</Link>
                </div>
              </div>

              <div className='business-show-title-row2'>
                <div className='info'>
                  <ShowMap business={business} fetchBusiness={fetchBusiness} />
                  <div className='text-info'>
                    <span className='bold'>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;&nbsp;&nbsp;{address}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {`${city}, ${state} ${zipcode}`}
                    </span><br/>
                    {this.phone(business)}
                    {this.url(business)}
                    <Link to={editBusinessLink} >Edit</Link>
                  </div>
                </div>

                <div className='pictures'>
                  <img src={image_url} />
                  <img src={image_url} />
                  <img src={image_url} />
                </div>
              </div>
            </div>
          </div>

         <ReviewIndexContainer />

        </div>
      );
    } else {
      return null;
    }
  }
}

export default BusinessShow;
