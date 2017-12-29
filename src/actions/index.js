import { Headers } from '../Adapters/Headers';
import { WatsonHeaders } from '../Adapters/Headers';
const URL = 'http://localhost:3000/api/v1';

export function loginUser(code, history) {
  return (dispatch) => {
    return fetch(`${URL}/home`, {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem("jwt", user.code)
      if (user.currentUser.username === "keeemster") user.currentUser.display_name = "Laura";
      dispatch({ type: 'LOGIN_USER', payload: user.currentUser })
      history.push("/home")
    });
  };
};

export function fetchUser(jwt, history) {
  return (dispatch) => {
    return fetch(`${URL}/fetch_user`, {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then(user => {
      if (user.currentUser.username === "keeemster") user.currentUser.display_name = "Laura";
      dispatch({ type: 'FETCH_USER', payload: user.currentUser })
    });
  };
};

export function logOutUser() {
  return dispatch => {
    localStorage.clear();
    return {};
  };
};

export function fetchTracks() {
  return (dispatch) => {
    return fetch(`${URL}/top_tracks`, { headers: Headers() })
    .then(res => res.json())
    .then(data => {
       dispatch({ type: 'FETCH_TRACKS', payload: data.top_tracks.items })
    });
  };
};

export function fetchArtists() {
  return (dispatch) => {
    return fetch(`${URL}/top_artists`, { headers: Headers() })
    .then(res => res.json())
    .then(data => {
       dispatch({ type: 'FETCH_ARTISTS', payload: data.top_artists.items })
    });
  };
};

export function fetchFeatures(trackIDs) {
  return (dispatch) => {
    return fetch(`${URL}/track_features?q=${trackIDs}`, { headers: Headers() })
    .then(res => res.json())
    .then(data => {
       dispatch({ type: 'FETCH_FEATURES', payload: data.track_features.audio_features })
    });
  };
};

export function fetchPersonality(input) {
  return (dispatch) => {
    return fetch(`${URL}/personality_insights?q=${input}`, { headers: WatsonHeaders() })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'FETCH_PERSONALITY', payload: data.personality_insights })
    });
  };
};

export function fetchPlaylist(data) {
  console.log("inside fetch playlist");
  console.log("seed data is", data);
  console.log("------------------");
  return (dispatch) => {
    return fetch(`${URL}/recommended_playlists?q=${data}`, { headers: Headers() })
    .then(res => res.json())
    .then(data => {
      debugger
      dispatch({ type: 'FETCH_PLAYLIST', payload: data.playlist })
    });
  };
};
