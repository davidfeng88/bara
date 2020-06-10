import React from 'react';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';
import { csrfToken } from '../../util/constants';
import { LoadingSpinner } from '../../util/BusinessInfoUtil';
import ErrorList from '../ErrorList';
import BusinessForm from './BusinessForm';

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
  constructor(props) {
    super(props);

    this.state = {
      business: emptyBusiness,
      errors: [],
      loading: true,
    };

    this.loadBusiness = this.loadBusiness.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.location.pathname.slice(-3) === 'new') {
      this.setState({
        loading: false,
      });
    } else {
      this.loadBusiness(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname.slice(-3) === 'new') {
      this.setState({
        business: emptyBusiness,
        errors: [],
        loading: false,
      });
    } else if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        loading: true,
      });
      this.loadBusiness(nextProps.match.params.id);
    }
  }

  loadBusiness = async(id) => {
    try {
      const response = await fetch(`/api/businesses/${id}`, {
        method: 'GET',
      });
      if (!response.ok) {
        const errors = await response.json();
        throw errors;
      }
      const business = await response.json();
      this.setState({
        business,
        errors: [],
        loading: false,
      });
    } catch (errors) {
      this.setState({
        business: emptyBusiness,
        errors,
        loading: false,
      });
    }
  };

  clearErrors() {
    this.setState({
      errors: [],
    });
  }

  handleChange(field) {
    return (
      (e) => {
        e.preventDefault();
        const {
          business,
        } = this.state;
        const updatedBusiness = update(business, {
          [field]: {
            $set: e.currentTarget.value,
          },
        });
        this.setState({
          business: updatedBusiness,
        });
      }
    );
  }

  handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/businesses/${this.props.match.params.id}`, {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      this.props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    const biz = Object.assign({}, this.state.business);
    try {
      const addressParameters = `address=${blah.address},${biz.city}, ${biz.state}`;
      const key = 'AIzaSyB42USxCYSP5SVIAjZz3hGSmWglUma3zok';
      const addressRawResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${addressParameters}&key=${key}`, {
        method: 'GET',
      });
      if (!addressRawResponse.ok) {
        throw Error('Invalid Address');
      }
      const addressReponse = await addressRawResponse.json();
      const {
        lat,
        lng,
      } = addressReponse.results[0].geometry.location;
      biz.lat = lat;
      biz.lng = lng;
      const apiEndpoint = this.props.location.pathname.slice(-3) === 'new' ? '/api/businesses' : `/api/businesses/${biz.id}`;
      const method = this.props.location.pathname.slice(-3) === 'new' ? 'POST' : 'PATCH';
      const response = await fetch(apiEndpoint, {
        method,
        headers: {
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          business: biz,
        })
      });
      if (!response.ok) {
        const errors = await response.json();
        throw errors;
      }
      const business = await response.json();
      this.props.history.push(`/businesses/${business.id}`);
    } catch (errors) {
      if (typeof errors.map !== 'function') {
        errors = [errors.message];
      }
      this.setState({
        errors,
      });
    }
  };

  render = () => {
    const formType =
      this.props.location.pathname.slice(-3) === 'new' ?
        'createBusiness' : 'editBusiness';
    const {
      business,
      errors,
      loading,
    } = this.state;
    if (loading) {
      return (
        <LoadingSpinner />
      );
    }
    if (formType === 'editBusiness' && !business.id) {
      // business is not found
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
      <div className="center form-outer-wrapper">
        <ErrorList
          errors={this.state.errors}
          clearErrors={this.clearErrors}
        />
        <BusinessForm
          business={business}
          formType={formType}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  };
}
