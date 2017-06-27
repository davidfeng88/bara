import { TOGGLE_DROPDOWN } from '../actions/dropdown_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultState = false;

const DropdownsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case TOGGLE_DROPDOWN:
      let newState = !state;
      return newState;

    case RECEIVE_CURRENT_USER:
      return false;

    default:
      return state;
  }
};

export default DropdownsReducer;
