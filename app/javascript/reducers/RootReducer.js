import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import HighlightReducer from './HighlightReducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  highlightedBusinessId: HighlightReducer,
});

export default RootReducer;
