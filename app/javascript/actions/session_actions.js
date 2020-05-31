import { csrfToken } from '../util/constants';
export const UPDATE_CURRENT_USER_IN_STORE = 'UPDATE_CURRENT_USER_IN_STORE';
export const nullUser = null;

const updateCurrentUserInStore = currentUser => ({
  type: UPDATE_CURRENT_USER_IN_STORE,
  currentUser,
});

export const asyncLogin = user => dispatch => (
  fetch('/api/session', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': csrfToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
    }),
  })
  .then(response => response.json())
  .then(userDataFromBackend => dispatch(updateCurrentUserInStore(userDataFromBackend)))
  .catch( e => {
    console.log('Error in asyncLogin');
    console.log(e);
  })
);

export const demoLogin = asyncLogin({
  username: 'Guest',
  password: 'password',
});

export const asyncLogout = () => dispatch => (
  fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': csrfToken,
    },
  })
  .then(() => dispatch(updateCurrentUserInStore(nullUser)))
  .catch( e => {
    console.log('Error in asyncLogout');
    console.log(e);
  })
);

export const asyncSignup = user => dispatch => (
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': csrfToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
    }),
  })
  .then(response => response.json())
  .then(userDataFromBackend => dispatch(updateCurrentUserInStore(userDataFromBackend)))
  .catch( e => {
    console.log('Error in asyncSignup');
    console.log(e);
  })
);
