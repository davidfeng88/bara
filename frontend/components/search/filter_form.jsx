import React from 'react';

const handleChange = (filter, updateFilter) => e => {
  e.preventDefault();
  updateFilter({ [filter]: e.currentTarget.value });
};

const handleClick = (resetFilter, updateFilter) => e => {
  e.preventDefault();
  resetFilter();
  updateFilter();
};

const FilterForm = ({ minPrice, maxPrice, updateFilter, resetFilter }) => (
  <div className="filter">
    <div>Filter results:</div>
    <br/>

    <div className='price-filter'>
      <div className='price-filter-col'>
        <label htmlFor='min-price'>Minimum Price</label>
        <select id="min-price" value={minPrice}
          onChange={handleChange('minPrice', updateFilter)} >
          <option value='1' >$ - Inexpensive</option>
          <option value='2' >$$ - Moderate</option>
          <option value='3' >$$$ - Pricey</option>
          <option value='4' >$$$$ - Ultra High-End</option>
        </select>
      </div>
      <div className='price-filter-col'>
        <label htmlFor='max-price'>Maximum Price</label>
        <select id="max-price" value={maxPrice}
          onChange={handleChange('maxPrice', updateFilter)} >
          <option value='1' >$ - Inexpensive</option>
          <option value='2' >$$ - Moderate</option>
          <option value='3' >$$$ - Pricey</option>
          <option value='4' >$$$$ - Ultra High-End</option>
        </select>
      </div>

    </div>

    <div className='reset-filter'
      onClick={handleClick(resetFilter, updateFilter)}>
      Reset filters
    </div>

  </div>
);

export default FilterForm;
