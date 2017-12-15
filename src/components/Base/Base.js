import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../../actions/fetchUser";

class Base extends Component {
  render() {
    return (
      <div>
        <p>inside base component</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Base);
