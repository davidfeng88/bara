import { HIGHLIGHT_BUSINESS } from '../actions/highlight_actions';

const defaultState = -1;

const HighlightReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case HIGHLIGHT_BUSINESS:
      return action.hightlightBusinessId;

    default:
      return state;
  }
};

export default HighlightReducer;
