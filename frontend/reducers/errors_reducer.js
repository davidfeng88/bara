import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/error_actions';

import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const defaultState = [];

const errorsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_ERRORS:
      return action.errors;

    case CLEAR_ERRORS:
    case RECEIVE_CURRENT_USER:
      return [];

    default:
      return state;
  }
};

export default errorsReducer;

// Sample State Shape
// [
//   "Title cannot be blank",
// ]
