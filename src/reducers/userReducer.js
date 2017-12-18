export function userReducer(state = { currentUser: {} }, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return { currentUser: action.payload };
    case 'LOGOUT_USER':
      return {};
    case 'LOGIN_USER':
      return { currentUser: action.payload };
    default:
      return state;
  }
};
