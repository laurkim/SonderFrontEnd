import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import UserAuthorization from './components/UserAuth';
import SpotifyContainer from './components/SpotifyContainer';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={UserAuthorization} />
        <Route path="/base" component={SpotifyContainer} />
      </div>
    );
  }
}

export default App;
