import React from 'react';

import ErrorList from '../error_list';


class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.business) {
      let {name, address, city, state, zipcode, phone, url, price} = props.business;
      this.state = {
        name, address, city, state, zipcode, phone, url, price
      };
    } else {
      this.state = {
        name: '', address: '', city: '', state: '', zipcode: '', phone: '',
        url: '', price: '' };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const business = this.state;
    this.props.processForm(business);
      // then(() => this.props.history.push('/')); go to the business show page
  }

  titleText() {
    if (this.props.formType === 'edit') {
      return 'Update Business Details';
    } else {
      return 'Add a Business';
    }
  }

  submitText() {
    return this.props.formType === 'edit' ? 'Submit Changes' : 'Add Business';
  }
//        <ErrorList errors={ this.props.errors }
          // clearErrors={this.props.clearErrors} />
  render() {
    return(
      <div>

        <div className='container'>
          <div className='col-1-2'>
            <div className="business-form-container">

              <form onSubmit={this.handleSubmit} className="business-form-box">

                <h2>{this.titleText()}</h2>

                <div className="business-form">
                  <label htmlFor='name'>Business Name</label>
                  <div className='input-wrapper'>
                    <input type="text"
                      id="name"
                      value={this.state.name}
                      onChange={this.update('name')}
                      className="login-input"
                      placeholder="Mel's Diner"
                    />
                  </div>

                  <label htmlFor='address'>Address</label>
                  <div className='input-wrapper'>
                    <input type="text"
                      id="address"
                      value={this.state.address}
                      onChange={this.update('address')}
                      className="login-input"
                      placeholder="123 Main St"
                    />
                  </div>

                  <label htmlFor='city'>City</label>
                  <div className='input-wrapper'>
                    <input type="text"
                      id="city"
                      value={this.state.city}
                      onChange={this.update('city')}
                      className="login-input"
                      placeholder="New York"
                    />
                  </div>

                  <label htmlFor='state'>State</label>
                  <div className='input-wrapper'>
                    <input type="text"
                      id="state"
                      value={this.state.state}
                      onChange={this.update('state')}
                      className="login-input"
                      placeholder="NY"
                    />
                  </div>

                  <label htmlFor='phone'>Phone Number</label>
                  <div className='input-wrapper'>
                    <input type="text"
                      id="phone"
                      value={this.state.phone}
                      onChange={this.update('phone')}
                      className="login-input"
                      placeholder="(555)555-5555"
                    />
                  </div>

                  <label htmlFor='url'>Website Address</label>
                  <div className='input-wrapper'>
                    <input type="text"
                      id="url"
                      value={this.state.url}
                      onChange={this.update('url')}
                      className="login-input"
                      placeholder="http://www.google.com"
                    />
                  </div>

                  <div className='input-wrapper'>
                    <button type="submit" >{this.submitText()}</button>
                  </div>

                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    );

  }
}


export default BusinessForm;
