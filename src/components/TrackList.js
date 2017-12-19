import React, { Component } from 'react';


class TrackList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("inside tracklist");
    console.log("component will r pr where nextProps is", nextProps);
    console.log("--------------------");
  }

  // const tracks = props.topTracks.map(prop => {return <li>prop.id</li>});

  render() {
    console.log("tracklist is rendering");
    console.log("------------------");
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
