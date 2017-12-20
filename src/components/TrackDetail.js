import React from 'react';
import { Image } from 'semantic-ui-react'

const TrackDetail = props => {
  console.log(props);
  return (
    <div>
      <p>{props.title} by {props.artist}</p>
    </div>
  )
};

export default TrackDetail;


// {props.artistResult.images.length !== 0 && props.artistResult.images[2] !== undefined ? <Image src={props.artistResult.images[2].url} width="120" height="120" circular /> : null}<br/>
