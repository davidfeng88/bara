import React from 'react';
import { Link } from 'react-router-dom';
import { averageRating, price } from '../search/business_index_item';
import ShowMap from './show_map';
import ReviewIndexContainer from '../review_index/review_index_container';
import ErrorList from '../error_list';

const textInfo = business => {
  let {address, city, state, zipcode} = business;
  const editBusinessLink = `/businesses/${business.id}/edit`;
  let addressLine = (
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
  let phoneLine = business.phone ? (
      <div>
      <i className="fa fa-phone" aria-hidden="true"></i>
      &nbsp;&nbsp;{business.phone}
      </div>
    ) : null;
  let urlLine = business.url ? (
      <div>
      <i className="fa fa-external-link" aria-hidden="true"></i>
      &nbsp;<a href={`http://${business.url}`} target='_blank'>
        {business.url}</a>
      </div>
    ) : null;
  return(
    <div className='text-info'>
      {addressLine}
      {phoneLine}
      {urlLine}
    </div>
  );
};

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({loaded: false});
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.id)
      .then(
        () => this.setState({loaded: true}),
        () => this.setState({loaded: true})
      );
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({loaded: false});
      this.props.fetchBusiness(nextProps.match.params.id)
        .then(
          () => this.setState({loaded: true}),
          () => this.setState({loaded: true})
        );
      window.scrollTo(0,0);
    }
  }

  render() {
    const { business } = this.props;
    if (this.state.loaded) {
      if (business) {
        const newReviewLink =
          `/businesses/${business.id}/reviews/new`;
        let {name, image_url, tags } = business;
        let tagsContent = [];
        if (tags) {
          tagsContent = tags.map( tag => tag.label);
        }
        return(
          <div>
            <div className='business-show-title'>
              <div className='center'>
                <h1>{name}</h1>
                <h3>{tagsContent}</h3>
                <div className='business-show-title-row1'>
                  <div className='business-show-title-col'>
                    {averageRating(business.average_rating)}<br/>
                    {price[business.price]}<br/>
                  </div>

                  <div className='add-review-link business-show-title-col'>
                    <Link to={newReviewLink}>
                      <i className="fa fa-star fa-lg" aria-hidden="true"></i>
                      &nbsp;Write a Review</Link>
                  </div>
                </div>

                <div className='business-show-title-row2'>
                  <div className='info'>
                    <ShowMap business={business} />
                    {textInfo(business)}
                  </div>

                  <div className='pictures'>
                    <img src={window.staticImages.businessDefault1} />
                    <img src={image_url} />
                    <img src={window.staticImages.businessDefault2} />
                  </div>
                </div>
              </div>
            </div>

          <ReviewIndexContainer />

          </div>
        );
      } else {
        return(
          <div>
            <ErrorList errors={ this.props.errors }
              clearErrors={this.props.clearErrors} />
            <div className='input-wrapper'>
              <Link to='/businesses/?name=&location=New%20York'>Back to Restaurants</Link>
            </div>
          </div>
        );
      }
    } else {
      return(
        <img className='spinner' src={window.staticImages.spinner} />
      );
    }
  }
    // if user go to /business/1 without go through the index page first
    // the store is empty and business will be undefined
    // we will fetch the business after it mounted and re render this
    // component
}

export default BusinessShow;
