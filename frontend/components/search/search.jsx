import React from 'react';
import isEqual from 'lodash/isEqual';
import { searchBusinesses } from '../../util/business_api_util';
import {
  SampleSearch,
  PriceButton,
  AddBusiness,
} from './search_util';
import BusinessIndex from './business_index';
import IndexMapContainer from './index_map_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      businesses: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    searchBusinesses(this.props.filters)
    .then( (businesses) => {
      this.setState({
        loaded: true,
        businesses,
      });
    });
    window.scrollTo(0,0);
  }

  componentWillUpdate(newProps) {
    if (newProps.filters.name !== this.props.filters.name
      || newProps.filters.location !== this.props.filters.location
      || newProps.filters.tag !== this.props.filters.tag
      || !isEqual(newProps.filters.prices, this.props.filters.prices))
    {
      this.setState({loaded: false});
      searchBusinesses(newProps.filters)
      .then( (businesses) => {
        this.setState({
          loaded: true,
          businesses,
        });
      });
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({loaded: false});
    const value = e.target.checked;
    let { name, location } = this.props.filters;
    let nameEncoded = encodeURIComponent(name);
    let locationEncoded = encodeURIComponent(location);
    let pricesSet = new Set(this.props.filters.prices);
    if (value) {
      pricesSet.add(e.target.name);
    } else {
      pricesSet.delete(e.target.name);
    }
    let pricesEncoded = Array.from(pricesSet).map( price => `&prices[]=${price}`);
    let pricesQuery = pricesEncoded.join('');
    this.props.history
      .push(`/businesses/?name=${nameEncoded}&location=${locationEncoded}${pricesQuery}`);
  }

  searchTitle() {
    let { name, location } = this.props.filters;
    name = name ? name : "places";
    location = location ? `near ${location}` : "";
    return(
      <h1 className='search-title'><strong>Best {name}</strong> {location}</h1>
    );
  }
  
  priceButtons() {
    let prices = this.props.filters.prices ? this.props.filters.prices : [];
    return(
      <div className='price-buttons'>
        <PriceButton label='$' name='1' tooltip='Inexpensive'
          checked={prices.includes("1")} onChange={this.handleChange} />
        <PriceButton label='$$' name='2' tooltip='Moderate'
          checked={prices.includes("2")} onChange={this.handleChange} />
        <PriceButton label='$$$' name='3' tooltip='Pricey'
          checked={prices.includes("3")} onChange={this.handleChange} />
        <PriceButton label='$$$$' name='4' tooltip='Ultra High-End'
          checked={prices.includes("4")} onChange={this.handleChange} />
      </div>
    );
  }

  searchResult(businesses) {
    return this.state.loaded ?
      <BusinessIndex businesses={businesses} /> :
      <img className='spinner' src={window.staticImages.spinner} /> ;
  }

  render() {
    let { businesses } = this.state;
    return(
      <div>
        <div className='title'>
          <div className='center'>
            <SampleSearch />
            {this.searchTitle()}
            {this.priceButtons()}
          </div>
        </div>
        <div className='business-index-main'>
          <div className='center index-grid-row1'>
            <div className='index-grid-col1'>
              {this.searchResult(businesses)}
            </div>
            <div className='index-grid-col2'>
              <div className='css-sticky'>
               <IndexMapContainer businesses={businesses} />
              </div>
            </div>
          </div>
          <AddBusiness />
        </div>
      </div>
    );
  }
}

export default Search;
