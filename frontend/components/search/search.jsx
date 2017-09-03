import React from 'react';
import isEqual from 'lodash/isEqual';
import BusinessIndex from './business_index';
import SampleSearch from './sample_search';

const PriceButton = ({label, name, tooltip, checked, onChange }) => (
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
      tag: this.props.filters.tag,
    }).then( () => {
      this.setState({loaded: true});
      }
    );
    window.scrollTo(0,0);
  }

  componentWillUpdate(newProps) {
    if (newProps.filters.name !== this.props.filters.name
      || newProps.filters.location !== this.props.filters.location
      || newProps.filters.tag !== this.props.filters.tag
      || !isEqual(newProps.filters.prices, this.props.filters.prices))
    {
      this.setState({loaded: false});
      this.props.updateFilter({
        name: newProps.filters.name,
        location: newProps.filters.location,
        prices: newProps.filters.prices,
        tag: newProps.filters.tag,
      }).then( () => {
        this.setState({loaded: true});
        }
      );
    }
  }

  searchResult(businesses) {
    return this.state.loaded ?
      <BusinessIndex businesses={businesses} /> :
      <img className='spinner' src={window.staticImages.spinner} /> ;
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

  searchTitle() {
    let { name, location } = this.props.filters;
    name = name ? name : "places";
    location = location ? `near ${location}` : "";
    return(
      <h1 className='search-title'><strong>Best {name}</strong> {location}</h1>
    );
  }

  render() {
    let { businesses } = this.props;
    return(
      <div>
        <div className='title'>
          <div className='center'>
            <SampleSearch />
            {this.searchTitle()}
            {this.priceButtons()}
          </div>
        </div>
        {this.searchResult(businesses)}
      </div>
    );
  }
}

export default Search;
