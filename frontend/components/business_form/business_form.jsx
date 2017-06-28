import React from 'react';

import ErrorList from '../error_list';


class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.business) {
      // let {id, author_id, name, address,
      //   city, state, zipcode, phone, url, price} = props.business;
      // this.state = {
      //   id, author_id, name, address, city, state, zipcode, phone, url, price
      // };
      this.state = Object.assign({}, props.business);
    } else {
      this.state = {
        name: '', address: '', city: '', state: '',
        zipcode: '', phone: '', url: '', price: '1' };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const biz = this.state;
    this.props.processForm(biz)
      .then(({business}) => {
        this.resetForm();
        this.props.history.push(`/businesses/${business.id}`);
      });
  }

  resetForm() {
    this.setState({
      name: '', address: '', city: '', state: '',
      zipcode: '', phone: '', url: '', price: '1'
    });
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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBusiness(this.props.business.id)
      .then(() => {
        this.resetForm();
        this.props.history.push("/businesses");
      });
  }

  deleteButton() {
    if (this.props.formType === 'edit') {
      return(
        <div className='input-wrapper'>
          <button onClick={this.handleDelete} >Delete Business</button>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div>

      <ErrorList errors={ this.props.errors }
         clearErrors={this.props.clearErrors} />

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

                  <label htmlFor='zipcode'>ZIP</label>
                  <div className='input-wrapper'>
                    <input type="number"
                      id="zipcode"
                      value={this.state.zipcode}
                      onChange={this.update('zipcode')}
                      className="login-input"
                      placeholder="10001"
                    />
                  </div>

                  <label htmlFor='phone'>Phone Number</label>
                  <div className='input-wrapper'>
                    <input type="tel"
                      id="phone"
                      value={this.state.phone}
                      onChange={this.update('phone')}
                      className="login-input"
                      placeholder="(555)555-5555"
                    />
                  </div>

                  <label htmlFor='url'>Website Address</label>
                  <div className='input-wrapper'>
                    <input type="url"
                      id="url"
                      value={this.state.url}
                      onChange={this.update('url')}
                      className="login-input"
                      placeholder="http://bara.com"
                    />
                  </div>

                  <label htmlFor='price'>Price</label>
                  <select className='input-wrapper'
                    id="price" value={this.state.price}
                    onChange={this.update('price')} >
                    <option value='1' >$    Inexpensive</option>
                    <option value='2' >$$   Moderate</option>
                    <option value='3' >$$$  Pricey</option>
                    <option value='4' >$$$$ Ultra High-End</option>
                  </select>
                  <br />

                  <div className='input-wrapper'>
                    <button type="submit" >{this.submitText()}</button>
                  </div>
                  {this.deleteButton()}
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
