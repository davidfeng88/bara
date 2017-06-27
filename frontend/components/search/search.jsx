import React from 'react';

import FilterForm from './filter_form';
import BusinessIndex from '../business/business_index';


const Search = ({ businesses, minPrice, maxPrice, updateFilter }) => (
  <div>
    <div className='title'>
      <div className='center'>
        <h1>The Best Restaurants
          <span className='normal'> in New York, NY</span></h1>
        <FilterForm
          minPrice={minPrice}
          maxPrice={maxPrice}
          updateFilter={updateFilter}
        />
      </div>
    </div>

    <BusinessIndex businesses={businesses} />

  </div>
);

export default Search;
