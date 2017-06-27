import { fetchAllBusinesses } from './business_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export const resetFilter = () => ({
  type: RESET_FILTER
});

// export const changeFilter = (filter, value) => ({
export const changeFilter = (filters) => ({ // filters = {minPrice: 4, maxPrice: 4}
  type: UPDATE_FILTER,
  // filter,
  filters,
  // value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchAllBusinesses(getState().filters)(dispatch);
};
