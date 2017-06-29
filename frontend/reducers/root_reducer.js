import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BusinessesReducer from './businesses_reducer';
import DropdownsReducer from './dropdowns_reducer';
import FiltersReducer from './filters_reducer';
import ReviewsReducer from './reviews_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorsReducer,
  filters: FiltersReducer,
  businesses: BusinessesReducer,
  showDropdown: DropdownsReducer,
  reviews: ReviewsReducer,
});

export default RootReducer;
