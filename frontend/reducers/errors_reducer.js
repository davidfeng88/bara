import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/error_actions';

import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  REMOVE_BUSINESS
} from '../actions/business_actions.js';

const defaultState = [];

const errorsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_ERRORS:
      return action.errors;

    case CLEAR_ERRORS:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ALL_BUSINESSES:
    case RECEIVE_BUSINESS:
    case REMOVE_BUSINESS:
      return [];

    default:
      return state;
  }
};

export default errorsReducer;

// Sample State Shape
// [
//   "Title cannot be blank"
// ]
