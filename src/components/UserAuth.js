import React, { Component } from 'react';
import * as actions from '../actions/fetchUser';
import { connect }  from 'react-redux';
import { Route } from 'react-router-dom';
import SpotifyContainer from './SpotifyContainer';

class UserAuthorization extends Component {
  componentDidMount() {
    if (this.props.location.search.length !== 0) {
      const code = this.props.location.search.split("?code=")[1]
      this.props.fetchUser(code, this.props.history)
    } else {

    }
  }

  render(){
    return (
      <div>
        <Route path="/base" component={SpotifyContainer} />
      </div>
    )
  }
}

export default connect(() => ({}), actions)(UserAuthorization);
