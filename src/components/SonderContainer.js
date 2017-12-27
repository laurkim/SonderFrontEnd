import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/index";
import { Grid, Container, Header } from 'semantic-ui-react';
import { slide as Menu } from 'react-burger-menu';
import PersonalityForm from './PersonalityForm';
import PersonalityChart from './PersonalityChart';
import TrackList from './TrackList';

class SonderContainer extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.display_name && nextProps.topTracks.length === 0) {
      nextProps.fetchTracks();
      nextProps.fetchArtists();
    }

    if (nextProps.topTracks.length > 0 && this.props.trackFeatures.length === 0) {
      const trackIDsArray = nextProps.topTracks.map(track => track.id);
      const trackIDs = trackIDsArray.join(",");
      nextProps.fetchFeatures(trackIDs);
    }
  }

  renderTrackList = () => {
    return (
      <TrackList topTracks={this.props.topTracks} trackFeatures={this.props.trackFeatures} />
    );
  }

  renderPersonalityChart = () => {
    window.scrollTo(0, 405);
    return (
      <Grid.Column width={7}>
        <PersonalityChart traits={this.props.personality} />
      </Grid.Column>
    );
  }

  render() {
    const padding = !this.props.personality.word_count ? 5 : 2;
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={10}>
              <Container text style={{ marginTop: '7em' }}>
                <Header as='h1' textAlign='center'>What type of music do you like?</Header>
                <PersonalityForm topArtists={this.props.topArtists} topTracks={this.props.topTracks} />
              </Container>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>

          <Grid.Row />

          <Grid.Row>
            <Grid.Column width={padding} />
            <Grid.Column width={6}>
              {this.props.trackFeatures.length !== 0 ? this.renderTrackList() : null}
            </Grid.Column>
            {!!this.props.personality.word_count ? this.renderPersonalityChart() : null}
            <Grid.Column width={padding} />
          </Grid.Row>
        </Grid>
        </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    topTracks: state.topTracks,
    trackFeatures: state.trackFeatures,
    topArtists: state.topArtists,
    personality: state.personalityTraits
  };
};

export default connect(mapStateToProps, actions)(SonderContainer);
