import React from 'react';
import { Link } from 'react-router-dom';

export const SampleSearch = () => (
  <div className='sample-search'>
    <p>Try these searches:</p>
    <div className='sample-search-title'>
      Name:
    </div>
    <div className='sample-search-entries'>
      <a href="/#/businesses/?name=bur&location=">bur (fuzzy)</a>
      <a href="/#/businesses/?name=Shanghai&location=">Shanghai</a>
    </div>
    <div className='sample-search-title'>
      Address:
    </div>
    <div className='sample-search-entries'>
      <a href="/#/businesses/?name=&location=1st%20ave">1st Ave</a>
      <a href="/#/businesses/?name=&location=New%20York">New York</a>
      <a href="/#/businesses/?name=&location=NY">NY</a>
      <a href="/#/businesses/?name=&location=10013">10013</a>
    </div>
    <div className='sample-search-title'>
      Name & Address:
    </div>
    <div className='sample-search-entries'>
      <a href="/#/businesses/?name=bur&location=19th">bur & 19th</a>
    </div>
    <div className='sample-search-title'>
      Prices:
    </div>
    <div className='sample-search-entries'>
      <a href="/#/businesses/?name=&location=New%20York&prices[]=4">
        "$$$$" in New York
      </a>
      <a href="/#/businesses/?name=&location=&prices[]=1&prices[]=3">
        "$" and "$$$"
      </a>
    </div>
  </div>
);

export const PriceButton = ({label, name, tooltip, checked, onChange }) => (
  <label className='price-button'>
    <input type='checkbox' name={name}
      checked={checked} onChange={onChange} />
    <div className='button'>
      <div className='tooltip-wrapper'>
        <span className='tooltip'>{tooltip}</span>
      </div>
      {label}
    </div>
  </label>
);

export const AddBusiness = () => (
  <div className='center index-grid-row2'>
    <div className='add-business'>
      <h3>Not here? Tell us what we're missing.</h3>
      <p>If the business you're looking for isn't here, add it!</p>
      <div className='add-business-link'>
        <Link to='/businesses/new'>Add A Business</Link>
      </div>
    </div>
  </div>
);
