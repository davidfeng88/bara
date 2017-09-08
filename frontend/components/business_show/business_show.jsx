import React from 'react';
import { Link } from 'react-router-dom';
import { fetchBusiness } from '../../util/business_api_util';

import ErrorList from '../error_list';
import {
  businessShowTitle,
  textInfo,
  extraInfo,
} from './business_show_util';
import ShowMap from './show_map';
import ReviewIndexContainer from '../review_index/review_index_container';

export default class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      business: null,
      errors: [],
      loaded: false,
    });

    this.clearErrors = this.clearErrors.bind(this);
  }

  clearErrors() {
    this.setState({errors: []});
  }

  componentDidMount() {
    fetchBusiness(this.props.match.params.id)
      .then(
        business => this.setState({
          business,
          errors: [],
          loaded: true,
        }),
        errors => this.setState({
          business: null,
          errors: errors.responseJSON,
          loaded: true,
        })
      );
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        business: null,
        errors: [],
        loaded: false,
      });
      fetchBusiness(nextProps.match.params.id)
        .then(
          business => this.setState({
            business,
            errors: [],
            loaded: true,
          }),
          errors => this.setState({
            business: null,
            errors: errors.responseJSON,
            loaded: true,
          })
        );
      window.scrollTo(0,0);
    }
  }

  render() {
    const { business, errors, loaded } = this.state;
    if (!loaded) {
      return(
        <img className='spinner' src={window.staticImages.spinner} />
      );
    }
    if (!business) {
      return(
        <div className='center'>
          <ErrorList errors={errors}
            clearErrors={this.clearErrors} />
          <Link to="/" className='link-as-button'>
            Go Home
          </Link>
        </div>
      );
    }
    return(
      <div>
        <div className='business-show-title'>
          <div className='center'>
            {businessShowTitle(business)}
            <div className='business-show-title-row2'>
              <div className='info'>
                <ShowMap business={business} />
                {textInfo(business)}
              </div>
              <div className='pictures'>
                <img src={window.staticImages.businessDefault1} />
                <img src={business.image_url} />
                <img src={window.staticImages.businessDefault2} />
              </div>
            </div>
          </div>
        </div>
        <div className='review-index-main'>
          <div className='center index-grid show-grid'>
            <div className='index-grid-col1 show-grid-col1'>
              <h2>Reviews for
              <span className='normal black'> {business.name}</span></h2>
              <ReviewIndexContainer reviews={business.reviews} />
            </div>
            {extraInfo(business)}
          </div>
        </div>
      </div>
    );
  }
}
