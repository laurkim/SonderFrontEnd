import React, { Component } from 'react';
import TrackDetail from './TrackDetail';
import { Item } from 'semantic-ui-react';

class TrackList extends Component {
  getTrackFeature = index => {
    return this.props.trackFeatures[index];
  }

  getTrack = () => {
    return this.props.topTracks.map((track, index) => {
      return (
        <TrackDetail
          key={track.id}
          title={track.name}
          id={track.id}
          artist={track.artists[0].name}
          feature={this.getTrackFeature(index)}
          albumCover={track.album.images[1].url}
          albumName={track.album.name}
        />
      )
    });
  };

  render() {
    return (
      <div id="scrollable">
        <Item.Group divided>
          {this.getTrack()}
        </Item.Group>
      </div>
    )
  }
}

export default TrackList;
