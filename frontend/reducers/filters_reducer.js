import merge from 'lodash/merge';

import { UPDATE_FILTER, RESET_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  minPrice: 1,
  maxPrice: 4
});

const FiltersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_FILTER:
      // const newFilter = {
      //   [action.filter]: action.value
      // };
      return merge({}, state, action.filters);

    case RESET_FILTER:
      // const newFilters = merge({}, defaultFilters);
      return defaultFilters;

    default:
      return state;
  }
};

export default FiltersReducer;
