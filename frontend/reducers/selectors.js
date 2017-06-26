export const businessesToArray = state => {
  let businessesArray = [];
  businessesArray = Object.keys(state.businesses.entities)
    .map(id => state.businesses.entities[id]);
  return businessesArray;
};

export const selectCurrentBusiness = (state) => {
  if (state.businesses.currentBusiness === -1)
    return null;
  else
    return state.businesses.entities[state.businesses.currentBusiness];
};
