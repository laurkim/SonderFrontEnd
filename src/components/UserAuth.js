import React, { Component } from 'react';
import * as actions from '../actions/fetchUser';
import { connect }  from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import SpotifyContainer from './SpotifyContainer';

class UserAuthorization extends Component {
  componentDidMount() {
    console.log(this.props.location.search);
    if (this.props.location.search.length !== 0) {
      const code = this.props.location.search.split("?code=")[1]
      this.props.loginUser(code, this.props.history)
      this.props.history.push("/home")
    } else {
      const token = localStorage.jwt;
      this.props.fetchUser(token, this.props.history)
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
