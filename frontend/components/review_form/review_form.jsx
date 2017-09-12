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

const emptyReview = {
  rating: '',
  body: '',
};

// container passed in currentUser and formType
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

    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleDelete = this.handleDelete.bind( this );
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
        },
        errors => this.setState( {
          business: {},
          review: {},
          errors: errors.responseJSON,
          loaded: true,
        } )
      );
  }

  update( field ) {
    return e => this.setState( {
      [ field ]: e.currentTarget.value
    } );
  }

  handleSubmit( e ) {
    e.preventDefault();
    const reviewData = this.state;
    this.props.processForm( reviewData )
      .then( () => {
        this.resetForm();
        this.props.history.push( `/businesses/${this.props.business.id}` );
      } );
  }

  handleDelete( e ) {
    e.preventDefault();
    this.props.deleteReview( this.props.review.id )
      .then( () => {
        this.resetForm();
        this.props.history.push( `/businesses/${this.props.business.id}` );
      } );
  }

  render() {
    const {
      business,
      review,
      errors,
      loaded,
    } = this.state;
    if ( !loaded ) {
      return (
        <img className='spinner' src={window.staticImages.spinner} />
      );
    }
    return (
      <div>
        <ErrorList errors={ this.state.errors }
          clearErrors={this.clearErrors} />
        business: {business.name}<br />
        review: {review.body}<br />
      </div>
    );
  }
}
