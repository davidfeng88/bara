import * as SessionAPIUtil from '../util/session_api_util';

export const UPDATE_CURRENT_USER_IN_STORE = 'UPDATE_CURRENT_USER_IN_STORE';
export const nullUser = null;

const updateCurrentUserInStore = currentUser => ({
  type: UPDATE_CURRENT_USER_IN_STORE,
  currentUser,
});

export const login = user => dispatch => (
  SessionAPIUtil.BackendLogin(user)
  .then(userData => dispatch(updateCurrentUserInStore(userData)))
);

export const demoLogin = () => login({
  username: 'Guest',
  password: 'password',
});

export const logout = () => dispatch => (
  SessionAPIUtil.BackendLogout()
  .then(() => dispatch(updateCurrentUserInStore(nullUser)))
);

export const signup = user => dispatch => (
  SessionAPIUtil.BackendSignup(user)
  .then(userData => dispatch(updateCurrentUserInStore(userData)))
);
