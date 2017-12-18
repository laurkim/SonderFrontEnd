import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import SpotifyContainer from './SpotifyContainer';

class UserAuthorization extends Component {
  componentDidMount() {
    if (this.props.location.search.length !== 0) {
      const code = this.props.location.search.split("?code=")[1]
      this.props.loginUser(code, this.props.history)
      this.props.history.push("/home")
    } else if (localStorage.length > 0) {
      const token = localStorage.jwt;
      this.props.fetchUser(token, this.props.history)
    } else {
      this.props.history.push("/");
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
