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

const personalGreeting = (dropdown, toggleDropdown, currentUser, logout) => (
  <nav className='home-bar'>
    <div className='home-bar-left'>
    </div>
    <div className='home-bar-right'>
      <div onClick={toggleDropdown} className='dropdown' >
        <img className='home-avatar' src={currentUser.avatar_url} />
        <img className='down-icon' src={window.staticImages.downIcon} />
      </div>
      {dropdown(currentUser, logout)}
    </div>

  </nav>

);

class HomeBar extends React.Component {
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

          <div onClick={logout} className='dropdown-box-row2' >
            Log Out
          </div>
        </div>
      );
    // } else {
    //   return null;
    // }
  }

  render() {
    let { currentUser, demoLogin, logout } = this.props;
    if (currentUser) {
      return personalGreeting(this.dropdown,
        this.toggleDropdown, currentUser, logout);
    } else {
      return sessionLinks(demoLogin);
    }
  }
}


export default HomeBar;
