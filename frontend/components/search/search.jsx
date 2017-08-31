import React from 'react';
import isEqual from 'lodash/isEqual';
import BusinessIndex from './business_index';
import SampleSearch from './sample_search';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.updateFilter({
      name: this.props.filters.name,
      location: this.props.filters.location,
      prices: this.props.filters.prices,
    }).then( () => {
      this.setState({loaded: true});
      }
    );
  }

  componentWillUpdate(newProps) {
    if (newProps.filters.name !== this.props.filters.name
      || newProps.filters.location !== this.props.filters.location
      || !isEqual(newProps.filters.prices, this.props.filters.prices))
    {
      this.props.updateFilter({
        name: newProps.filters.name,
        location: newProps.filters.location,
        prices: newProps.filters.prices,
      }).then( () => {
        this.setState({loaded: true});
        }
      );
    }
  }

  // componentWillUnmount() {
  //   this.props.resetFilter();
  //   this.setState({loaded: false});
  // }

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

  priceButtons() {
    let prices = this.props.filters.prices ? this.props.filters.prices : [];
    return(
      <div>
        <label>$
        <input type='checkbox' name='1'
          checked={prices.includes("1")}
          onChange={this.handleChange} />
        </label>
        <label>$$
        <input type='checkbox' name='2'
          checked={prices.includes("2")}
          onChange={this.handleChange} />
        </label>
        <label>$$$
        <input type='checkbox' name='3'
          checked={prices.includes("3")}
          onChange={this.handleChange} />
        </label>
        <label>$$$$
        <input type='checkbox' name='4'
          checked={prices.includes("4")}
          onChange={this.handleChange} />
        </label>
      </div>
    );
  }

  render() {
    let { businesses, highlight, updateFilter, highlightBusiness } = this.props;
    return(
      <div>
        <div className='title'>
          <div className='center'>
            <SampleSearch />
            {this.priceButtons()}
          </div>
        </div>
        {this.searchResult(businesses)}
      </div>
    );
  }
}

export default Search;
