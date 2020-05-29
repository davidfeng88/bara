import {
  UPDATE_CURRENT_USER_IN_STORE,
  nullUser,
} from '../actions/session_actions';

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
  case UPDATE_CURRENT_USER_IN_STORE:
    return action.currentUser;

  default:
    return state;
  }
};

export default SessionReducer;

// Sample State
// {
//     id: 1,
//     username: "bara",
//     avatar: "/assets/capy.jpg"
// }
