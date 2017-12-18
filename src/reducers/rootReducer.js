import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

// function trackReducer(state = [], action) {
//   switch (action.type) {
//     case 'FETCH_TRACKS':
//       return [...action.payload];
//     default:
//       return state;
//   };
// };

const rootReducer = combineReducers({
  currentUser: userReducer
  // topTracks: trackReducer,
})

export default rootReducer;
