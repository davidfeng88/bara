import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './dropdown';

class HomeBar extends React.Component {
  constructor(props) {
    super(props);
  }

  personalGreeting() {
    let {
      currentUser,
      toggleDropdown,
      demoLogin,
      logout,
      showDropdown
    } = this.props;
    let dropdownBox = null;

    if (showDropdown) {
      dropdownBox =
      <Dropdown
        currentUser={currentUser}
        logout={logout}
        toggleDropdown={toggleDropdown} />;
    }
    
    return(
      <nav className='home-bar'>
        <div className='home-bar-left'>
        </div>
        <div className='home-bar-right'>
          <div onClick={toggleDropdown} className='dropdown' >
            <img className='home-avatar' src={currentUser.avatar_url} />
            <img className='down-icon' src={window.staticImages.downIcon} />
          </div>
          {dropdownBox}
        </div>
      </nav>
    );
  }

  sessionLinks() {
    return(
      <nav className="home-bar">
        <div onClick={this.props.demoLogin} className='home-demo'>
          Demo Login
        </div>

        <div className='home-bar-right'>
          <div className='home-login'><Link to="/login">Log In</Link></div>
          <div className='home-signup'><Link to="/signup">Sign up</Link></div>
        </div>

      </nav>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.personalGreeting();
    } else {
      return this.sessionLinks();
    }
  }

}

export default HomeBar;
