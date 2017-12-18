import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/fetchUser";
import { Headers } from '../Adapters/Headers';
import { Container, Header } from 'semantic-ui-react'
import NavigationBar from './NavigationBar';
import Footer from './Footer';
const URL = "http://localhost:3000/api/v1";


class SpotifyContainer extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     topTracks: [],
  //   }
  // }

  componentDidMount() {
    console.log("spotify container mounts")
    // fetch(`${URL}/top_tracks`, { headers: Headers() })
    //     .then(resp => resp.json())
    //     .then(data => data )
          // this.setState({ topTracks: data.top_tracks.tracks }));
  }

  render() {
    // debugger
    return (
      <div>
        {/* nav bar at top of page */}
        <NavigationBar currentUser={this.props.currentUser.display_name} />

        {/* body */}
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Main body</Header>
          <p>blah blah</p>
        </Container>

        {/* footer */}
        <Footer />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(SpotifyContainer);
