import {
  combineReducers,
} from 'redux';

import SessionReducer from './session_reducer';
import HighlightReducer from './highlight_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  highlightedBusinessId: HighlightReducer,
});

export default RootReducer;
