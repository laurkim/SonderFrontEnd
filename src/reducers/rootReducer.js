import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { trackReducer } from './trackReducer';
import { featureReducer } from './featureReducer';
import { artistReducer } from './artistReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  topTracks: trackReducer,
  trackFeatures: featureReducer,
  topArtists: artistReducer
})

export default rootReducer;
