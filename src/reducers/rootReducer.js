import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { trackReducer } from './trackReducer';
import { featureReducer } from './featureReducer';
import { artistReducer } from './artistReducer';
import { personalityReducer } from './personalityReducer';
import { playlistReducer } from './playlistReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  topTracks: trackReducer,
  trackFeatures: featureReducer,
  topArtists: artistReducer,
  personalityTraits: personalityReducer,
  playlist: playlistReducer
})

export default rootReducer;
