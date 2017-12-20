import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const TrackDetail = props => {
  return (
    <div align='center'>
      <Header as='h3'>
        <Header.Content>
          {props.title} by {props.artist}
        </Header.Content>
      </Header>
      <p>Liveness: {props.feature.liveness}</p>
      <p>Danceability: {props.feature.danceability}</p>
      <p>Energy: {props.feature.energy}</p>
      <p>Happiness: {props.feature.valence}</p>
      <br/>
    </div>
  )
};

export default TrackDetail;


// {props.artistResult.images.length !== 0 && props.artistResult.images[2] !== undefined ? <Image src={props.artistResult.images[2].url} width="120" height="120" circular /> : null}<br/>
