import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ErrorList from '../error_list';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  titleText() {
    if (this.props.formType === 'login') {
      return 'Log In to Bara';
    } else {
      return 'Sign Up for Bara';
    }
  }

  subheadingText() {
    if (this.props.formType === 'login') {
      return (
        <p className='subheading'>New to Bara?&nbsp;
          <Link to='/signup'>Sign up</Link>
        </p>
      );
    } else {
      return (
        <p className='subheading'>Connect with great local businesses</p>
      );
    }
  }

  submitText() {
    return this.props.formType === 'login' ? 'Log In' : 'Sign Up';
  }

  endText() {
    if (this.props.formType === 'login') {
      return (
        <p className='subtle-text'>New to Bara?&nbsp;
          <Link to='/signup'>Sign up</Link>
        </p>
      );
    } else {
      return (
        <p className='subtle-text'>Already on Bara?&nbsp;
          <Link to='/login'>Log in</Link>
        </p>
      );
    }
  }

  render() {
    return (
      <div className="session-form-container">
        <ErrorList errors={ this.props.errors } />
        <form onSubmit={this.handleSubmit} className="session-form-box">

          <h2>{this.titleText()}</h2>
          {this.subheadingText()}

          <div className="session-form">
            <div className='input-wrapper'>
              <label htmlFor='username' className='hidden'>Username</label>
              <input type="text"
                id="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </div>

            <div className='input-wrapper'>
              <label htmlFor='password' className='hidden'>Password</label>
              <input type="password"
                id="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </div>

            <div className='input-wrapper'>
              <button type="submit" >{this.submitText()}</button>
            </div>

            {this.endText()}

          </div>
        </form>
      </div>

    );
  }
}

export default SessionForm;
