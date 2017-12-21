import React from 'react';
import { Button, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

const TrackDetail = props => {
  const album = <ImageComponent src='/album.png' width='20' height='20' />;
  const { liveness, danceability, energy, valence } = props.feature;
  return (
      <Item>
        <Item.Image src={props.albumCover} width="120" height="120" />
        <Item.Content>
          <Item.Header as='a'>
            {props.title}
          </Item.Header>
          <Item.Meta>
            {props.artist}
          </Item.Meta>
          <Item.Description>
            <li>Liveness: {liveness}</li>
            <li>Danceability: {danceability}</li>
            <li>Energy: {energy}</li>
            <li>Valence: {valence}</li>
          </Item.Description>
          <Item.Extra>
            <Label>
              <Image avatar src='/albumLogo.png' width='5' height='5'/>
              <span> {props.albumName}</span>
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
  )
};

export default TrackDetail;


// {props.artistResult.images.length !== 0 && props.artistResult.images[2] !== undefined ? <Image src={props.artistResult.images[2].url} width="120" height="120" circular /> : null}<br/>
