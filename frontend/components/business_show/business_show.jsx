import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  fetchBusiness,
} from '../../util/business_api_util';

import ErrorList from '../error_list';
import BusinessShowCore from './business_show_core';

export default class BusinessShow extends React.Component {
  constructor( props ) {
    super( props );
    this.state = ( {
      business: null,
      errors: [],
      reviewId: null,
      loading: true,
    } );

    this.loadBusiness = this.loadBusiness.bind( this );
    this.clearErrors = this.clearErrors.bind( this );
  }

  componentDidMount() {
    this.loadBusiness( this.props );
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.match.params.id !== this.props.match.params.id ) {
      this.setState( {
        business: null,
        errors: [],
        reviewId: null,
        loading: true,
      } );
      this.loadBusiness( nextProps );
    }
  }

  loadBusiness( props ) {
    fetchBusiness( props.match.params.id )
      .then(
        business => {
          let reviewId = null;
          if ( props.currentUser &&
            business.reviewers[ props.currentUser.id ] ) {
            reviewId = business.reviewers[ props.currentUser.id ];
          }
          this.setState( {
            business,
            reviewId,
            errors: [],
            loading: false,
          } );
        },
        errors => this.setState( {
          business: null,
          reviewId: null,
          errors: errors.responseJSON,
          loading: false,
        } )
      );
    window.scrollTo( 0, 0 );
  }

  clearErrors() {
    this.setState( {
      errors: [],
    } );
  }

  render() {
    const {
      business,
      errors,
      loading,
      reviewId,
    } = this.state;
    if ( loading ) {
      return (
        <img className='spinner' src={window.staticImages.spinner} />
      );
    }
    if ( !business ) {
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
      <BusinessShowCore
        business={business}
        reviewId={reviewId}
      />
    );
  }
}