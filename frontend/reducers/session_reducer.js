import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullUser = null;

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      return action.currentUser;

    default:
      return state;
  }
};

export default SessionReducer;

// Sample State Shape
// {
//     id: 1,
//     username: "bara"
// }
