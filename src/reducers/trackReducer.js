export function trackReducer(state = [], action) {
  // console.log("inside trackReducer");
  // console.log("action is", action);
  // console.log("---------------");
  switch (action.type) {
    case 'FETCH_TRACKS':
      return { topTracks: [...action.payload] };
    default:
      return state;
  }
};
