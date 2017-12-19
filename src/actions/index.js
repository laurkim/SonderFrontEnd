import { Headers } from '../Adapters/Headers';
const URL = 'http://localhost:3000/api/v1'

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
}

export function fetchTracks() {
  return (dispatch) => {
    return fetch(`${URL}/top_tracks`, { headers: Headers() })
    .then(res => res.json())
    .then(data => {
       dispatch({ type: 'FETCH_TRACKS', payload: data.top_tracks.items })
    });
  };
};


export function myActionCreator() {
  return {type: 'HELLO_WORLD'}
}
