import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    if (props.parsed) {
      let { name, location } = props.parsed;
      let nameValue = name ? name : '';
      let locationValue = location ? location : '';
      let nameDecoded = decodeURIComponent(nameValue);
      let locationDecoded = decodeURIComponent(locationValue);
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
    if (newProps.parsed) {
      let { name, location } = newProps.parsed;
      let nameValue = name ? name : '';
      let locationValue = location ? location : '';
      let nameDecoded = decodeURIComponent(nameValue);
      let locationDecoded = decodeURIComponent(locationValue);
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
    this.props.history.push(`/businesses/?name=${nameEncoded}&location=${locationEncoded}`);

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='search-bar'>
        <div className='input'>
          <div className='find'>
            <label htmlFor='name'>Find</label>
            <input type="text"
              id="name"
              value={this.state.name}
              onChange={this.update('name')}
              className="login-input"
              placeholder="tacos, cheap dinner, Max's"
            />
          </div>
          <div className='near'>
            <label htmlFor='location'>Near</label>
            <input type="text"
              id="location"
              value={this.state.location}
              onChange={this.update('location')}
              className="login-input"
              placeholder="address, neighborhood, city, state or zip"
            />
          </div>
        </div>

          <button type='submit' className='submit'>
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          </button>

      </form>
    );
  }
}

export default withRouter(SearchBar);
