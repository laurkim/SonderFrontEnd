import React, { Component } from 'react';
import { Headers } from '../../Adapters/Headers';
import * as actions from '../../actions/fetchUser';
import { connect }  from 'react-redux';


class UserAuthorization extends Component {
  componentDidMount() {
    const code = this.props.location.search.split("?code=")[1]
    this.props.fetchUser(code,this.props.history)
  }

  render(){
    return (
      <div>
      </div>
    )
  }
}

export default connect(() => ({}), actions)(UserAuthorization);
