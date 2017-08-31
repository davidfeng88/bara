import React from 'react';
import { withRouter } from 'react-router';

const handleChange = (filter, updateFilter) => e => {
  e.preventDefault();
  updateFilter({ [filter]: e.currentTarget.value });
};

const handleClick = (resetFilter, updateFilter) => e => {
  e.preventDefault();
  resetFilter();
  updateFilter();
};

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
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

  render() {
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
}

export default withRouter(FilterForm);
