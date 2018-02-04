import React from 'react';
import {
  fetchBusiness,
} from '../../util/business_api_util';

import ErrorList from '../error_list';
import BusinessShowCore from './business_show_core';

export default class BusinessShow extends React.Component {
  state = {
    business: null,
    errors: [],
    reviewId: null,
    loading: true,
  };

  componentDidMount = () => {
    console.log("%c this.props.match.params.id = ", this.props.match.params.id, 'font-size :30px; color: red;');
    this.fetchAndSaveBusiness(this.props);
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("%c this.props.match.params.id = ", this.props.match.params.id, 'font-size :30px; color: red;');
    console.log("nextProps.match.params.id = ", nextProps.match.params.id);
    if (this.businessChanged(nextProps)) {
      this.resetState();
      this.fetchAndSaveBusiness(nextProps);
    }
  };

  businessChanged = nextProps => (
    nextProps.match.params.id !== this.props.match.params.id
  );

  resetState = () => {
    this.setState({
      business: null,
      errors: [],
      reviewId: null,
      loading: true,
    });
  };

  fetchAndSaveBusiness = (props) => {
    fetchBusiness(props.match.params.id)
      .then(
        this.saveBusiness(props),
        this.recordErrors,
      );
    window.scrollTo(0, 0);
  };

  saveBusiness = props => (business) => {
    let reviewId = null;
    if (props.currentUser &&
      business.reviewers[props.currentUser.id]) {
      reviewId = business.reviewers[props.currentUser.id];
    }
    this.setState({
      business,
      reviewId,
      errors: [],
      loading: false,
    });
  };

  clearErrors = () => {
    this.setState({
      errors: [],
    });
  };

  recordErrors = (errors) => {
    this.setState({
      business: null,
      reviewId: null,
      errors: errors.responseJSON,
      loading: false,
    });
  };

  render = () => {
    const {
      business,
      errors,
      loading,
      reviewId,
    } = this.state;
    if (loading) {
      return (
        <img alt="" className="spinner" src={window.staticImages.spinner} />
      );
    }
    if (!business) {
      return (
        <div className="center">
          <ErrorList
            errors={errors}
            clearErrors={this.clearErrors}
          />
          <a href="#/" className="link-as-button">
            Go Home
          </a>
        </div>
      );
    }
    return (
      <BusinessShowCore
        business={business}
        reviewId={reviewId}
      />
    );
  };
}
