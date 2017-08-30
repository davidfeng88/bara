import { fetchAllBusinesses } from './business_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export const resetFilter = () => ({
  type: RESET_FILTER
});

// filters = {name: "", location: "New York"}
export const changeFilter = (filters) => ({
  type: UPDATE_FILTER,
  filters,
});

export const updateFilter = (filters) => (dispatch, getState) => {
  dispatch(changeFilter(filters));
  return fetchAllBusinesses(getState().filters)(dispatch);
};
