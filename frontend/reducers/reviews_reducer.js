import { merge } from 'lodash';

import {
  RECEIVE_BUSINESS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/business_actions.js';

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {

    case RECEIVE_BUSINESS:
      // action.business.reviews is an array
      // convert an array to an object
      action.business.reviews.forEach( review => {
        newState[review.id] = review;
      });
      return newState;

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

export default BusinessesReducer;

// Sample State Shape

//   {
//     1: {
//       id: 1;
//       rating: 5,
//       author_id: 1,
//       business_id: 1,
//       body: "Very good"
//       },
//
//     2: {
//       id: 2;
//       rating: 3,
//       author_id: 2,
//       business_id: 1,
//       body: "It's OK"
//       }
//     }
//   }
// }
