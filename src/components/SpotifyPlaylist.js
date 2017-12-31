import React, { Component } from 'react';
import { Headers } from '../Adapters/Headers';
const URL = 'http://localhost:3000/api/v1';

class SpotifyPlaylist extends Component {
  constructor() {
    super()

    this.state = {
      emptyPlaylistID: '',
      completePlaylistID: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playlist.length !== 0 && this.props.playlist.length !== 0) {
      fetch(`${URL}/create_playlist`, {
        method: 'POST',
        headers: Headers()
      })
      .then(res => res.json())
      .then(data => this.setState({
        playlistID: data.new_playlist.id
      }, () => {this.setTracks(nextProps.playlist)}));
    }
  }

  setTracks = tracks => {
    const trackURIs = tracks.map(track => track.uri).join(",");
    return fetch(`${URL}/add_tracks_to_playlist?q=${trackURIs}`, {
      method: 'POST',
      headers: Headers()
    })
    .then(res => res.json())
    .then(data =>
      this.setState({
      completePlaylistID: data.playlist.playlist_id
    })
  );
  }

  render() {
    const URL = `https://open.spotify.com/embed?uri=spotify:user:${this.props.user.username}:playlist:${this.state.completePlaylistID}&view=list`;
    return (
      <div>
        <iframe src={URL}
        frameBorder="0" allowtransparency="true" width="250" height="380"></iframe>
      </div>
    )
  }
}

export default SpotifyPlaylist;
