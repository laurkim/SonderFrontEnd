import React from 'react';
import { withRouter } from 'react-router'
import { Button } from 'semantic-ui-react'

const User = (props) => {
  const logOut = () => {
    localStorage.clear()
    props.history.push("/")
  }

  return (
    <div>
      {localStorage.length !== 0 ?
        <div>
          <Button basic color='blue' onClick={logOut}>Log Out</Button>
        </div>
        : null}
    </div>
  )
}

export default withRouter(User);
