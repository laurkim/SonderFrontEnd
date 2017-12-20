export function featureReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_FEATURES':
      return action.payload;
    default:
      return state;
  }
};
