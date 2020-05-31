import { csrfToken } from './constants';
export const BackendSignup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user,
    },
  })
);


