import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import LinksContainer from '../link/link_container';

const avatarOrSignUp = (dropdown, toggleDropdown,
  showDropdown, currentUser, logout) => {

    let dropdownBox;
    if (showDropdown) {
      dropdownBox = dropdown(currentUser, logout);
    } else {
      dropdownBox = null;
    }

    if (currentUser) {
      return (
        <div className='home-bar-right'>
          <div onClick={toggleDropdown} className='dropdown' >
            <img className='home-avatar' src={currentUser.avatar_url} />
            <img className='down-icon' src={window.staticImages.downIcon} />
          </div>
          {dropdownBox}
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
  }

  dropdown(currentUser, logout) {
    return(
      <div onClick={ e => e.stopPropagation() } className='dropdown-box'>
        <div className='dropdown-box-row1' >
          <div className='dropdown-avatar-wrapper'>
            <img className='dropdown-avatar' src={currentUser.avatar_url} />
          </div>
          <div className='dropdown-name'>{currentUser.username}</div>
        </div>

        <div onClick={logout} className='dropdown-box-row2' >
          Log Out
        </div>
      </div>
    );
  }

  render() {
    let { currentUser, toggleDropdown, demoLogin, logout, showDropdown } = this.props;
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
              toggleDropdown, showDropdown, currentUser, logout)}
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
