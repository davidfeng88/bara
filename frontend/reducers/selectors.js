export const businessesToArray = state => {
  let businessesArray = [];
  businessesArray = Object.keys(state.businesses.entities)
    .map(id => state.businesses.entities[id]);
  return businessesArray;
};

export const selectCurrentBusiness = (state, businessId) => {
  return state.businesses.entities[businessId];
};

export const reviewsToArray = (state, business) => {
  let reviewsArray = [];
  if (business) {
    reviewsArray = business.reviews.map(reviewId => state.reviews[reviewId]);
  }
  return reviewsArray;
};

export const selectCurrentReview = (state, reviewId) => {
  const matchedReview = state.reviews[reviewId];
  // matchedReview will be undefined if not found.
  if (matchedReview) {
    return matchedReview;
  } else {
    return null;
  }
};
