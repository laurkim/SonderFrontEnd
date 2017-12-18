export function trackReducer(state = { topTracks: [] }, action) {
  switch (action.type) {
    case 'FETCH_TRACKS':
      return { topTracks: [...action.payload] };
    default:
      return state;
  }
};
