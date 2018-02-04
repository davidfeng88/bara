import React from 'react';
import {
  withRouter
} from 'react-router';
import queryString from 'query-string';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    if (props.location.search !== '') {
      let {
        name,
        location
      } = queryString.parse(props.location.search);
      name = name ? name : '';
      location = location ? location : '';
      let nameDecoded = decodeURIComponent(name);
      let locationDecoded = decodeURIComponent(location);
      this.state = {
        name: nameDecoded,
        location: locationDecoded,
      };
    } else {
      this.state = {
        name: '',
        location: '',
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.search !== this.props.location.search) {
      let {
        name,
        location
      } = queryString.parse(newProps.location.search);
      name = name ? name : '';
      location = location ? location : '';
      let nameDecoded = decodeURIComponent(name);
      let locationDecoded = decodeURIComponent(location);
      this.setState({
        name: nameDecoded,
        location: locationDecoded,
      });
    } else {
      this.setState({
        name: '',
        location: '',
      });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.state.name ? this.state.name : '';
    let location = this.state.location ? this.state.location : '';
    let nameEncoded = encodeURIComponent(name);
    let locationEncoded = encodeURIComponent(location);
    this.props.history
      .push(`/businesses/?name=${nameEncoded}&location=${locationEncoded}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='search-bar'>
        <div className='input'>
          <div className='find'>
            <label htmlFor='name'>Find</label>
            <input type="text"
              id="name"
              value={this.state.name}
              onChange={this.update('name')}
              className="login-input"
              placeholder="Shanghai, Burrito"
            />
          </div>
          <div className='near'>
            <label htmlFor='location'>Near</label>
            <input type="text"
              id="location"
              value={this.state.location}
              onChange={this.update('location')}
              className="login-input"
              placeholder="address, city, state or zip"
            />
          </div>
        </div>
        <button type="submit" className="submit">
          <i className="fa fa-search fa-lg" aria-hidden="true" />
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
