
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { trackReducer } from './trackReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  topTracks: trackReducer
})

export default rootReducer;
