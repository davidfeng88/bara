import React from 'react';

import FilterForm from './filter_form';
import BusinessIndex from './business_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateFilter({
      name: this.props.filters.name,
      location: this.props.filters.location,
    });
  }

  componentWillUpdate(newProps) {
    if (newProps.filters.name !== this.props.filters.name
      || newProps.filters.location !== this.props.filters.location)
    this.props.updateFilter({
      name: newProps.filters.name,
      location: newProps.filters.location,
    });
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
            <h1>Try these filters:</h1>
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
