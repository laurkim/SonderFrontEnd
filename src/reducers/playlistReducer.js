export function playlistReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_PLAYLIST':
      return [...action.payload];
    default:
      return state;
  }
};
