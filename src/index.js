import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './App';

const TheApp = withRouter(App);

const MyApp = () => (
  <Router>
    <TheApp />
  </Router>
);

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
