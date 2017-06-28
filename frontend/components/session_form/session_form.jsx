import React from 'react';
import { Link } from 'react-router-dom';

import ErrorList from '../error_list';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formType !== this.props.formType) {
      this.setState({
        username: '',
        password: ''
      });
      this.props.clearErrors();
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
    this.props.processForm(user)
      .then(() => this.props.history.goBack());
  }

  demoLogin(e) {
    e.preventDefault();
    const guestUser = {username: 'guest', password: 'password'};
    this.props.login(guestUser)
      .then(() => this.props.history.goBack());

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
      <div>
        <ErrorList errors={ this.props.errors }
          clearErrors={this.props.clearErrors} />
        <div className='container'>
          <div className='col-1-2'>
            <div className="session-form-container">

              <form onSubmit={this.handleSubmit} className="session-form-box">

                <h2>{this.titleText()}</h2>
                {this.subheadingText()}

                <div className="session-form">
                  <div className='input-wrapper'>
                    <label htmlFor='username'
                      className='hidden'>Username</label>
                    <input type="text"
                      id="username"
                      value={this.state.username}
                      onChange={this.update('username')}
                      className="login-input"
                      placeholder="Username"
                    />
                  </div>

                  <div className='input-wrapper'>
                    <label htmlFor='password'
                      className='hidden'>Password</label>
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

                  <div className='input-wrapper'>
                    <button onClick={this.demoLogin} type="submit" >
                      Demo Login
                    </button>
                  </div>

                  {this.endText()}

                </div>
              </form>
            </div>
          </div>

          <div className='col-1-2 session-pic'>
            <img src={window.staticImages.sessionPic} />
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
