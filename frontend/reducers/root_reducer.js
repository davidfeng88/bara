import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
// import BenchesReducer from './benches_reducer';
// import FiltersReducer from './filters_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorsReducer
  // benches: BenchesReducer,
  // filters: FiltersReducer,
});

export default RootReducer;
