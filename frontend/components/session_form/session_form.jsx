import React from 'react';
import {
  Link,
} from 'react-router-dom';
import ErrorList from '../error_list';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // click 'Sign Up' from the login page or vice versa
    if (nextProps.formType !== this.props.formType) {
      this.setState({
        username: '',
        password: '',
        errors: [],
      });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user)
      .then(
        () => this.props.history.goBack(),
        (errors) => this.setState({
          errors: errors.responseJSON,
        })
      );
  }

  demoLogin(e) {
    e.preventDefault();
    const guestUser = {
      username: 'Guest',
      password: 'password',
    };
    this.props.login(guestUser)
      .then(() => this.props.history.goBack());
  }

  titleText() {
    return this.props.formType === 'login' ?
      'Log In to Bara' :
      'Sign Up for Bara';
  }

  subheadingText() {
    return this.props.formType === 'login' ? (
      <p className="subheading">New to Bara?&nbsp;
        <Link to="/signup">Sign up</Link>
      </p>
    ) : (
      <p className="subheading">Connect with great local businesses</p>
    );
  }

  submitText() {
    return this.props.formType === 'login' ? 'Log In' : 'Sign Up';
  }

  endText() {
    return this.props.formType === 'login' ? (
      <p className="subtle-text">New to Bara?&nbsp;
        <Link to="/signup">Sign up</Link>
      </p>
    ) : (
      <p className="subtle-text">Already on Bara?&nbsp;
        <Link to="/login">Log in</Link>
      </p>
    );
  }

  clearErrors() {
    this.setState({
      errors: [],
    });
  }

  render() {
    return (
      <div>
      <ErrorList errors={this.state.errors}
        clearErrors={this.clearErrors} />
        <div className='center flex-box'>
          <div className='col-1-2'>
            <div className="session-form-container">
              <form onSubmit={this.handleSubmit} className="session-form-box">
                <h2>{this.titleText()}</h2>
                {this.subheadingText()}
                <div className="session-form">
                  <div className="input-wrapper">
                    <label htmlFor="username"
                      className="hidden">Username</label>
                    <input type="text"
                      id="username"
                      value={this.state.username}
                      onChange={this.update("username")}
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
                  <div className="input-wrapper">
                    <button type="submit" >{this.submitText()}</button>
                  </div>
                  <div className="input-wrapper">
                    <button onClick={this.demoLogin} >
                      Demo Login
                    </button>
                  </div>
                  {this.endText()}
                </div>
              </form>
            </div>
          </div>
          <div className="col-1-2 session-pic">
            <img src={window.staticImages.sessionPic} />
          </div>
        </div>
      </div>
    );
  }
}
