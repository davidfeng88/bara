import React from 'react';
import {
  Link
} from 'react-router-dom';
import update from 'immutability-helper';

import {
  createReview,
  fetchReview,
  editReview,
  deleteReview,
} from '../../util/review_api_util';
import {
  fetchBusiness,
} from '../../util/business_api_util';

import ErrorList from '../error_list';
import ReviewFormCore from './review_form_core';

export default class ReviewForm extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      business: {},
      review: {},
      errors: [],
      loaded: false,
    };

    this.fetchInfo = this.fetchInfo.bind( this );
    this.fetchBusiness = this.fetchBusiness.bind( this );
    this.fetchReviewToEdit = this.fetchReviewToEdit.bind( this );
    this.clearErrors = this.clearErrors.bind( this );
    this.handleChange = this.handleChange.bind( this );
    this.handleDelete = this.handleDelete.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  componentDidMount() {
    this.fetchInfo( this.props );
  }

  // TODO: test if all these conditions are necessary
  componentWillReceiveProps( nextProps ) {
    if ( nextProps.formType !== this.props.formType ) {
      this.fetchInfo( nextProps );
    } else if (
      this.props.formType === 'createReview' &&
      this.props.match.params.business_id !== nextProps.match.params.business_id
    ) {
      this.fetchInfo( nextProps );
    } else if (
      this.props.formType === 'editReview' &&
      this.props.match.params.id !== nextProps.match.params.id
    ) {
      this.fetchInfo( nextProps );
    }
  }

  fetchInfo( props ) {
    this.setState( {
      business: {},
      review: {},
      errrors: [],
      loaded: false
    } );
    if ( props.formType === 'createReview' ) {
      this.fetchBusiness( props.match.params.business_id );
    } else {
      this.fetchReviewToEdit( props.match.params.id );
    }
  }

  fetchBusiness( businessId ) {
    fetchBusiness( businessId )
      .then(
        business => {
          this.setState( {
            business,
            review: {},
            errors: [],
            loaded: true,
          } );
        },
        errors => this.setState( {
          business: {},
          review: {},
          errors: errors.responseJSON,
          loaded: true,
        } )
      );
  }

  fetchReviewToEdit( reviewId ) {
    fetchReview( this.props.match.params.id )
      .then(
        review => {
          if ( this.props.currentUser.id === review.author_id ) {
            fetchBusiness( review.business_id )
              .then(
                business => {
                  this.setState( {
                    business,
                    review,
                    errors: [],
                    loaded: true,
                  } );
                }
              );
          } else {
            this.setState( {
              errors: [ 'Only the author can edit the review' ],
            } );
          }
        },
        errors => this.setState( {
          business: {},
          review: {},
          errors: errors.responseJSON,
          loaded: true,
        } )
      );
  }

  clearErrors() {
    this.setState( {
      errors: []
    } );
  }

  handleChange( field ) {
    return (
      e => {
        e.preventDefault();
        let {
          review
        } = this.state;
        const updatedReview = update( review, {
          [ field ]: {
            $set: e.currentTarget.value
          }
        } );
        this.setState( {
          business: updatedReview,
        } );
      }
    );
  }

  handleDelete( e ) {
    e.preventDefault();
    deleteReview( this.props.match.params.id )
      .then( () => {
        this.props.history
          .push( `/businesses/${this.state.review.business_id}` );
      } );
  }

  handleSubmit( e ) {
    e.preventDefault();
    window.scrollTo( 0, 0 );
    const reviewData = Object.assign( {}, this.state.review );
    if ( this.props.formType === 'createReview' ) {
      createReview( reviewData )
        .then(
          review =>
          this.props.history.push( `/businesses/${review.business_id}` ),
          errors => this.setState( {
            errors: errors.responseJSON,
          } )
        );
    } else {
      editReview( reviewData )
        .then(
          review =>
          this.props.history.push( `/businesses/${review.business_id}` ),
          errors => this.setState( {
            errors: errors.responseJSON,
          } )
        );
    }
  }

  render() {
    const {
      business,
      review,
      errors,
      loaded,
    } = this.state;
    const {
      formType
    } = this.props;
    if ( !loaded ) {
      return (
        <img className='spinner' src={window.staticImages.spinner} />
      );
    }
    if ( !business.id || ( formType === 'editReview' && !review.id ) ) {
      return (
        <div className='center'>
          <ErrorList errors={errors}
            clearErrors={this.clearErrors} />
          <Link to="/" className='link-as-button'>
            Go Home
          </Link>
        </div>
      );
    }
    return (
      <div className='center review-form'>
        <ErrorList errors={ this.state.errors }
          clearErrors={this.clearErrors} />
        <ReviewFormCore
          formType={formType}
          business={business}
          review={review}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
