import React, { Component } from 'react';
import { connect }  from 'react-redux';
import TrackList from './TrackList';
import * as actions from "../actions/index";
import { Container, Header } from 'semantic-ui-react'
import NavigationBar from './NavigationBar';
import Footer from './Footer';

class SpotifyContainer extends Component {

  componentWillReceiveProps(nextProps) {
    console.log("inside component will receive props");
    console.log("nextProps is", nextProps);
    console.log("nextProps !== this.props", nextProps !== this.props);
    console.log("---------------------");
    nextProps.currentUser && nextProps.topTracks.topTracks.length === 0 ?
      this.props.fetchTracks() : null
  }

  render() {
    console.log("spotify container is rendering");
    console.log("this.props is", this.props);
    console.log("--------------------");
    return (
      <div>
        <NavigationBar currentUser={this.props.currentUser.display_name} />

        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Main body</Header>
          {this.props.topTracks ?
            <TrackList topTracks={this.props.topTracks} /> : null
          }
        </Container>

        <Footer />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.currentUser,
    topTracks: state.topTracks
  };
}

export default connect(mapStateToProps, actions)(SpotifyContainer);
