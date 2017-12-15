import React, { Component } from 'react';
import { Headers } from '../../Adapters/Headers';
import * as actions from '../../actions/fetchUser';
import { connect }  from 'react-redux';


class UserAuthorization extends Component {
  componentDidMount() {
    const code = this.props.location.search.split("?code=")[1]
    this.props.fetchUser(code,this.props.history)
  }

  // fetchSpotifyCode = () => {
  //   if (localStorage.getItem("token")) {
  //     this.props.history.push("/base")
  //   } else {
  //     fetch('http://localhost:3000/api/v1/home', {
  //       method: 'POST',
  //       headers: Headers(),
  //       body: JSON.stringify({ code: this.props.location.search.split("?code=")[1] })
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         const {currentUser, code} = data
  //         localStorage.setItem("token", code);
  //         this.setState({ currentUser: currentUser["display_name"] }, () => this.props.history.push("/base"))
  //       }
  //     )
  //     return null;
  //   }
  //   return null;
  // }

  render(){
    return (
      <div>
      </div>
    )
  }
}

export default connect(() => ({}), actions)(UserAuthorization);
