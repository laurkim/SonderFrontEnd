import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { trackReducer } from './trackReducer';
import { featureReducer } from './featureReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  topTracks: trackReducer,
  trackFeatures: featureReducer
})

export default rootReducer;
