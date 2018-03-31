import React from 'react';
import { Link } from 'react-router-dom';

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

  loadBusiness(id) {
    fetchBusiness(id)
      .then(
        (business) => {
          this.setState({
            business,
            errors: [],
            loading: false,
          });
        },
        errors => this.setState({
          business: emptyBusiness,
          errors: errors.responseJSON,
          loading: false,
        }),
      );
  }

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

  handleDelete(e) {
    e.preventDefault();
    deleteBusiness(this.props.match.params.id)
      .then(() => this.props.history.push('/'));
  }

  handleSubmit(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    const biz = Object.assign({}, this.state.business);
    fetchLatlng(biz)
      .then((response) => {
        if (response.status === 'OK') {
          const {
            lat,
            lng,
          } = response.results[0].geometry.location;
          biz.lat = lat;
          biz.lng = lng;
          if (this.props.location.pathname.slice(-3) === 'new') {
            createBusiness(biz)
              .then(
                business =>
                  this.props.history.push(`/businesses/${business.id}`),
                errors => this.setState({
                  errors: errors.responseJSON,
                }),
              );
          } else {
            editBusiness(biz)
              .then(
                business =>
                  this.props.history.push(`/businesses/${business.id}`),
                errors => this.setState({
                  errors: errors.responseJSON,
                }),
              );
          }
        } else {
          this.setState({
            errors: ['Invalid Address'],
          });
        }
      });
  }

  render() {
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
        <img className="spinner" src={window.staticImages.spinner} />
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
  }
}
