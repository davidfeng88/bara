import React from 'react';
import {
  Link
} from 'react-router-dom';
import FormMap from './form_map';

const BusinessForm = ( {
  business,
  formType,
  handleChange,
  handleDelete,
  handleSubmit,
} ) => {

  const {
    name = '',
      address = '',
      city = '',
      state = '',
      zipcode = '',
      phone = '',
      url = '',
      price = '1',
  } = business;

  const titleText = formType === 'createBusiness' ?
    <h2>Add a Business</h2> : <h2>Update Business Details</h2>;

  const submitText = formType === 'createBusiness' ?
    'Add Business' : 'Submit Changes';

  const deleteButton = formType === 'createBusiness' ?
    null :
    <div className='input-wrapper'>
      <button onClick={handleDelete} >Delete Business</button>
    </div>;

  let cancelButton;
  if ( formType === 'createBusiness' ) {
    cancelButton = (
      <Link to="/" className='link-as-button-no-margin'>Go Home</Link>
    );
  } else {
    let businessLink = `/businesses/${business.id}`;
    cancelButton = (
      <Link to={businessLink} className='link-as-button-no-margin'>Cancel</Link>
    );
  }

  return (
    <div className='center form-outer-wrapper'>
      {titleText}
      <div className='form-inner-wrapper'>
        <form onSubmit={handleSubmit} className="business-form">
          <label htmlFor='name'>Business Name</label>
          <div className='input-wrapper'>
            <input type="text"
              id="name"
              value={name}
              onChange={handleChange('name')}
              className="login-input"
              placeholder="Mel's Diner"
            />
          </div>

          <label htmlFor='address'>Address</label>
          <div className='input-wrapper'>
            <input type="text"
              id="address"
              value={address}
              onChange={handleChange('address')}
              className="login-input"
              placeholder="123 Main St"
            />
          </div>

          <label htmlFor='city'>City</label>
          <div className='input-wrapper'>
            <input type="text"
              id="city"
              value={city}
              onChange={handleChange('city')}
              className="login-input"
              placeholder="New York"
            />
          </div>

          <label htmlFor='state'>State</label>
          <div className='input-wrapper'>
            <input type="text"
              id="state"
              value={state}
              onChange={handleChange('state')}
              className="login-input"
              placeholder="NY"
            />
          </div>

          <label htmlFor='zipcode'>ZIP</label>
          <div className='input-wrapper'>
            <input type="number"
              id="zipcode"
              value={zipcode}
              onChange={handleChange('zipcode')}
              className="login-input"
              placeholder="10001"
            />
          </div>

          <label htmlFor='phone'>Phone</label>
          <div className='input-wrapper'>
            <input id="phone"
              value={phone}
              onChange={handleChange('phone')}
              className="login-input"
              placeholder="(555)555-5555"
            />
          </div>

          <label htmlFor='url'>Web Address</label>
          <div className='input-wrapper'>
            <input id="url"
              value={url}
              onChange={handleChange('url')}
              className="login-input"
              placeholder="http://bara.com"
            />
          </div>

          <label htmlFor='price'>Price</label>
          <select className='input-wrapper'
            id="price" value={price}
            onChange={handleChange('price')} >
            <option value='1' >$    Inexpensive</option>
            <option value='2' >$$   Moderate</option>
            <option value='3' >$$$  Pricey</option>
            <option value='4' >$$$$ Ultra High-End</option>
          </select>
          <br />

          <div className='input-wrapper'>
            <button type="submit" >{submitText}</button>
          </div>
          {deleteButton}
          {cancelButton}
        </form>
        <FormMap
          lat={business.lat}
          lng={business.lng}
          formType={formType}
        />
      </div>
    </div>
  );
};

export default BusinessForm;
