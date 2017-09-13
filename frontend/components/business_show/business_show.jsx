import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  fetchBusiness
} from '../../util/business_api_util';

import ErrorList from '../error_list';
import BusinessShowCore from './business_show_core';

export default class BusinessShow extends React.Component {
  constructor( props ) {
    super( props );
    this.state = ( {
      business: null,
      errors: [],
      loaded: false,
    } );

    this.clearErrors = this.clearErrors.bind( this );
  }

  clearErrors() {
    this.setState( {
      errors: []
    } );
  }

  componentDidMount() {
    fetchBusiness( this.props.match.params.id )
      .then(
        business => this.setState( {
          business,
          errors: [],
          loaded: true,
        } ),
        errors => this.setState( {
          business: null,
          errors: errors.responseJSON,
          loaded: true,
        } )
      );
    window.scrollTo( 0, 0 );
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.match.params.id !== this.props.match.params.id ) {
      this.setState( {
        business: null,
        errors: [],
        loaded: false,
      } );
      fetchBusiness( nextProps.match.params.id )
        .then(
          business => this.setState( {
            business,
            errors: [],
            loaded: true,
          } ),
          errors => this.setState( {
            business: null,
            errors: errors.responseJSON,
            loaded: true,
          } )
        );
      window.scrollTo( 0, 0 );
    }
  }

  render() {
    const {
      business,
      errors,
      loaded,
    } = this.state;
    if ( !loaded ) {
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
        currentUser={this.props.currentUser}
      />
    );
  }
}
