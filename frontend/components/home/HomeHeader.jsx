import React from 'react';
import DropdownContainer from '../header/DropdownContainer';

export default class HomeHeader extends React.Component {
  state = {
    showDropdown: false,
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  handleLogout = () => {
    this.closeDropdown();
    this.props.logout();
  };

  closeDropdown = () => {
    this.setState({
      showDropdown: false,
    });
  };

  render = () => {
    const {
      currentUser,
      demoLogin,
    } = this.props;

    return currentUser ? (
      <nav className="home-bar">
        <div className="home-bar-left" />
        <div className="home-bar-right">
          <div onClick={this.toggleDropdown} className="dropdown">
            <img alt="user home avatar" className="home-avatar" src={currentUser.avatar_url} />
            <i className="fa fa-caret-down" id="down-arrow" aria-hidden="true" />
          </div>
          <DropdownContainer
            currentUser={currentUser}
            logout={this.handleLogout}
            toggleDropdown={this.toggleDropdown}
            showDropdown={this.state.showDropdown}
          />
        </div>
      </nav>
    ) : (
      <nav className="home-bar">
        <DemoLoginButton demoLogin={demoLogin} />
        <div className="home-bar-right">
          <LogInLink />
          <SignUpLink />
        </div>
      </nav>
    );
  };
}

const DemoLoginButton = ({
  demoLogin,
}) => (
  <div onClick={demoLogin} className="home-demo">
    Demo Login
  </div>
);

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
