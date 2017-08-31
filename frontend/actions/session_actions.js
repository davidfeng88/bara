import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
  .then(
    (userData) => dispatch(receiveCurrentUser(userData)),
    (errors) => dispatch(receiveErrors(errors.responseText))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveErrors(errors.responseText))
  )
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
  .then(
    (userData) => dispatch(receiveCurrentUser(userData)),
    (errors) => dispatch(receiveErrors(errors.responseText))
  )
);
