import React, { Component } from 'react';


class TrackList extends Component {
  constructor() {
    super();

    this.state = {
      topTracks: []
    }
  }

  componentDidMount() {
    console.log("inside track list");
    fetch(`${URL}/top_tracks`, { headers: Headers() })
    .then(resp => resp.json())
    .then(data => {debugger})
    //         // this.setState({ topTracks: data.top_tracks.tracks }));
  }

  // const tracks = props.topTracks.map(prop => {return <li>prop.id</li>});

  render() {
    return (
      <div>
        <ul>
          {/* {tracks} */}
        </ul>
      </div>
    )
  }
}

export default TrackList;
