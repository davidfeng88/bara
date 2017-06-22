import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessesReducer from './businesses_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorsReducer,
  businesses: BusinessesReducer
});

export default RootReducer;
