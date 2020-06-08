import React from 'react';

import { LoadingSpinner } from '../../util/BusinessInfoUtil';
import {
  SampleSearch,
  PriceButton,
  AddBusiness,
  buildFilters,
} from './SearchUtil';
import BusinessIndex from './BusinessIndex';
import IndexMapContainer from './IndexMapContainer';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      businesses: [],
    };

    this.filters = buildFilters(props.location.search);
    this.filterString = props.location.search;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(`/api/businesses${this.filterString}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const businesses = await response.json();
      this.setState({
        loading: false,
        businesses,
      });
      window.scrollTo(0, 0);
    } catch (e) {
      console.log(e);
    }
  };

  componentWillUpdate = async (newProps) => {
    if (this.props.location.search !== newProps.location.search) {
      this.setState({
        loading: true,
      });
      this.filters = buildFilters(newProps.location.search);
      try {
        const response = await fetch(`/api/businesses${newProps.location.search}`, {
          method: 'GET',
        });
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const businesses = await response.json();
        this.setState({
          loading: false,
          businesses,
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  componentWillUnmount() {
    this.props.highlightBusiness(-1);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const value = e.target.checked;
    const {
      name,
      location,
      tag,
    } = this.filters;
    const nameEncoded = encodeURIComponent(name);
    const locationEncoded = encodeURIComponent(location);
    const tagEncoded = encodeURIComponent(tag);
    const pricesSet = new Set(this.filters.prices);
    if (value) {
      pricesSet.add(e.target.name);
    } else {
      pricesSet.delete(e.target.name);
    }
    const pricesEncoded = Array.from(pricesSet)
      .map(price => `&prices[]=${price}`);
    const pricesQuery = pricesEncoded.join('');
    this.props.history
      .push(`/businesses/?name=${nameEncoded}&location=${locationEncoded}&tag=${tagEncoded}${pricesQuery}`);
  }

  searchTitle() {
    let {
      name,
      location,
    } = this.filters;
    name = name || 'places';
    location = location ? `near ${location}` : '';
    return (
      <h1 className="search-title"><strong>Best {name}</strong> {location}</h1>
    );
  }

  priceButtons() {
    const prices = this.filters.prices ? this.filters.prices : [];
    return (
      <div className="price-buttons">
        <PriceButton
          label="$"
          name="1"
          tooltip="Inexpensive"
          checked={prices.includes('1')}
          onChange={this.handleChange}
        />
        <PriceButton
          label="$$"
          name="2"
          tooltip="Moderate"
          checked={prices.includes('2')}
          onChange={this.handleChange}
        />
        <PriceButton
          label="$$$"
          name="3"
          tooltip="Pricey"
          checked={prices.includes('3')}
          onChange={this.handleChange}
        />
        <PriceButton
          label="$$$$"
          name="4"
          tooltip="Ultra High-End"
          checked={prices.includes('4')}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  searchResult(businesses) {
    return this.state.loading ?
      <LoadingSpinner /> :
      <BusinessIndex businesses={businesses} />;
  }

  render() {
    const {
      businesses,
    } = this.state;
    return (
      <div>
        <div className="title">
          <div className="center">
            <SampleSearch />
            {this.searchTitle()}
            {this.priceButtons()}
          </div>
        </div>
        <div className="business-index-main">
          <div className="center index-grid-row1">
            <div className="index-grid-col1">
              {this.searchResult(businesses)}
            </div>
            <div className="index-grid-col2">
              <IndexMapContainer businesses={businesses} />
            </div>
          </div>
          <AddBusiness />
        </div>
      </div>
    );
  }
}
