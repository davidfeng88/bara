import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessesReducer from './businesses_reducer';
import FiltersReducer from './filters_reducer';
import ReviewsReducer from './reviews_reducer';
import HighlightReducer from './highlight_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorsReducer,
  filters: FiltersReducer,
  businesses: BusinessesReducer,
  reviews: ReviewsReducer,
  highlight: HighlightReducer,
});

export default RootReducer;
