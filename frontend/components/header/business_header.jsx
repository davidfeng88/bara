import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import LinksContainer from '../link/link_container';

const avatarOrSignUp = (dropdown, toggleDropdown, currentUser, logout) => {
    if (currentUser) {
      return (
        <div className='home-bar-right'>
          <div onClick={toggleDropdown} className='dropdown' >
            <img className='home-avatar' src={currentUser.avatar_url} />
            <img className='down-icon' src={window.staticImages.downIcon} />
          </div>
          {dropdown(currentUser, logout)}
        </div>
      );
    } else {
      return (
        <div className='business-signup'>
          <Link to="/signup">Sign up</Link>
        </div>
      );
    }
};

const login = (currentUser, demoLogin) => {
  if (currentUser) {
    return <div></div>;
  } else {
    return (
      <div className='business-header-row2-right'>
        <div onClick={demoLogin} className='business-demo'>
          Demo Login
        </div>
        <div className="business-login">
          <Link to="/login">Log In</Link>
        </div>
      </div>
    );
  }
};


class BusinessHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDropdown: false };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    e.preventDefault();
    // if (e.currentTarget !=) {
  //   this.setState = {showDropdown: false }
  // } else {
  //
  // }

    this.setState({showDropdown: !this.state.showDropdown });
  }

  dropdown(currentUser, logout) {
    // debugger;
    // if (this.state.showDropdown) {
      return(
        <div className='dropdown-box'>
          <div className='dropdown-box-row1' >
            <div className='dropdown-avatar-wrapper'>
              <img className='dropdown-avatar' src={currentUser.avatar_url} />
            </div>
            <div className='dropdown-name'>{currentUser.username}</div>
          </div>

          <div className='dropdown-box-row2' >
            <a href='#' onClick={logout}>Log Out</a>
          </div>
        </div>
      );
    // } else {
    //   return null;
    // }
  }

  render() {
    let { currentUser, demoLogin, logout } = this.props;
    return (
      <div className='business-header'>
        <div className='business-header-row1-wrapper' >
          <div className='business-header-row1'>
            <div className='business-logo'>
              <Link to="/">
                <img src={window.staticImages.headerLogo} />
              </Link>
            </div>
            <div className='business-search'>
              <SearchContainer />
            </div>
            {avatarOrSignUp(this.dropdown,
              this.toggleDropdown, currentUser, logout)}
          </div>
        </div>

        <div className='business-header-row2-wrapper' >
          <div className='business-header-row2'>
            <div className='business-header-links'>
              <LinksContainer />
            </div>
            {login(currentUser, demoLogin)}
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessHeader;
