import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location:'',
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <form className='search-bar'>
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
        <div className='submit' onClick={this.handleSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </form>
    );
  }
}

export default SearchBar;
