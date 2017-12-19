import React, { Component } from 'react';
import { connect }  from 'react-redux';
import TrackList from './TrackList';
import * as actions from "../actions/index";
import { Grid, Container, Header, Input, Button } from 'semantic-ui-react'
import NavigationBar from './NavigationBar';
import PersonalityInput from './PersonalityInput';
import Footer from './Footer';

class SpotifyContainer extends Component {

  componentWillReceiveProps(nextProps) {
    // console.log("inside component will receive props");
    // console.log("nextProps is", nextProps);
    // console.log("nextProps !== this.props", nextProps !== this.props);
    // console.log("---------------------");
    if (nextProps.topTracks.length === 0) this.props.fetchTracks();
  }

  render() {
    console.log("props in spotify container are", this.props);
    // console.log("spotify container is rendering");
    // console.log("this.props is", this.props);
    // console.log("--------------------");
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
                <Header as='h1' textAlign='center'>In your own words, what do you look for in a song?</Header>
                <PersonalityInput />
              </Container>
            </Grid.Column>
            <Grid.Column width={3}>
              {/* Internal padding */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              {/* Internal padding */}
            </Grid.Column>
            <Grid.Column width={10}>
              {/* {this.props.topTracks ?
                <TrackList topTracks={this.props.topTracks} /> : null
              } */}
              <p> where does this show up</p>
            </Grid.Column>
            <Grid.Column width={3}>
              {/* Internal padding */}
            </Grid.Column>
          </Grid.Row>
        </Grid>


        <Footer />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    topTracks: state.topTracks
  };
};

export default connect(mapStateToProps, actions)(SpotifyContainer);
