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
// } from './util/review_api_util';
// window.createReview = createReview;
// window.editReview = editReview;
// window.deleteReview = deleteReview;


// 2 actions dispatch them!
// import * as BActions from './actions/business_actions';
// import * as EActions from './actions/error_actions';
// sync actions
// window.receiveAllBusinesses = BActions.receiveAllBusinesses;
// window.receiveBusiness = BActions.receiveBusiness;
// window.removeBusiness = BActions.removeBusiness;

// window.receiveErrors = EActions.receiveErrors;
// window.clearErrors = EActions.clearErrors;
// async actions
// window.fetchAllBusinesses = BActions.fetchAllBusinesses;
// window.fetchBusiness = BActions.fetchBusiness;
// window.createBusiness = BActions.createBusiness;
// window.editBusiness = BActions.editBusiness;
// window.deleteBusiness = BActions.deleteBusiness;


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
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
