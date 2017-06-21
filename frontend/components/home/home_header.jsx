import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (demoLogin) => (
  <nav className="home-nav">
    <div className='demo'>
      <button onClick={demoLogin}>Demo Login</button>
    </div>

    <div className='home-nav-right'>
      <div className='login'>
        <Link to="/login">Log In</Link>
      </div>
      <div className='signup'>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <nav className='home-nav'>
    <div className='home-nav-left'>
    </div>
    <div className='home-nav-right'>
    <img className='home-avatar' src={currentUser.avatar_url} />
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  </nav>

);

const HomeHeader = ({ currentUser, demoLogin, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(demoLogin)
);

export default HomeHeader;
