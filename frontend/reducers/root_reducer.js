import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';
import DropdownsReducer from './dropdowns_reducer';
import FiltersReducer from './filters_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorsReducer,
  filters: FiltersReducer,
  reviews: ReviewsReducer,
  businesses: BusinessesReducer,
  showDropdown: DropdownsReducer
});

export default RootReducer;
