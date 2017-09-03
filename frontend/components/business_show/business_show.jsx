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
      loaded: false,
      errors: [],
      business: null,
    });

    this.clearErrors = this.clearErrors.bind(this);
  }

  clearErrors() {
    this.setState({errors: []});
  }

  componentDidMount() {
    fetchBusiness(this.props.match.params.id)
      .then(
        (business) => this.setState({
          loaded: true,
          business,
          errors: [],
        }),
        (errors) => this.setState({
          loaded: true,
          errors: errors.responseJSON,
          business: null,
        })
      );
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        loaded: false,
        business: null,
        errors: [],
      });
      fetchBusiness(nextProps.match.params.id)
        .then(
          (business) => this.setState({
            loaded: true,
            business,
            errors: [],
          }),
          (errors) => this.setState({
            loaded: true,
            errors: errors.responseJSON,
            business: null,
          })
        );
      window.scrollTo(0,0);
    }
  }


  render() {
    const { business } = this.state;
    if (this.state.loaded) {
      if (business) {
        let reviewsEntries =
          <div className='review-placehoder'>
            No review for this business yet.
          </div>;
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
      } else {
        return(
          <div className='center'>
            <ErrorList errors={ this.state.errors }
              clearErrors={this.clearErrors} />
            <Link to="/" className='link-as-button'>
              Go Home
            </Link>
          </div>
        );
      }
    } else {
      return(
        <img className='spinner' src={window.staticImages.spinner} />
      );
    }
  }
}
