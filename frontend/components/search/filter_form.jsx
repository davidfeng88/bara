import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
    <br/>
    <label>Minimum Price</label>
    <input
      type="number"
      value={minPrice}
      onChange={handleChange('minPrice', updateFilter)}
    />
     <br/>
    <label>Maximum Price</label>
    <input
      type="number"
      value={maxPrice}
      onChange={handleChange('maxPrice', updateFilter)}
    />
  </div>
);

export default FilterForm;
