import React from 'react';
import { withRouter } from 'react-router'
import { Button } from 'semantic-ui-react'
import * as actions from '../actions/fetchUser';
import { connect }  from 'react-redux';

const User = (props) => {
  const logOut = () => {
    localStorage.clear()
    props.history.push("/")
  }

  return (
    <div>
      <Button basic color='blue' onClick={logOut}>Log Out</Button>
    </div>
  )
}

export default connect(() => ({}), actions)(withRouter(User));
