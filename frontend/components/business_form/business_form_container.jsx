import React from 'react';
import {
  Link
} from 'react-router-dom';

import update from 'immutability-helper';

import {
  createBusiness,
  fetchBusiness,
  editBusiness,
  deleteBusiness,
  fetchLatlng,
} from '../../util/business_api_util';

import ErrorList from '../error_list';
import BusinessForm from './business_form';

const emptyBusiness = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  phone: '',
  url: '',
  price: '1',
};

export default class BusinessFormContainer extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      business: emptyBusiness,
      errors: [],
      loaded: false,
    };

    this.fetchBusinessToEdit = this.fetchBusinessToEdit.bind( this );
    this.clearErrors = this.clearErrors.bind( this );
    this.handleChange = this.handleChange.bind( this );
    this.handleDelete = this.handleDelete.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );

  }

  componentDidMount() {
    window.scrollTo( 0, 0 );
    if ( this.props.location.pathname.slice( -3 ) === 'new' ) {
      this.setState( {
        loaded: true,
      } );
    } else {
      this.fetchBusinessToEdit( this.props.match.params.id );
    }
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.location.pathname.slice( -3 ) === 'new' ) {
      this.setState( {
        business: emptyBusiness,
        errors: [],
        loaded: true,
      } );
    } else if ( nextProps.match.params.id !== this.props.match.params.id ) {
      this.setState( {
        loaded: false,
      } );
      this.fetchBusinessToEdit( nextProps.match.params.id );
    }
  }

  fetchBusinessToEdit( id ) {
    fetchBusiness( id )
      .then(
        business => {
          this.setState( {
            business,
            errors: [],
            loaded: true,
          } );
        },
        errors => this.setState( {
          business: emptyBusiness,
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
        let {
          business
        } = this.state;
        const newBiz = update( business, {
          [ field ]: {
            $set: e.currentTarget.value
          }
        } );
        this.setState( {
          business: newBiz
        } );
      }
    );
  }

  handleDelete( e ) {
    e.preventDefault();
    deleteBusiness( this.props.match.params.id )
      .then( () => this.props.history.push( "/" ) );
  }

  handleSubmit( e ) {
    e.preventDefault();
    window.scrollTo( 0, 0 );
    let biz = Object.assign( {}, this.state.business );
    fetchLatlng( biz )
      .then(
        response => {
          if ( response.status === 'OK' ) {
            let {
              lat,
              lng
            } = response.results[ 0 ].geometry.location;
            biz.lat = lat;
            biz.lng = lng;
            if ( this.props.location.pathname.slice( -3 ) === 'new' ) {
              createBusiness( biz )
                .then(
                  business =>
                  this.props.history.push( `/businesses/${business.id}` ),
                  errors => this.setState( {
                    errors: errors.responseJSON,
                  } )
                );
            } else {
              editBusiness( biz )
                .then(
                  business =>
                  this.props.history.push( `/businesses/${business.id}` ),
                  errors => this.setState( {
                    errors: errors.responseJSON,
                  } )
                );
            }
          } else {
            this.setState( {
              errors: [ 'Invalid Address' ]
            } );
          }
        }
      );
  }

  render() {
    const formType = this.props.location.pathname.slice( -3 ) === 'new' ?
      'createBusiness' : 'editBusiness';
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
    if ( formType === 'editBusiness' && !business.id ) {
      // business is not found
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
      <div className='center form-outer-wrapper'>
        <ErrorList errors={ this.state.errors }
          clearErrors={this.clearErrors} />
        <BusinessForm
          business={business}
          formType={formType}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
