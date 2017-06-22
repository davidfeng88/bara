export const businessesToArray = state => {
  let businessesArray = [];
  businessesArray = Object.keys(state.businesses)
    .map(id => state.businesses[id]);
  return businessesArray;
};

export const selectCurrentBusiness = (state, id) => {
  return state.businesses[parseInt(id)];
};
