import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (demoLogin) => (
  <nav className="login-signup">
    <button onClick={demoLogin}>Demo Login</button>
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, demoLogin, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(demoLogin)
);

export default Greeting;
