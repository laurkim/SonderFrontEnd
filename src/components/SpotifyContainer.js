import React, { Component } from 'react';
import { connect }  from 'react-redux';
import TrackList from './TrackList';
import * as actions from "../actions/index";
import { Grid, Container, Header, Input, Button } from 'semantic-ui-react'
import NavigationBar from './NavigationBar';
import PersonalityForm from './PersonalityForm';
import Footer from './Footer';

class SpotifyContainer extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.display_name && nextProps.topTracks.length === 0) {
      nextProps.fetchTracks()
    }

    if (nextProps.topTracks.length > 0 && this.props.trackFeatures.length === 0) {
      const trackIDsArray = nextProps.topTracks.map(track => track.id);
      const trackIDs = trackIDsArray.join(",");
      nextProps.fetchFeatures(trackIDs);
    }
  }

  render() {
    return (
      <div>
        <NavigationBar currentUser={this.props.currentUser.display_name} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              {/* Internal padding */}
            </Grid.Column>
            <Grid.Column width={10}>
              <Container text style={{ marginTop: '7em' }}>
                <Header as='h1' textAlign='center'>What type of music do you like?</Header>
                <PersonalityForm />
              </Container>
            </Grid.Column>
            <Grid.Column width={3}>
              {/* Internal padding */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row />

          <Grid.Row>
            <Grid.Column width={1}>
              {/* Internal padding */}
            </Grid.Column>
            <Grid.Column width={14}>
              {this.props.trackFeatures.length !== 0 ?
                <TrackList align='center' topTracks={this.props.topTracks} trackFeatures={this.props.trackFeatures}/> : null
              }
              <p align='center'>hmmmmmmmmmmmmm.....</p>
            </Grid.Column>
            <Grid.Column width={1}>
              {/* Internal padding */}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Footer />
        </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    topTracks: state.topTracks,
    trackFeatures: state.trackFeatures
  };
};

export default connect(mapStateToProps, actions)(SpotifyContainer);
