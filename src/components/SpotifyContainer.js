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

  componentWillReceiveProps(nextProps) {
    nextProps.currentUser ?
      this.props.fetchTracks()
    : null
  }

  render() {
    return (
      <div>
        {/* nav bar at top of page */}
        <NavigationBar currentUser={this.props.currentUser.display_name} history={this.props.history}/>


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
  debugger;
  return {
    currentUser: state.currentUser.currentUser,
    topTracks: state.tracks
  };
}

export default connect(mapStateToProps, actions)(SpotifyContainer);
