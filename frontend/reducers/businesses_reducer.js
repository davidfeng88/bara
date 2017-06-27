import { merge, values } from 'lodash';

import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  REMOVE_BUSINESS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from '../actions/business_actions.js';

const defaultState = {
  entities: {},
  currentBusiness: -1
};

const BusinessesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return {entities: action.businesses, currentBusiness: -1};

    case RECEIVE_BUSINESS:
    // action.business.reviews is an array. Extract the id information
      newState.entities[action.business.id] = action.business;
      newState.currentBusiness = action.business.id;
      const reviewIDs = action.business.reviews.map( review => review.id);
      newState.entities[action.business.id].reviews = reviewIDs;
      return newState;

    case REMOVE_BUSINESS:
      delete newState.entities[action.business.id];
      return newState;

    case RECEIVE_REVIEW:
    // check if this is an edit or a create action.
    // if edit, move the latest one to the top.
      let array1 = newState.entities[newState.currentBusiness].reviews;
      let id1 = action.review.id;
      let idx1 = array1.indexOf(id);
      if (idx1 > -1) {
        array1.splice(idx1, 1);
      }
      newState.entities[newState.currentBusiness].reviews
        .push(action.review.id);
      return newState;

    case REMOVE_REVIEW:
      let array = newState.entities[newState.currentBusiness].reviews;
      let id = action.review.id;
      let idx = array.indexOf(id);
      if (idx > -1) {
        array.splice(idx, 1);
      }
      return newState;

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
