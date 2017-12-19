import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { Route } from 'react-router-dom';
import SpotifyContainer from './SpotifyContainer';

class UserAuthorization extends Component {
  componentDidMount() {
    const location = this.props.location.search;
    const history = this.props.history;
    if (location.length !== 0) {
      const code = location.split("?code=")[1];
      this.props.loginUser(code, history);
      history.push("/home");
    } else if (localStorage.length > 0) {
      const token = localStorage.jwt;
      this.props.fetchUser(token, history)
    } else {
      history.push("/");
    }
  }

  render(){
    return (
      <div>
        <SpotifyContainer />
      </div>
    )
  }
}

export default connect(() => ({}), actions)(UserAuthorization);
