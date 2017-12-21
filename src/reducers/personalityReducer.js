export function personalityReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_PERSONALITY':
      return action.payload;
    default:
      return state;
  }
};
