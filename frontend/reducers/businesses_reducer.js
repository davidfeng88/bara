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
//     TODO: business_tags: [1],
//     TODO: reviews: [1]
        // potentially could indicate orders of reviews (e.g. new to old)
//   },
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
//     business_tags: [1, 4],
//     reviews: [2]
//   }
// }
