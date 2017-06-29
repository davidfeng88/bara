import { merge } from 'lodash';

import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  REMOVE_BUSINESS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/business_actions.js';

const defaultState = {};

const BusinessesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;

    case RECEIVE_BUSINESS:
      newState[action.business.id] = action.business;
      return newState;

    case REMOVE_BUSINESS:
      delete newState[action.business.id];
      return newState;

    case RECEIVE_REVIEW:
      newState[action.review.business_id].reviews[action.review.id]
        = action.review;
      return newState;

    case REMOVE_REVIEW:
      delete newState[action.review.business_id].reviews[action.review.id];
      return newState;

    default:
      return state;
  }
};

export default BusinessesReducer;
