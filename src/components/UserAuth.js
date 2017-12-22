import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import SonderContainer from './SonderContainer';

class UserAuthorization extends Component {
  componentDidMount() {
    const props = this.props;
    const location = props.location.search;
    const history = props.history;
    if (location.length !== 0) {
      const code = location.split("?code=")[1];
      props.loginUser(code, history);
      history.push("/home");
    } else if (localStorage.length > 0) {
      const token = localStorage.jwt;
      props.fetchUser(token, history)
    } else {
      history.push("/");
    }
  }

  render(){
    return (
      <div>
        <SonderContainer />
      </div>
    )
  }
};

export default connect(() => ({}), actions)(UserAuthorization);
