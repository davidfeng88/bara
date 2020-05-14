import * as SessionAPIUtil from '../util/SessionAPIUtil';

export const UPDATE_CURRENT_USER_IN_STORE = 'UPDATE_CURRENT_USER_IN_STORE';
export const nullUser = null;

const updateCurrentUserInStore = currentUser => ({
  type: UPDATE_CURRENT_USER_IN_STORE,
  currentUser,
});

export const asyncLogin = user => dispatch => (
  SessionAPIUtil.BackendLogin(user)
    .then(userDataFromBackend => dispatch(updateCurrentUserInStore(userDataFromBackend)))
);

export const demoLogin = asyncLogin({
  username: 'Guest',
  password: 'password',
});

export const asyncLogout = () => dispatch => (
  SessionAPIUtil.BackendLogout()
    .then(() => dispatch(updateCurrentUserInStore(nullUser)))
);

export const asyncSignup = user => dispatch => (
  SessionAPIUtil.BackendSignup(user)
    .then(userDataFromBackend => dispatch(updateCurrentUserInStore(userDataFromBackend)))
);
