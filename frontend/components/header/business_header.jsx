import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import LinksContainer from '../link/link_container';

const avatarOrSignUp = (currentUser, logout) => {
    if (currentUser) {
      return (
        <div className='home-nav-right'>
          <img className='home-avatar' src={currentUser.avatar_url} />
          <h2 className="header-name">Hi, {currentUser.username}!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
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
        <div className='business-demo'>
          <button onClick={demoLogin}>Demo Login</button>
        </div>
        <div className="business-login">
          <Link to="/login">Log In</Link>
        </div>
      </div>
    );
  }
};

const BusinessHeader = ({ currentUser, demoLogin, logout }) => {
  return(
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
          {avatarOrSignUp(currentUser)}
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
};

export default BusinessHeader;
