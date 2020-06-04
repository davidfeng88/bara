import React from 'react';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';

import { csrfToken } from '../../util/constants';
import { fetchBusiness } from '../../util/BusinessAPIUtil';
import { LoadingSpinner } from '../../util/BusinessInfoUtil';
import ErrorList from '../ErrorList';
import ReviewFormCore from './ReviewFormCore';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: {},
      review: {},
      errors: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchInfo(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formType !== this.props.formType) {
      this.fetchInfo(nextProps);
    } else if (
      this.props.formType === 'createReview' &&
      this.props.match.params.business_id !== nextProps.match.params.business_id
    ) {
      this.fetchInfo(nextProps);
    } else if (
      this.props.formType === 'editReview' &&
      this.props.match.params.id !== nextProps.match.params.id
    ) {
      this.fetchInfo(nextProps);
    }
  }

  fetchInfo = (props) => {
    window.scrollTo(0, 0);
    this.setState({
      business: {},
      review: {},
      errors: [],
      loading: true,
    });
    if (props.formType === 'createReview') {
      this.loadBusiness(props);
    } else {
      this.loadReview(props.match.params.id);
    }
  };

  loadBusiness = (props) => {
    fetchBusiness(props.match.params.business_id)
      .then(
        (business) => {
          if (props.currentUser &&
            business.reviewers[props.currentUser.id]) {
            const reviewId = business.reviewers[props.currentUser.id];
            this.props.history.push(`/reviews/${reviewId}/edit`);
          } else {
            this.setState({
              business,
              review: {},
              errors: [],
              loading: false,
            });
          }
        },
        errors => this.setState({
          business: {},
          review: {},
          errors: errors.responseJSON,
          loading: false,
        }),
      );
  };

  loadReview = async (reviewId) => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const review = await response.json();
      if (this.props.currentUser.id === review.user.id) {
        fetchBusiness(review.business.id)
          .then((business) => {
            this.setState({
              business,
              review,
              errors: [],
              loading: false,
            });
          });
      } else {
        this.setState({
          errors: ['Only the author can edit the review'],
          loading: false,
        });
      }
    } catch (e) {
      this.handleError(e);
    }
  };

  clearErrors = () => {
    this.setState({
      errors: [],
    });
  };

  handleReviewRatingChange = (rate) => {
    const {
      review,
    } = this.state;
    const updatedReview = update(review, {
      rating: {
        $set: rate,
      },
    });
    this.setState({
      review: updatedReview,
    });
  };

  handleReviewBodyChange = (e) => {
    e.preventDefault();
    const {
      review,
    } = this.state;
    const updatedReview = update(review, {
      body: {
        $set: e.currentTarget.value,
      },
    });
    this.setState({
      review: updatedReview,
    });
  };

  handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/reviews/${this.props.match.params.id}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      this.props.history.push(`/businesses/${this.state.review.business.id}`);
    } catch (e) {
      this.handleError(e);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    const { review } = this.state;
    const apiEndpoint = this.props.formType === 'createReview' ? `/api/businesses/${this.state.business.id}/reviews` : `/api/reviews/${review.id}`;
    const method = this.props.formType === 'createReview' ? 'POST' : 'PATCH';
    try {
      const response = await fetch(apiEndpoint, {
        method,
        headers: {
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          review,
        })
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      this.props.history.push(`/businesses/${this.state.business.id}`);
    } catch (e) {
      this.handleError(e);
    }
  };

  handleError = (e) => {
    this.setState({
      business: {},
      review: {},
      errors: e.responseJSON,
      loading: false,
    });
  };

  render() {
    const {
      business,
      review,
      errors,
      loading,
    } = this.state;
    const {
      formType,
    } = this.props;
    if (loading) {
      return (
        <LoadingSpinner />
      );
    }
    if (!business.id || (formType === 'editReview' && !review.id)) {
      return (
        <div className="center">
          <ErrorList
            errors={errors}
            clearErrors={this.clearErrors}
          />
          <Link to="/" className="link-as-button">
            Go Home
          </Link>
        </div>
      );
    }
    return (
      <div className="center review-form">
        <ErrorList
          errors={this.state.errors}
          clearErrors={this.clearErrors}
        />
        <ReviewFormCore
          formType={formType}
          business={business}
          review={review}
          handleReviewRatingChange={this.handleReviewRatingChange}
          handleReviewBodyChange={this.handleReviewBodyChange}
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
