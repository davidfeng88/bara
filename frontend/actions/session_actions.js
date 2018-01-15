import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ( {
  type: RECEIVE_CURRENT_USER,
  currentUser,
} );

export const login = user => dispatch => (
  SessionAPIUtil.login( user )
  .then(
    ( userData ) => dispatch( receiveCurrentUser( userData ) )
  )
);

export const demoLogin = () => login( {
  username: 'Guest',
  password: 'password'
} );

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then(
    () => dispatch( receiveCurrentUser( null ) )
  )
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup( user )
  .then(
    ( userData ) => dispatch( receiveCurrentUser( userData ) )
  )
);