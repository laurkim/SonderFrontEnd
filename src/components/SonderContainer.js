import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/index";
import { Grid, Container, Header } from 'semantic-ui-react';
import HamburgerMenu from './HamburgerMenu';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
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
      const seedTracks = trackIDsArray.slice(0, 5).join(",");
      nextProps.fetchFeatures(trackIDs);
      nextProps.fetchPlaylist(seedTracks);
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
        <NavigationBar />
        <Grid>
          <Grid.Row>
            <HamburgerMenu playlist={this.props.playlist} user={this.props.currentUser} />
            <Grid.Column width={3} />
            <Grid.Column width={10}>
              <Container text style={{ marginTop: '7em' }}>
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
        <Footer />
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
    personality: state.personalityTraits,
    playlist: state.playlist
  };
};

export default connect(mapStateToProps, actions)(SonderContainer);
