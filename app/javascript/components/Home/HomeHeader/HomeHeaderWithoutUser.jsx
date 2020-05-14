import React from 'react';
import PropTypes from 'prop-types';

const HomeHeaderWithoutUser = ({ demoLogin }) => (
  <nav className="home-bar">
    <DemoLoginButton demoLogin={demoLogin} />
    <div className="home-bar-right">
      <LogInLink />
      <SignUpLink />
    </div>
  </nav>
);

export default HomeHeaderWithoutUser;

HomeHeaderWithoutUser.propTypes = {
  demoLogin: PropTypes.func.isRequired,
};

export const DemoLoginButton = ({
  demoLogin,
}) => (
  <div
    className="home-demo"
    onClick={demoLogin}
    onKeyPress={demoLogin}
    role="button"
    tabIndex={0}
  >
    Demo Login
  </div>
);

DemoLoginButton.propTypes = {
  demoLogin: PropTypes.func.isRequired,
};

const LogInLink = () => (
  <div className="home-login">
    <a href="#/login">Log In</a>
  </div>
);

const SignUpLink = () => (
  <div className="home-signup">
    <a href="#/signup">Sign up</a>
  </div>
);
