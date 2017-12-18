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

// function trackReducer(state = [], action) {
//   switch (action.type) {
//     case 'FETCH_TRACKS':
//       return [...action.payload];
//     default:
//       return state;
//   };
// };

const rootReducer = combineReducers({
  currentUser: userReducer,
  // topTracks: trackReducer,
})

export default rootReducer;
