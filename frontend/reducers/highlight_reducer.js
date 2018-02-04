import {
  UPDATE_HIGHLIGHTED_BUSINESS_ID_IN_STORE,
} from '../actions/highlight_actions';

const defaultState = -1;

const HighlightReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
  case UPDATE_HIGHLIGHTED_BUSINESS_ID_IN_STORE:
    return action.highlightedBusinessId;

  default:
    return state;
  }
};

export default HighlightReducer;

// Sample State
// {
//     highlight: -1,
// }
