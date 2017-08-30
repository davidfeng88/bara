import merge from 'lodash/merge';

import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  REMOVE_BUSINESS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/business_actions.js';

const defaultState = {};

const BusinessesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;

    case RECEIVE_BUSINESS:
      newState[action.business.id] = action.business;
      return newState;

    case REMOVE_BUSINESS:
      delete newState[action.business.id];
      return newState;

    case RECEIVE_REVIEW:
    // if there is no reviews, the reviews won't be a key in the business
      if (!newState[action.review.business_id].reviews) {
        newState[action.review.business_id].reviews = {};
      }
      newState[action.review.business_id].reviews[action.review.id]
        = action.review;
      return newState;

    case REMOVE_REVIEW:
      delete newState[action.review.business_id].reviews[action.review.id];
      return newState;

    default:
      return state;
  }
};

export default BusinessesReducer;

// Sample State Shape
// {
//   1: {
//     id: 1;
//     name: "Good Pizza",
//     author_id: 1,
//     address 1: "555 W. 25th St.",
//     city: "Chicago",
//     state: "IL",
//     zip: 60637,
//     phone: "(111)111-1111",
//     price: 1,
//     reviews: {1: {review1 object}, 2: {review2 object}, ..}
//     },
//
//   2: {
//     id: 2;
//     name: "Great Pizza",
//     author_id: 1,
//     address 1: "666 W. 25th St.",
//     city: "Chicago",
//     state: "IL",
//     zip: 60637,
//     phone: "(222)222-2222",
//     price: 2,
//     (no reviews, so there is no 'reviews' key)
//   }
// }
