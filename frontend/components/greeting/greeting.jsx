import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (demoLogin) => (
  <nav className="home-nav">
    <div className='demo-login'>
      <button onClick={demoLogin}>Demo Login</button>
    </div>

    <div className='login-signup'>
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
	<hgroup className="personal-greeting">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <img src={currentUser.avatar_url} />
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, demoLogin, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(demoLogin)
);

export default Greeting;
