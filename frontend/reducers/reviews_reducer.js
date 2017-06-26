import { merge, values } from 'lodash';

import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  REMOVE_BUSINESS
} from '../actions/business_actions.js';

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;

    case RECEIVE_BUSINESS:
      const newBusiness = {[action.business.id]: action.business};
      return merge({}, state, newBusiness);

    case REMOVE_BUSINESS:
      let nextState = merge({}, state);
      delete nextState[action.business.id];
      return nextState;

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
