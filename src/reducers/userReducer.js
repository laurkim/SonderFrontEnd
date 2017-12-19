export function userReducer(state = {}, action) {
  console.log("inside userReducer");
  console.log("action is", action);
  console.log("---------------");
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload
    case 'LOGOUT_USER':
      return {};
    case 'LOGIN_USER':
      return action.payload
    default:
      return state;
  }
};
