import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/userReducers';

const TheApp = withRouter(App);
const store = createStore(mainReducer, applyMiddleware(thunk));
const MyApp = () => (
  <Router>
    <TheApp />
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);
