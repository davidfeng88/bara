//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

// for test only
// 1 ajax
// import { login, signup, logout } from './util/session_api_util';
// window.login = login;
// window.logout = logout;
// window.signup = signup;

// 2 actions
// import * as SActions from './actions/session_actions';
// import * as EActions from './actions/error_actions';
// sync actions
// window.receiveCurrentUser = SActions.receiveCurrentUser;
// window.receiveErrors = EActions.receiveErrors;
// window.clearErrors = EActions.clearErrors;
// async actions
// window.signup = SActions.signup;
// window.login = SActions.login;
// window.logout = SActions.logout;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // for test only
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
