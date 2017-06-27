import {
  TOGGLE_DROPDOWN,
  HIDE_DROPDOWN
} from '../actions/dropdown_actions';

const defaultState = false;

const DropdownsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case TOGGLE_DROPDOWN:
      let newState = !state;
      return newState;

    case HIDE_DROPDOWN:
      return false;

    default:
      return state;
  }
};

export default DropdownsReducer;
