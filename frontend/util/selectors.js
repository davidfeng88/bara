export const businessesToArray = state => {
  let businessesArray = [];
  businessesArray = Object.keys(state.businesses)
    .map(id => state.businesses[id]);
  return businessesArray;
};

// export const selectCurrentPost = (state, id) => {
//   return state.posts[parseInt(id)];
// };
