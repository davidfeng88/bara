import React from 'react';
import { Link } from 'react-router-dom';

      // <button >Demo Login</button>
            // <div className='home-login'><Link to="/login">Log In</Link></div>
const sessionLinks = (demoLogin) => (
  <nav className="home-bar">
    <div onClick={demoLogin} className='home-demo'>
      Demo Login
    </div>

    <div className='home-bar-right'>
      <div className='home-login'><Link to="/login">Log In</Link></div>
      <div className='home-signup'><Link to="/signup">Sign up</Link></div>
    </div>

  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <nav className='home-bar'>
    <div className='home-bar-left'>
    </div>
    <div className='home-bar-right'>
      <img className='home-avatar' src={currentUser.avatar_url} />
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  </nav>

);

const HomeBar = ({ currentUser, demoLogin, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(demoLogin)
);

export default HomeBar;
