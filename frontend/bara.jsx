//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

// for test only
// 1 ajax
// import {
//   createReview,
//   editReview,
//   deleteReview,
// } from './util/business_api_util';


// 2 actions dispatch them!
import {
  createReview,
  editReview,
  deleteReview,
} from './actions/business_actions';

// sync actions
window.createReview = createReview;
window.editReview = editReview;
window.deleteReview = deleteReview;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
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
