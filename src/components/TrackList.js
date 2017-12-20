import React, { Component } from 'react';
import TrackDetail from './TrackDetail';

class TrackList extends Component {
  getTrack = () => {
    const trackFeatures = this.props.trackFeatures
    return this.props.topTracks.map((track, index, trackFeatures) => {
      const trackFeature = trackFeatures[index];
      return <li key={track.id}><TrackDetail title={track.name} id={track.id} artist={track.artists[0].name} features={trackFeature} /></li>
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
