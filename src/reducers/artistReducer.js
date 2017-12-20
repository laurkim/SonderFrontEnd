export function artistReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_ARTISTS':
      return [...action.payload];
    default:
      return state;
  }
};
