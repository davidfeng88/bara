import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ErrorList from '../error_list';
// import SessionHeader from '../headers/session_header';

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

        // <SessionHeader />
  render() {
    return (
      <div>

        <div className='session-page-main'>
          <div className="login-form-container col-1-2">
            <ErrorList errors={ this.props.errors } />
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h2>
                {this.props.formType === 'login' ?
                'Log In to Bara'
                : 'Sign Up for Bara'}
              </h2>
              <p className='subheading'>
                {this.props.formType === 'login' ?
                'New to Bara? Sign Up'
                : 'Connect with great local businesses'}
              </p>

              Please {this.props.formType} or {this.navLink()}
              <div className="login-form">
                <br/>
                <label>Username:
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div className='col-1-2'>
            <img src='./assets/images/session-form.png' />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
