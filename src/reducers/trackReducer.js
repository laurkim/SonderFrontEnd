export function trackReducer(state = { topTracks: [] }, action) {
  switch (action.type) {
    case 'FETCH_TRACKS':
      console.log("inside trackReducer");
      console.log("payload is", action.payload);
      console.log("---------------");
      return { topTracks: [...action.payload] };
    default:
      return state;
  }
};
