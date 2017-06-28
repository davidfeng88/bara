import React from 'react';
import { Link } from 'react-router-dom';

import ReviewIndexContainer from '../review/review_index_container';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.id);
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

  render() {
    const { business } = this.props;
    const editBusinessLink = `/businesses/${this.props.match.params.id}/edit`;
    const newReviewLink =
      `/businesses/${this.props.business.id}/reviews/new`;
    if (business) {

      return(
        <div>
          <div className='business-show-title'>
            <div className='center'>
              <h1>{business.name}</h1>
              <div className='business-show-title-row1'>

                <div className='business-show-title-col'>
                  Reviews Info goes here<br/>
                  {this.price(business.price)}<br/>
                </div>

                <div className='business-show-title-col'>
                  <Link to={newReviewLink}> Write a Review</Link>
                </div>
              </div>

              <div className='business-show-title-row2'>
                <div className='info'>
                  <div className='show-map'>
                    the static show map goes here
                  </div>
                  <div className='text-info'>
                    {business.address}<br/>
                    {`${business.city}, ${business.state} ${business.zipcode}`}
                    <br/>
                    {business.phone}<br/>
                    <a>{business.url}</a><br/>
                    <Link to={editBusinessLink} >Edit</Link>
                  </div>
                </div>

                <div className='pictures'>
                  <img src={business.image_url} />
                  <img src={business.image_url} />
                  <img src={business.image_url} />
                </div>
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

// <ReviewIndexContainer />

export default BusinessShow;
