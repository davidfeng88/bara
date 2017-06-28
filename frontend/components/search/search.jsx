import React from 'react';

import FilterForm from './filter_form';
import BusinessIndex from './business_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateFilter();
  }

  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    let { businesses, minPrice, maxPrice,
      updateFilter, resetFilter } = this.props;
    return(
      <div>
        <div className='title'>
          <div className='center'>
            <h1>The Best Restaurants
              <span className='normal'> in New York, NY</span></h1>
            <FilterForm
              minPrice={minPrice}
              maxPrice={maxPrice}
              updateFilter={updateFilter}
              resetFilter={resetFilter}
            />
          </div>
        </div>
        <BusinessIndex businesses={businesses} />
      </div>
    );
  }
}

export default Search;
