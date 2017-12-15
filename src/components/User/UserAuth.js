import React, { Component } from 'react';
import { Headers } from '../../Adapters/Headers';

class UserAuthorization extends Component{

  componentDidMount() {
    debugger
    this.fetchSpotifyCode();
  }

  fetchSpotifyCode = () => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/base")
    } else {
      fetch('http://localhost:3000/api/v1/home', {
        method: 'POST',
        headers: Headers(),
        body: JSON.stringify({ code: this.props.location.search.split("?code=")[1] })
      })
        .then(res => res.json())
        .then(data => {
          const {currentUser, code} = data
          localStorage.setItem("token", code);
          this.setState({ currentUser: currentUser["display_name"] }, () => this.props.history.push("/base"))
        }
      )
      return null;
    }
    return null;
  }

  render(){
    return (
      <div>
      </div>
    )
  }

}

// const UserAuthorization = props => {
//   const componentDidMount = () => {
//     this.fetchSpotifyCode();
//   }
//
//   const fetchSpotifyCode = () => {
//     if (localStorage.getItem("token")) {
//       this.props.history.push("/base")
//     } else {
//       fetch('http://localhost:3000/api/v1/home', {
//         method: 'POST',
//         headers: Headers(),
//         body: JSON.stringify({ code: this.props.location.search.split("?code=")[1] })
//       })
//         .then(res => res.json())
//         .then(data => {
//           const {currentUser, code} = data
//           localStorage.setItem("token", code);
//           this.setState({ currentUser: currentUser["display_name"] }, () => this.props.history.push("/base"))
//         }
//       )
//       return null;
//     }
//     return null;
//   }
//
//   componentDidMount()
//
//   return (
//     <div>
//     </div>
//   )
//
// }

export default UserAuthorization;
