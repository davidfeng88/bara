export const businessesToArray = state => {
  let businessesArray = [];
  businessesArray = Object.keys(state.businesses)
    .map(id => state.businesses[id]);
  return businessesArray;
};

export const selectCurrentBusiness = (state, businessId) => {
  return state.businesses[businessId];
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
