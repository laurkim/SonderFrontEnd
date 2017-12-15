import { combineReducers } from 'redux';

function userReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload;
    case "LOGOUT_USER":
      localStorage.clear();
      return {};
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  currentUser: userReducer,
})

export default mainReducer;
