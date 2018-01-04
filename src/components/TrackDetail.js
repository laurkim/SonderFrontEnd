import React from 'react';
import { Button, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

const TrackDetail = props => {
  const album = <ImageComponent src='/album.png' width='20' height='20' />;
  const { acousticness, danceability, energy, mode, instrumentalness, valence } = props.feature;

  const condenseTitle = track => {
    return track.includes('(') ? track.replace(/ *\([^)]*\) */g, "") : track;
  }

  const convertToPercentage = number => {
    return (number * 100).toFixed(0);
  }

  return (
      <Item>
        <Item.Image src={props.albumCover} width="120" height="120" />
        <Item.Content>
          <Item.Header>
            {condenseTitle(props.title)}
          </Item.Header>
          <Item.Meta>
            {props.artist}
          </Item.Meta>
          <Item.Description>
            <li>Acousticness: {convertToPercentage(acousticness)}%</li>
            <li>Danceability: {convertToPercentage(danceability)}%</li>
            <li>Energy: {convertToPercentage(energy)}%</li>
            <li>Modality: {mode === 1 ? `Major` : `Minor`}</li>
            <li>Vocal Content: {convertToPercentage(instrumentalness)}%</li>
            <li>Valence: {valence}</li>
          </Item.Description>
        </Item.Content>
      </Item>
  )
};

export default TrackDetail;
