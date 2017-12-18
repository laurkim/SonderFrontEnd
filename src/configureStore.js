import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/userReducers';

const configureStore = () => {
  return createStore(mainReducer, applyMiddleware(thunk));
};

export default configureStore;
