import React, { Component } from 'react';
import { connect }  from 'react-redux';
import TrackList from './TrackList';
import * as actions from "../actions/index";
import { Headers } from '../Adapters/Headers';
import { Container, Header, Button } from 'semantic-ui-react'
import NavigationBar from './NavigationBar';
import Footer from './Footer';
const URL = "http://localhost:3000/api/v1";


class SpotifyContainer extends Component {
  constructor() {
    super();

    this.state = {
      topTracks: []
    }
  }

  componentDidMount() {
    console.log("spotify container has mounted");
    console.log("props are", this.props);
    console.log("-------------------------");

    // fetch(`${URL}/top_tracks`, { headers: Headers() })
    // .then(resp => resp.json())
    // .then(data => {debugger})
    // this.setState({ topTracks: data.top_tracks.tracks }));
  }

  componentWillReceiveProps(nextProps) {
    console.log("inside spotify container component will r prop");
    console.log("next props are", nextProps);
    console.log("------------------------------------");
    nextProps.currentUser ?
      fetch(`${URL}/top_tracks`, { headers: Headers() })
      .then(resp => resp.json())
      // .then(data => {debugger})
        // this.setState({ topTracks: data.top_tracks.items }));
      // this.props.fetchTracks()
    : null
  }

  render() {
    console.log("spotify container rendering");
    console.log("props in render are", this.props);
    console.log("-------------------------");
    return (
      <div>
        {/* nav bar at top of page */}
        <NavigationBar currentUser={this.props.currentUser.display_name} history={this.props.history}/>


        {/* body */}
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Main body</Header>
          <p>blah blah</p>
          {/* {this.props.currentUser ?
            <TrackList fetchTopTracks={this.fetchTopTracks} />
            :
            <p>Loading...</p>
          } */}
        </Container>

        {/* footer */}
        <Footer />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser
  };
}

export default connect(mapStateToProps)(SpotifyContainer);
