export const signup = (user) => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);
export const editAccount = (user) => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  })
);
export const login = (cred) => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { cred }
  })
);
export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);
