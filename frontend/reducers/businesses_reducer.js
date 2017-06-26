import { merge, values } from 'lodash';

import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  REMOVE_BUSINESS
} from '../actions/business_actions.js';

const defaultState = {
  entities: {},
  currentBusiness: -1
};

const BusinessesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return merge({}, state, { entities: action.businesses });

    case RECEIVE_BUSINESS:
      const business = action.business;
      const newState = merge({}, state);
      newState.entities[business.id] = business;
      newState.currentBusiness = business.id;
      debugger;
      return newState;

    case REMOVE_BUSINESS:
      let nextState = merge({}, state);
      delete nextState.entities[action.business.id];
      return nextState;

    default:
      return state;
  }
};

export default BusinessesReducer;

// Sample State Shape
// {
//   entities: {
//
//     1: {
//       id: 1;
//       name: "Good Pizza",
//       author_id: 1,
//       address 1: "555 W. 25th St.",
//       city: "Chicago",
//       state: "IL",
//       zip: 60637,
//       phone: "(111)111-1111",
//       price: 1,
//       reviews: [1, 2]
//       },
//
//     2: {
//       id: 2;
//       name: "Great Pizza",
//       author_id: 1,
//       address 1: "666 W. 25th St.",
//       city: "Chicago",
//       state: "IL",
//       zip: 60637,
//       phone: "(222)222-2222",
//       price: 2,
//       reviews: [2]
//     }
//   },
//
//   currentBusiness: 1
//
// }
