import React, { Component } from 'react';
import TrackDetail from './TrackDetail';

class TrackList extends Component {

  getTrackFeature = index => {
    return this.props.trackFeatures[index];
  }

  getTrack = () => {
    return this.props.topTracks.map((track, index) => {
      return <li key={track.id}><TrackDetail title={track.name} id={track.id} artist={track.artists[0].name} feature={this.getTrackFeature(index)}/></li>
    });
  };

  render() {
    return (
      <div>
        <ol>
          {this.getTrack()}
        </ol>
      </div>
    )
  }
}

export default TrackList;
