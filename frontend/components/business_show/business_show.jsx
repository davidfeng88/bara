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

  address(business) {
    let {address, city, state, zipcode} = business;
    const editBusinessLink = `/businesses/${this.props.match.params.id}/edit`;
    return(
      <div className='address-info'>
      <div className='addresss-info-col1'>
      <span className='bold'>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        &nbsp;&nbsp;&nbsp;{address}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {`${city}, ${state} ${zipcode}`}
      </span>
      </div>
      <div className='address-info-col2'>
        <i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;
        <Link to={editBusinessLink} >Edit</Link>
      </div>
    </div>
    );
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
        &nbsp;<a href={href} target='_blank'>{business.url}</a>
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
      const newReviewLink =
        `/businesses/${business.id}/reviews/new`;
      let {name, average_rating, price, image_url } = business;
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
                  <Link to={newReviewLink}>
                    <i className="fa fa-star fa-lg" aria-hidden="true"></i> Write a Review</Link>
                </div>
              </div>

              <div className='business-show-title-row2'>
                <div className='info'>
                  <ShowMap business={business} fetchBusiness={fetchBusiness} />
                  <div className='text-info'>
                    {this.address(business)}
                    {this.phone(business)}
                    {this.url(business)}
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
