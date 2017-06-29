import { merge } from 'lodash';

import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  REMOVE_BUSINESS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/business_actions.js';

const defaultState = {
  currentBusiness: -1,
  reviews: {},
};

const ReviewsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return defaultState;

    case RECEIVE_BUSINESS:

      return {
        currentBusiness: action.business.id,
        reviews: action.business.reviews,
      };

    case REMOVE_BUSINESS:
      return defaultState;

    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;

    case REMOVE_REVIEW:
      delete newState[action.review.id];
      return newState;

    default:
      return state;
  }
};

export default ReviewsReducer;
