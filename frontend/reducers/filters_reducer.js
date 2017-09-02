import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  name: "",
  location: "",
  prices: "",
  tag: "",
});

const FiltersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_FILTER:
      return action.filters;

    default:
      return state;
  }
};

export default FiltersReducer;
