import React from 'react';

import FilterForm from './filter_form';
import BusinessIndex from './business_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }

  componentDidMount() {
    this.props.updateFilter({
      name: this.props.filters.name,
      location: this.props.filters.location,
    }).then( () => {
      this.setState({loaded: true});
      }
    );
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
    this.setState({loaded: false});
  }

  searchResult(businesses) {
    if (this.state.loaded) {
      return(
        <BusinessIndex businesses={businesses} />
      );
    } else {
      return(
        <img className='spinner' src={window.staticImages.spinner} />
      );
    }
  }

  render() {
    let { businesses, highlight, minPrice, maxPrice,
      updateFilter, resetFilter, highlightBusiness } = this.props;
    return(
      <div>
        <div className='title'>
          <div className='center'>
            <h1>Try these searches:</h1>

            <div className='sample-search'>
              <div className='sample-search-title'>
                Address:
              </div>
              <div className='sample-search-entries'>
                <a href="/#/businesses/?name=&location=30%20water%20st">30 Water St</a>
                <a href="/#/businesses/?name=&location=1st%20ave">1st Ave</a>
              </div>

              <div className='sample-search-title'>
                City:
              </div>
              <div className='sample-search-entries'>
                <a href="/#/businesses/?name=&location=New%20York">New York</a>
              </div>

              <div className='sample-search-title'>
                State:
              </div>
              <div className='sample-search-entries'>
                <a href="/#/businesses/?name=&location=NY">NY</a>
              </div>

              <div className='sample-search-title'>
                Zip:
              </div>
              <div className='sample-search-entries'>
                <a href="/#/businesses/?name=&location=10013">10013</a>
              </div>
            </div>
            <FilterForm
              minPrice={minPrice}
              maxPrice={maxPrice}
              updateFilter={updateFilter}
              resetFilter={resetFilter}
            />
          </div>
        </div>
        {this.searchResult(businesses)}
      </div>
    );
  }
}

export default Search;
