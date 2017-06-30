export const businessesToArray = state => {
  let businessesArray = [];
  businessesArray = Object.keys(state.businesses)
    .map(id => state.businesses[id]);
  return businessesArray.reverse();
};

export const selectCurrentBusiness = (state, businessId) => {
  return state.businesses[businessId];
};

export const reviewsToArray = (state, business) => {
  let reviewsArray = [];
  let reviewsObject = business.reviews;
  if (reviewsObject) {
    reviewsArray = Object.keys(reviewsObject)
      .map(id => reviewsObject[id]);
  }
  return reviewsArray.reverse();
};

export const selectCurrentReview = (state, reviewId) => {
  const matchedReview = state.reviews.reviews[reviewId];
  // matchedReview will be undefined if not found.
  if (matchedReview) {
    return matchedReview;
  } else {
    return null;
  }
};
