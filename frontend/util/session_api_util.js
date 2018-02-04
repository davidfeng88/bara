export const BackendSignup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user,
    },
  })
);

export const BackendLogin = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user,
    },
  })
);

export const BackendLogout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);
